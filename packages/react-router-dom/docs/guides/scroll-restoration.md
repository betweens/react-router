# Scroll Restoration

在React Router的早期版本中，我们提供了滚动恢复的开箱即用支持，人们从此一直在寻求它。 希望这个文档可以帮助你从滚动条和路由中获得你需要的东西！

浏览器开始用自己的`history.pushState`来处理滚动恢复，就像用普通的浏览器导航一样。 它已经在铬工作，它真的很棒。 [Here's the Scroll Restoration Spec](https://majido.github.io/scroll-restoration-proposal/history-based-api.html#web-idl).

由于浏览器开始处理“默认情况”，应用程序有不同的滚动需求（如本网站！），所以我们不提供默认的滚动管理。 本指南应该可以帮助您实现您拥有的任何滚动需求。

## Scroll to top

大多数情况下，所有你需要的是“scroll to the top”，因为你有一个长的内容页面，导航时，保持向下滚动。 这很简单，可以通过在每个导航中滚动窗口的<ScrollToTop>组件来处理，确保将其封装在`withRouter`中，以便访问路由器的prop：

```jsx
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
```

然后将其呈现在应用程序的顶部，但在路由器下方:

```jsx
const App = () => (
  <Router>
    <ScrollToTop>
      <App/>
    </ScrollToTop>
  </Router>
)

// 或者只是把它放在任何你想要的地方，但只有一个 :)
<ScrollToTop/>
```

如果你有一个标签界面连接到路由器，那么你可能不希望滚动到顶部切换标签。 相反，在您需要的特定位置，如何使用“<ScrollToTopOnMount>”？

```jsx
class ScrollToTopOnMount extends Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}

class LongContent extends Component {
  render() {
    <div>
      <ScrollToTopOnMount/>
      <h1>Here is my long content page</h1>
    </div>
  }
}

// somewhere else
<Route path="/long-content" component={LongContent}/>
```

## 通用解决方案

对于一个通用的解决方案（以及哪些浏览器开始实施本地化），我们谈的是两件事情:

1. 滚动导航，所以你不会开始一个新的屏幕滚动到底部
2. 在 "back" and "forward" 点击恢复窗口和溢出元素的滚动位置（但不是链接点击！）

有一点我们想要发布一个通用的API。 这就是我们前进的方向:

```jsx
<Router>
  <ScrollRestoration>
    <div>
      <h1>App</h1>

      <RestoredScroll id="bunny">
        <div style={{ height: '200px', overflow: 'auto' }}>
          I will overflow
        </div>
      </RestoredScroll>
    </div>
  </ScrollRestoration>
</Router>
```

首先，ScrollRestoration会在导航上滚动窗口。 其次，它将使用`location.key`来将窗口滚动位置*和* RestoredScroll组件的滚动位置保存到`sessionStorage`。 然后，当“ScrollRestoration”或“RestoredScroll”组件挂载时，它们可以从`sessionsStorage`查找它们的位置。

对我来说，棘手的是定义一个"opt-out"的API，当我不希望窗口滚动管理。 例如，如果你有一些标签导航在你的页面内容中浮动，你可能*不想滚动到顶部（标签可能会滚动到视图外！）。

当我知道chrome现在为我们管理滚动位置, 并意识到不同的应用程序将有不同的滚动需求，我有点失去了信心，我们需要提供的东西 - 尤其是当人们只是想滚动到顶部（你看到的是直接添加到您的应用程序 在你自己).

基于此，我们不再强烈地自我完成工作（就像我们有限的时间一样！）.但是，我们很乐意帮助任何倾向于实施通用解决方案的人. 个可靠的解决方案甚至可以运行在项目中. Hit us up if you get started on it :)
