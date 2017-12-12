# Migrating from v2/v3 to v4

<!-- React Router v4 is a complete rewrite, so there is not a simple migration path. This guide will provide you with a number of steps to help you understand how to upgrade your application.-->
React Router v4是一个完整的重写，所以没有一个简单的迁移路径。 本指南将为您提供一些步骤来帮助您了解如何升级您的应用程序。

<!-- **Note:** This migration guide is for both React Router v2 and v3, but for brevity, references to previous versions will only mention v3. -->
**注意：**本迁移指南适用于React Router v2和v3，但为简洁起见，对以前版本的引用仅提及v3。

* [The Router](#the-router)
* [Routes](#routes)
  * [Nesting Routes](#nesting-routes)
  * [on* properties](#on-properties)
  * [Switch](#switch)
  * [Redirect](#redirect)
* [PatternUtils](#patternutils)
* [Link](#link)

## The Router

<!-- In React Router v3, there was a single `<Router>` component. It would be provided a `history` object as a prop. -->
在React Router v3中，有一个“<Router>”组件。 它将被提供一个“历史”对象作为道具。

<!-- Also, you would provide it your application's route configuration to the `<Router>` either using the `routes` prop or as the `children` of the `<Router>`.-->
另外，你可以使用`routes` prop或者`<Router>`的`children`将你的应用程序的路由配置提供给`<Router>`。

```js
// v3
import routes from './routes'
<Router history={browserHistory} routes={routes} />
// or
<Router history={browserHistory}>
  <Route path='/' component={App}>
    // ...
  </Route>
</Router>
```

<!-- With React Router v4, one of the big changes is that there are a number of different router components. Each one will create a `history` object for you. The `<BrowserRouter>` creates a browser history, the `<HashRouter>` creates a hash history, and the `<MemoryRouter>` creates a memory history.-->
使用React Router v4，其中一个重大变化是有许多不同的路由器组件。 每个都会为你创建一个“history”对象。 `<BrowserRouter>`创建浏览器历史记录，`<HashRouter>`创建一个哈希历史记录，`<MemoryRouter>`创建一个内存历史记录。

<!-- In v4, there is no centralized route configuration. Anywhere that you need to render content based on a route, you will just render a `<Route>` component.-->
  在v4中，没有集中的路由配置。 无论您需要根据路线渲染内容，只需渲染一个“<Route>”组件。

```js
//v4
<BrowserRouter>
  <div>
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
  </div>
</BrowserRouter>
```

有一点需要注意的是，路由器组件只能有一个子元素。

```js
// yes
<BrowserRouter>
  <div>
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
  </div>
</BrowserRouter>

// no
<BrowserRouter>
  <Route path='/about' component={About} />
  <Route path='/contact' component={Contact} />
</BrowserRouter>
```

## Routes

在v3中，“<Route>”并不是一个真正的组件。 相反，所有的应用程序的<Route>元素只是用来创建一个路由配置对象。

```js
/// 在v3中的元素
<Route path='contact' component={Contact} />
// 相当于
{
  path: 'contact',
  component: Contact
}
```

<!-- With v4, you layout your app's components just like a regular React application. Anywhere that you want to render content based on the location (specifically, its `pathname`), you render a `<Route>`.-->
使用v4，您可以像使用常规的React应用程序一样来布局应用程序的组件。 无论您想要根据位置（特别是其“路径名”）渲染内容，都会渲染一个“<Route>”。

<!-- The v4 `<Route>` component is actually a component, so wherever you render a `<Route>` component, content will be rendered. When the `<Route>`'s `path` matches the current location, it will use its rendering prop (`component`, `render`, or `children`) to render. When the `<Route>`'s `path` does not match, it will render `null`.-->
v4的<Route>组件实际上是一个组件，所以无论你渲染一个“<Route>”组件，内容都会被渲染。 当<Route>的``path`匹配当前位置时，它将使用其渲染prop（`component`，`render`或`children`）来渲染。 当<Route>的``path`不匹配时，它将呈现`null`。

### 嵌套 Routes

在v3中，`<Route>是通过传递它们作为它们父节点的<children> <Route>`来嵌套的。

```js
<Route path='parent' component={Parent}>
  <Route path='child' component={Child} />
  <Route path='other' component={Other} />
</Route>
```

当一个嵌套的<Route>匹配时，React元素将使用子元素和父元素`<Route>`````component`属性创建。 子元素将作为其“子”属性传递给父元素。

```js
<Parent {...routeProps}>
  <Child {...routeProps} />
</Parent>
```

在v4中，children`<Route>`应该由父`<Route>`的组件呈现。

```js
<Route path='parent' component={Parent} />

const Parent = () => (
  <div>
    <Route path='child' component={Child} />
    <Route path='other' component={Other} />
  </div>
)
```

### `on*` properties

React Router v3提供`onEnter`，`onUpdate`和`onLeave`方法。 这些基本上是重新创建React的生命周期方法。

使用v4时，应该使用由<Route>呈现的组件的生命周期方法。 而不是`onEnter`，你可以使用`componentDidMount`或`componentWillMount`。 在哪里你可以使用`onUpdate`，你可以使用`componentDidUpdate`或`componentWillUpdate`（或者``componentWillReceiveProps``）。 `onLeave`可以用`componentWillUnmount`替换。

### `<Switch>`

在v3中，你可以指定一些子路由，只有第一个匹配的会被渲染。

```js
// v3
<Route path='/' component={App}>
  <IndexRoute component={Home} />
  <Route path='about' component={About} />
  <Route path='contact' component={Contact} />
</Route>
```

v4提供了与`<Switch>`组件类似的功能。 当一个`<Switch>`被渲染时，它只会渲染与当前位置相匹配的第一个子<Route>`。

```js
// v4
const App = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
  </Switch>
)

```

### `<Redirect>`

在v3中，如果你想从一个路径重定向到另一个路径，比如/to/welcome，你可以使用`<IndexRedirect>`。

```js
// v3
<Route path="/" component={App}>
  <IndexRedirect to="/welcome" />
</Route>

```

在v4版中，您可以使用`<Redirect>`实现相同的功能。

```js
// v4
<Route exact path="/" render={() => <Redirect to="/welcome" component={App} />} />

<Switch  >
  <Route exact path="/" component={App} />
  <Route path="/login" component={Login} />
  <Redirect path="*" to="/" />
</Switch>

```

## PatternUtils

### matchPattern(pattern, pathname)
在v3中，您可以使用内部使用的相同匹配代码来检查路径是否匹配模式。 在v4中，这已被[matchPath](/packages/react-router/docs/api/matchPath.md)取代，它由[path-to-regexp](https://github.com/pillarjs/path -to-regexp)库。

### formatPattern(pattern, params)
在v3中，可以使用PatternUtils.formatPattern从路径模式（可能在常量或中央路由配置中）和包含名称参数的对象中生成有效路径：

```js
// v3
const THING_PATH = '/thing/:id';

<Link to={PatternUtils.formatPattern(THING_PATH, {id: 1})}>A thing</Link>
```

在v4中，可以使用[path-to-regexp]中的[compile](https://github.com/pillarjs/path-to-regexp#compile-reverse-path-to-regexp)函数来实现相同的功能。(https://github.com/pillarjs/path-to-regexp)。

```js
// v4
const THING_PATH = '/thing/:id';

const thingPath = pathToRegexp.compile(THING_PATH);

<Link to={thingPath({id: 1})}>A thing</Link>
```

## Link

### `to` property is required

在v3中，可以省略`to`属性或将其设置为null以创建不带`href`属性的锚标签。

```js
// v3
<Link to={disabled ? null : `/item/${id}`} className="item">
  // item content
</Link>
```

在v4版中，你应该总是提供`to`。 如果你依靠空的“to”，你可以做一个简单的包装。

```js
// v4
import { Link } from 'react-router-dom'

const LinkWrapper = (props) => {
  const Component = props.to ? Link : 'a'
  return (
    <Component {...props}>
      { props.children }
    </Component>
  )
}

<LinkWrapper to={disabled ? null : `/item/${id}`} className="item">
  // item content
</LinkWrapper>
```
