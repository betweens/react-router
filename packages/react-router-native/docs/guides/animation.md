# Animation

本指南现在有点稀少，但是应该提供足够的洞察力来帮助您实现一些优秀的动画，如果您已经习惯了动画。 由于React路由器主要是组件，所有典型的动画策略都适用。 唯一的区别是触发动画的东西。 本指南试图引发一些启发，而不是提供复制/粘贴代码。

# Element Transitions

当用户导航时，一些元素应该保持动画状态
页。 对于这些情况，[`Route`][Route] `children` prop是完美的。

考虑这个没有路由器的应用程序。 当按下<TouchableHighlight />时
侧边栏的动画将切换。

```js
class Sidebar extends Component {
  state {
    anim: new Animated.Value(
      this.props.isOpen ? 0 : 1
    )
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen !== this.props.isOpen) {
      Animated.timing(this.state.anim, {
        toValue: nextProps.isOpen ? 1 : 0
      }).start()
    }
  }

  render() {
    // ...
  }
}

class App extends Component {
  state = {
    sidebarIsOpen: false
  }

  render() {
    const { sidebarIsOpen } = this.state
    return (
      <View>
        <Sidebar isOpen={sidebarIsOpen}/>
        <TouchableHighlight onPress={() => {
          this.setState(state => !state.sidebarIsOpen)
        }}>
          <Text>Open Sidebar</Text>
        </TouchableHighlight>
        <Screen/>
      </View>
    )
  }
}
```

现在我们可以用一个路径替换状态，从而可以深入链接到任何地方打开的侧栏，甚至可以与其他应用程序进行深层链接。

```jsx
class App extends Component {
  render() {
    return (
      <View>
        <Route path="/sidebar" children={({ match }) => (
          // `children` always renders, match or not. This
          // way we can always render the sidebar, and then
          // tell it if its open or not
          <Sidebar isOpen={!!match}/>
        )}/>
        <Link to="/sidebar">
          <Text>Open Sidebar</Text>
        </Link>
        <Screen/>
      </View>
    )
  }
}
```

这在列表中可能非常有趣。 对于列表中的每个项目，您都可以
制作一条匹配它的路线，然后做一个动画来打开或关闭
该列表的那一部分，或者将其中一个元素转换为
头.

```jsx
<View>
  {chutneys.map(chutney => (
    <Route path={`/chutney/${chutney.id}`}>
      {({ match }) => (
        <Chutney isActive={match}/>
      )}
    </Route>
  ))}
</View>
```

每个chutney都有它自己的route，它们总是呈现为列表的一部分，当它变为活动状态（他们点击该项目或从其他方式）时，它可以以固定位置将图像动画化到标题（然后可能停止呈现 动画是完整的，让“真正的”标题滚动页面）。

## 页面转换

由于组件的声明性质，当你在一个屏幕上时，按下一个链接，并导航到另一个屏幕，旧的页面不在渲染树中，甚至不再有动画！ 关键是记住React元素只是对象。 你可以保存它们并再次渲染它们。 这是从一个页面（离开渲染树）到另一个页面进行动画制作的策略。

如果您在移动设备上访问了此网站，或者缩小了浏览器的体积，则可以单击后退按钮查看此类动画。 策略是首先不要考虑动画。 只要渲染你的路线和链接，并使所有的工作，然后用动画组件包装你的组件打开。

我们将在页面中考虑一些child routes

```jsx
class Parent extends Component {
  render() {
    return (
      <View>
        <Switch>
          <Route path="/settings"/>
          <Route path="/notifications"/>
        </Switch>
      </View>
    )
  }
}
```

一旦没有动画的情况下，我们准备添加一个动画.


```js
<AnimatedChild
  anim={this.state.anim}
  atParent={this.props.match.isExact}
  animating={this.state.animating}
>
  <Switch location={this.props.location}>
    <Route path="/settings"/>
    <Route path="/notifications"/>
  </Switch>
</AnimatedChild>
```

使用[`<Switch>`][Switch]很重要。 它将确保只有一个route 能够匹配，因此给我们一个`props.children`上的单个元素来挂起和渲染动画。 最后，你必须把位置传递给Switch。 它更喜欢在内部路由器位置使用`props.location`，这使得保存的子元素能够在之后被更换，并且继续匹配旧的位置。

有一些交给“AnimatedChild”的props，parent在管理动画时会知道。 再次，这个指南比现在复制/粘贴更灵感，请随时查看本网站的来源，以确切的实施。 好的，我们来看看`AnimatedChild`的实现（它是从本网站使用的动画粘贴的）。

```js
class AnimatedChildRoute extends Component {

  static propTypes = {
    children: PropTypes.node,
    anim: PropTypes.object,
    atParent: PropTypes.bool,
    animating: PropTypes.bool
  }

  state = {
    // we're going to save the old children so we can render
    // it when it doesnt' actually match the location anymore
    previousChildren: null
  }

  componentWillReceiveProps(nextProps) {
    // figure out what to do with the children
    const navigatingToParent = nextProps.atParent && !this.props.atParent
    const animationEnded = this.props.animating && !nextProps.animating

    if (navigatingToParent) {
      // we were rendering, but now we're heading back up to the parent,
      // so we need to save the children (har har) so we can render them
      // while the animation is playing
      this.setState({
        previousChildren: this.props.children
      })
    } else if (animationEnded) {
      // When we're done animating, we can get rid of the old children.
      this.setState({
        previousChildren: null
      })
    }
  }

  render() {
    const { anim, children } = this.props
    const { previousChildren } = this.state
    return (
      <Animated.View style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: anim.interpolate({
          inputRange: [ 0, 1 ],
          outputRange: [ 20, 0 ]
        }),
        opacity: anim.interpolate({
          inputRange: [ 0, 0.75 ],
          outputRange: [ 0, 1 ]
        })
      }}>
        {/* render the old ones if we have them */}
        {previousChildren || children}
      </Animated.View>
    )
  }
}
```

希望能帮助你思考。 同样，动画本身与router是一样的，区别在于知道何时触发它们。 以下列出了在componentWillReceiveProps中检查的内容，以决定如何处理基于路由器位置的动画：

General change in location

```js
nextProps.location !== this.props.location`
```

Going from child to parent:

```js
nextProps.match.isExact && !this.props.match.isExact
```

Going from parent to child:

```js
!nextProps.match.isExact && this.props.match.isExact
```

祝你好运！ 我们希望通过更多的细节和实例来展开本节。

  [Route]:../api/Route.md
  [Switch]:../api/Switch.md
