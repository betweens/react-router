# 处理更新阻止

<!-- React Router has a number of location-aware components that use the current `location` object to determine what they render. By default, the current `location` is passed implicitly to components using React's context model. When the location changes, those components should re-render using the new `location` object from the context. -->
React路由器有许多位置感知组件，它们使用当前的“location”对象来确定它们呈现的内容。 默认情况下，当前的`location`通过React的上下文模型隐式传递给组件。 当location发生变化时，这些组件应该使用上下文中新的“location”对象重新渲染。

<!-- React provides two approaches to optimize the rendering performance of applications: the `shouldComponentUpdate` lifecycle method and the `PureComponent`. Both block the re-rendering of components unless the right conditions are met. Unfortunately, this means that React Router's location-aware components can become out of sync with the current location if their re-rendering was prevented. -->
React提供了两种方法来优化应用程序的渲染性能：`shouldComponentUpdate`生命周期方法和`PureComponent`。 除非满足正确的条件，否则都会阻止组件的重新渲染。 不幸的是，这意味着React Router的位置感知组件可能会与当前位置不同步，如果它们的重新渲染被阻止的话。

### Example of the Problem

我们从一个阻止更新的组件开始。

```js
class UpdateBlocker extends React.PureComponent {
  render() {
    return this.props.children
  }
}
```

<!-- When the `<UpdateBlocker>` is mounting, any location-aware child components will use the current `location` and `match` objects to render. -->
当“<UpdateBlocker>”装载时，任何位置感知的子组件都将使用当前的“location”和“match”对象进行渲染。

```js
// location = { pathname: '/about' }
<UpdateBlocker>
  <NavLink to='/about'>About</NavLink>
  // <a href='/about' class='active'>About</a>
  <NavLink to='/faq'>F.A.Q.</NavLink>
  // <a href='/faq'>F.A.Q.</a>
</UpdateBlocker>
```

/*When the location changes, the `<UpdateBlocker>` does not detect any prop or state changes, so its child components will not be re-rendered.*/
当location改变时，`<UpdateBlocker>`不检测任何prop或状态改变，所以它的子组件不会被重新渲染。

```js
// location = { pathname: '/faq' }
<UpdateBlocker>
  // 链接不会重新渲染，所以它们保留了以前的属性
  <NavLink to='/about'>About</NavLink>
  // <a href='/about' class='active'>About</a>
  <NavLink to='/faq'>F.A.Q.</NavLink>
  // <a href='/faq'>F.A.Q.</a>
</UpdateBlocker>
```

### `shouldComponentUpdate`

/*In order for a component that implements `shouldComponentUpdate` to know that it _should_ update when the location changes, its `shouldComponentUpdate` method needs to be able to detect location changes.*/
为了使实现`shouldComponentUpdate`的组件知道它应该在位置更改时更新，它的`shouldComponentUpdate`方法需要能够检测位置更改。

/*If you are implementing `shouldComponentUpdate` yourself, you _could_ compare the location from the current and next `context.router` objects. However, as a user, you should not have to use context directly. Instead, it would be ideal if you could compare the current and next `location` without touching the context.*/
如果你正在自己实现`shouldComponentUpdate`，你可以比较当前和下一个`context.router`对象的位置。 但是，作为用户，您不应该直接使用上下文。 相反，如果您可以在不触及上下文的情况下比较当前和下一个“位置”，那将是理想的。

#### 第三方代码

/*You may run into issues with components not updating after a location change despite not calling `shouldComponentUpdate` yourself. This is most likely because `shouldComponentUpdate` is being called by third-party code, such as `react-redux`'s `connect` and `mobx-react`'s `observer`.*/
尽管你自己不调用`shouldComponentUpdate`，你可能遇到组件更新后不能更新的问题。 这很可能是因为`shouldComponentUpdate`被第三方代码调用，比如`react-redux`的`connect`和`mobx-react`的`observer`。

```js
// react-redux
const MyConnectedComponent = connect(mapStateToProps)(MyComponent)

// mobx-react
const MyObservedComponent = observer(MyComponent)
```

/*With third-party code, you likely cannot even control the implementation of `shouldComponentUpdate`. Instead, you will have to structure your code to make location changes obvious to those methods.*/
使用第三方代码，你可能甚至无法控制`shouldComponentUpdate`的实现。 相反，你将不得不构建你的代码，使位置变化明显的方法。

/*Both `connect` and `observer` create components whose `shouldComponentUpdate` methods do a shallow comparison of their current `props` and their next `props`. Those components will only re-render when at least one prop has changed. This means that in order to ensure they update when the location changes, they will need to be given a prop that changes when the location changes.*/
`connect`和`observer`都创建了一些组件，它们的`shouldComponentUpdate`方法对他们当前的`props`和他们的下一个`props`进行浅层的比较。 这些组件只有在至少有一个props改变时才会重新渲染。 这意味着为了确保他们在位置变化时进行更新，当位置变化时，他们需要被赋予一个改变的props。
### `PureComponent`

/*React's `PureComponent` does not implement `shouldComponentUpdate`, but it takes a similar approach to preventing updates. When a "pure" component updates, it will do a shallow comparison of its current `props` and `state` to the next `props` and `state`. If the comparison does not detect any differences, the component will not update. Like with `shouldComponentUpdate`, that means that in order to force a "pure" component to update when the location changes, it needs to have a prop or state that has changed.*/
React的`PureComponent`不实现`shouldComponentUpdate`，但是它采取了类似的方法来防止更新。 当一个“纯粹的”组件更新时，它会对其当前的“props”和“state”与下一个“props”和“state”进行比较。 如果比较没有发现任何差异，则组件不会更新。 就像`shouldComponentUpdate`一样，这意味着为了强制更新一个“纯粹”的组件，当这个位置发生变化时，它需要有一个prop或者state改变。
### 解决方案

#### 快速解决方案
/*If you are running into this issue while using a higher-order component like `connect` (from react-redux) or `observer` (from Mobx), you can just wrap that component in a `withRouter` to remove the blocked updates.*/
如果在使用像connect这样的高级组件时（来自react-redux）或observer（来自Mobx），可能会遇到这个问题，你可以将这个组件封装在一个`withRouter`中去除阻塞的更新。

```javascript
// redux before
const MyConnectedComponent = connect(mapStateToProps)(MyComponent)
// redux after
const MyConnectedComponent = withRouter(connect(mapStateToProps)(MyComponent))

// mobx before
const MyConnectedComponent = observer(MyComponent)
// mobx after
const MyConnectedComponent = withRouter(observer(MyComponent))
```

**This is not the most efficient solution**, but will prevent the blocked updates issue. For more info regarding this solution, read the [Redux guide](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/redux.md#blocked-updates).  To understand why this is not the most optimal solution, read [this thread](https://github.com/ReactTraining/react-router/pull/5552#issuecomment-331502281).
**这不是最有效的解决方案**，但会阻止更新问题。 有关此解决方案的更多信息，请阅读[Redux指南](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/redux.md#blocked-updates). 要理解为什么这不是最理想的解决方案，请阅读[this thread](https://github.com/ReactTraining/react-router/pull/5552#issuecomment-331502281)。
#### 推荐解决方案
/*The key to avoiding blocked re-renders after location changes is to pass the blocking component the `location` object as a prop. This will be different whenever the location changes, so comparisons will detect that the current and next location are different.*/
在location变化之后避免被重新渲染的关键是将阻塞组件作为一个prop传递给`location`对象。 只要位置发生变化，情况就会有所不同，所以比较会检测到当前和下一个位置是不同的。

```js
// location = { pathname: '/about' }
<UpdateBlocker location={location}>
  <NavLink to='/about'>About</NavLink>
  // <a href='/about' class='active'>About</a>
  <NavLink to='/faq'>F.A.Q.</NavLink>
  // <a href='/faq'>F.A.Q.</a>
</UpdateBlocker>

// location = { pathname: '/faq' }
<UpdateBlocker location={location}>
  <NavLink to='/about'>About</NavLink>
  // <a href='/about'>About</a>
  <NavLink to='/faq'>F.A.Q.</NavLink>
  // <a href='/faq' class='active'>F.A.Q.</a>
</UpdateBlocker>
```

#### 获取位置

为了将当前的`location`对象作为prop传递给一个组件，您必须有权访问它。 一个组件可以访问`location`的主要方式是通过一个`<Route>`组件。 当一个“<Route>”匹配时（或者总是使用“children”属性），它将当前的“location”传递给它所呈现的子元素。

```js
<Route path='/here' component={Here}/>
const Here = (props) => {
  // props.location = { pathname: '/here', ... }
  return <div>You are here</div>
}

<Route path='/there' render={(props) => {
  // props.location = { pathname: '/there', ... }
  return <div>You are there</div>
}}/>

<Route path='/everywhere' children={(props) => {
  // props.location = { pathname: '/everywhere', ... }
  return <div>You are everywhere</div>
}}/>
```

<!-- This means that given a component that blocks updates, you can easily pass it the `location` as a prop in the following ways: -->
这意味着给定一个阻止更新的组件，你可以很容易地把它作为一个prop传递给它，方法如下：

```js
// the Blocker is a "pure" component, so it will only
// update when it receives new props
class Blocker extends React.PureComponent {
  render() {
    <div>
      <NavLink to='/oz'>Oz</NavLink>
      <NavLink to='/kansas'>Kansas</NavLink>
    </div>
  }
}
```

1.一个由<Route>直接呈现的组件不必担心被阻塞的更新，因为它将`location`注入为prop。

```js
// The <Blocker>'s location prop will change whenever
// the location changes
<Route path='/:place' component={Blocker}/>
```

2.直接由<Route>呈现的组件可以将该位置prop传递给它创建的任何子元素。

```js
<Route path='/parent' component={Parent} />

const Parent = (props) => {
  // <Parent> receives the location as a prop. Any child
  // element it creates can be passed the location.
  return (
    <SomeComponent>
      <Blocker location={props.location} />
    </SomeComponent>
  )
}
```

如果组件不是由<Route>呈现，并且组件在其变量范围内没有“location”，会发生什么？ 有两种方法可以将`location`自动注入到组件中。

1.渲染一个无路径的“<Route>”。 虽然`<Route>`通常用于匹配特定的路径，无路径的`<Route>`将始终匹配，所以它将始终呈现其组件。

```js
// 无路径<Route> = <Blocker>将始终呈现
const MyComponent= () => (
  <SomeComponent>
    <Route component={Blocker} />
  </SomeComponent>
)
```

2.你可以用`withRouter`高级组件包装一个组件，它将会被赋予当前的`location`作为它的一个props。

```js
// 在内部，路由器只是呈现无路径的<Route>
const BlockAvoider = withRouter(Blocker)

const MyComponent = () => (
  <SomeComponent>
    <BlockAvoider />
  </SomeComponent>
)
```
