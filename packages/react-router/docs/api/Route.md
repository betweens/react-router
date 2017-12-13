# &lt;Route>

Route组件也许是React中最重要的组件
路由器了解并学习使用好。 它最基本的
当一个[location](./location.md)
匹配route的`path`。

考虑下面的代码:

```js
import { BrowserRouter as Router, Route } from 'react-router-dom'

<Router>
  <div>
    <Route exact path="/" component={Home}/>
    <Route path="/news" component={NewsFeed}/>
  </div>
</Router>
```

如果应用程序的位置是`/`，那么UI层次结构就是类似的:

```html
<div>
  <Home/>
  <!-- react-empty: 2 -->
</div>
```

如果应用程序的位置是`/news`，那么UI层次将是:

```html
<div>
  <!-- react-empty: 1 -->
  <NewsFeed/>
</div>
```

"react-empty"注释只是React的`null`渲染的实现细节。 但是对于我们的目的来说，这是有益的。 即使渲染为null，路由也总是在技术上“渲染”。 只要应用程序位置匹配路径的路径，您的组件将被渲染。

## Route render methods

有三种方法可以用`<Route>`来渲染东西:

- [`<Route component>`](#component)
- [`<Route render>`](#render-func)
- [`<Route children>`](#children-func)

每个在不同的情况下都有用。 你只能在给定的<Route>中使用这些props中的一个。 看下面的解释，了解为什么你有3个选项。 大多数时候你会使用`component`。

## Route props

三个[render methods](#route-render-methods)都将通过相同的三个route props

- [match](./match.md)
- [location](./location.md)
- [history](./history.md)

## component

React组件只在位置匹配时渲染。 这将是
呈现与[route props](#route-props).

```js
<Route path="/user/:username" component={User}/>

const User = ({ match }) => {
  return <h1>Hello {match.params.username}!</h1>
}
```

当你使用`component`（而不是`render`或`children`，下面）时，router使用[`React.createElement`](https://facebook.github.io/react/docs/react-api.html#createelement)从给定的组件创建一个新的[React element](https://facebook.github.io/react/docs/rendering-elements.html)。 这意味着如果你为`component`提供了一个内联函数，你将会在每个渲染中创建一个新的组件。 这会导致现有的组件卸载和新的组件安装，而不是只更新现有的组件。 当使用内联函数进行内联渲染时，使用`render`或`children`prop（如下）。

## render: func

这允许在上面解释的不需要的重新安装的情况下进行方便的内联渲染和包装。

而不是使用[`component`](#component) prop为你创建一个新的[React element](https://facebook.github.io/react/docs/rendering-elements.html)，你可以传入一个函数，当位置匹配时被调用。 `render` prop收到所有与`component`渲染prop相同的[route props](#route-props)。

```js
// convenient inline rendering
<Route path="/home" render={() => <div>Home</div>}/>

// wrapping/composing
const FadingRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <FadeIn>
      <Component {...props}/>
    </FadeIn>
  )}/>
)

<FadingRoute path="/cool" component={Something}/>
```

**警告**:`<Route component>`优先于`<Route render>`,所以不要在同一个`<Route>`中使用它们。

## children: func

有时您需要呈现路径是否匹配位置。 在这些情况下，你可以使用函数`children` prop。 它的工作原理与`render`完全一样，不同之处在于它是否匹配。

`children` render prop和`component`和`render`方法都是一样的，除非route不匹配URL，否则`match`是`null`。 这使您可以根据路线是否匹配动态调整您的用户界面。 如果路线匹配，我们将添加一个"active"类

```js
<ul>
  <ListItemLink to="/somewhere"/>
  <ListItemLink to="/somewhere-else"/>
</ul>

const ListItemLink = ({ to, ...rest }) => (
  <Route path={to} children={({ match }) => (
    <li className={match ? 'active' : ''}>
      <Link to={to} {...rest}/>
    </li>
  )}/>
)
```

这对动画也是有用的:

```js
<Route children={({ match, ...rest }) => (
  {/* Animate将始终呈现，因此您可以使用生命周期让child反复进出 */}
  <Animate>
    {match && <Something {...rest}/>}
  </Animate>
)}/>
```

**警告**: <Route组件>和`<Route render>优先于`<Route children>`，所以不要在同一个<Route>中使用多个组件。

## path: string

任何有效的URL路径[`path-to-regexp`](https://www.npmjs.com/package/path-to-regexp)理解。

```js
<Route path="/users/:id" component={User}/>
```

Routes without a `path` _always_ match.

## exact: bool

当`true`时，只有路径匹配`location.pathname` _exactly_时才匹配。

```js
<Route exact path="/one" component={About}/>
```

| path | location.pathname | exact | matches? |
| --- | --- | --- | --- |
| `/one`  | `/one/two`  | `true` | no |
| `/one`  | `/one/two`  | `false` | yes |

## strict: bool

当'true'时，具有尾部斜线的'path'将只与'location.pathname'匹配。 当`location.pathname`中有附加的URL段时，这不起作用。

```js
<Route strict path="/one/" component={About}/>
```

| path | location.pathname | matches? |
| --- | --- | --- |
| `/one/` | `/one` | no |
| `/one/` | `/one/` | yes |
| `/one/` | `/one/two` | yes |

**警告**: `strict`可以用来强制`location.pathname`没有结尾的斜线，但是为了做到这一点`strict`和`exact`必须是`true`。

```js
<Route exact strict path="/one" component={About}/>
```

| path | location.pathname | matches? |
| --- | --- | --- |
| `/one` | `/one` | yes |
| `/one` | `/one/` | no |
| `/one` | `/one/two` | no |

## location: object

一个`<Route>`元素试图匹配它的`path`到当前的历史位置（通常是当前浏览器的URL）。
然而，具有不同“路径名”的[`location`]（location.md）也可以被传递用于匹配。

如果您需要将“<Route>”匹配到除当前历史记录位置以外的位置，则这很有用，如[动画过度](https://reacttraining.com/react-router/web/example/animated-transitions)例子。

如果一个`<Route>`元素被封装在一个`<Switch>`中并匹配传递给`<Switch>`（或当前历史位置）的位置，那么传递给``Route' 将会被`<Switch>`(given [here](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/modules/Switch.js#L51))使用的覆盖

## sensitive: bool

当'true'时，如果路径是__case sensitive__，将匹配。

```js
<Route sensitive path="/one" component={About}/>
```

| path | location.pathname | sensitive | matches? |
| --- | --- | --- | --- |
| `/one`  | `/one`  | `true` | yes |
| `/One`  | `/one`  | `false` | no |

