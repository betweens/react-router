# Basic Components

React Router中有三种类型的组件：路由器组件，路由匹配组件和导航组件。

您在Web应用程序中使用的所有组件都应该从`react-router-dom`中导入。

```js
import { BrowserRouter, Route, Link } from 'react-router-dom'
```

## Routers

每个React Router应用程序的核心应该是一个路由器组件。 对于Web项目，`react-router-dom`提供`<BrowserRouter>`和`<HashRouter>`路由器。 这两个将为您创建一个专门的“历史”对象。 一般来说，如果您使用的是静态文件服务器，则您应该使用`<BrowserRouter>`，如果您有一个响应请求的服务器和`<HashRouter>`。

```js
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), holder)
```

## Route Matching

有两个路由匹配组件: `<Route>` and `<Switch>`.

```js
import { Route, Switch } from 'react-router-dom'
```

路由匹配是通过比较一个路由到当前路径的路径来完成的。 当一个`<Route>`匹配时，它将呈现其内容，当它不匹配时，它将呈现`null`。 没有路径的`<Route>`将始终匹配。

```js
// when location = { pathname: '/about' }
<Route path='/about' component={About}/> // renders <About/>
<Route path='/contact' component={Contact}/> // renders null
<Route component={Always}/> // renders <Always/>
```

您可以在任何想要根据位置渲染内容的地方包含`<Route>`。 列出一些可能的`<Route>`相邻的列表通常是有意义的。 `<Switch>`组件用于将<Route>组合在一起。

```js
<Switch>
  <Route exact path='/' component={Home}/>
  <Route path='/about' component={About}/>
  <Route path='/contact' component={Contact}/>
</Switch>
```

对<Route>进行分组并不需要`<Switch>`，但它可能非常有用。 一个`<Switch>`将迭代所有子元素的<Route>元素，并且只渲染与当前位置匹配的第一个元素。 这有助于在多个路径的路径匹配相同的路径名时，在路线之间进行动画转换，以及确定何时没有路线与当前位置相匹配（以便呈现“404”组件）。

```js
<Switch>
  <Route exact path='/' component={Home}/>
  <Route path='/about' component={About}/>
  <Route path='/contact' component={Contact}/>
  {/* when none of the above match, <NoMatch> will be rendered */}
  <Route component={NoMatch}/>
</Switch>
```

## Route Rendering Props

对于给定的`<Route>`: `component`, `render`, and `children`,如何渲染组件，有三种道具选择。 你可以查看[`<Route>` documentation](../api/Route.md)来了解更多关于每一个的信息，但是这里我们将重点放在`component`和`render`上，因为它们是两个 你几乎总是会用的。

当你有一个你想渲染的组件（一个`React.Component`或一个无状态的函数组件）时，应该使用`component`。 只有在必须将范围内变量传递给要呈现的组件的情况下，才应使用`render`（采用内联函数）。 你不应该使用带有内联函数的`component` prop来传入范围内的变量，因为你会得到不需要的组件卸载/重新安装。

```js
const Home = () => <div>Home</div>

const App = () => {
  const someVariable = true;
  
  return (
    <Switch>
      {/* these are good */}
      <Route exact path='/' component={Home} />
      <Route
        path='/about'
        render={(props) => <About {...props} extra={someVariable} />}
      />
      {/* do not do this */}
      <Route
        path='/contact'
        component={(props) => <Contact {...props} extra={someVariable} />}
      />  
    </Switch>
  )
}
```

## Navigation

React路由器提供了一个`<Link>`组件来在您的应用程序中创建链接。 无论您在哪里呈现“<Link>”，都会在您的应用程序的HTML中呈现锚点（<a>`）。

```js
<Link to='/'>Home</Link>
// <a href='/'>Home</a>
```

“<NavLink>”是一种特殊类型的“<Link>”，当“to”prop与当前位置匹配时，可以将其自身定义为“活动”。

```js
// location = { pathname: '/react' }
<NavLink to='/react' activeClassName='hurray'>React</NavLink>
// <a href='/react' className='hurray'>React</a>
```

任何时候你想要强制导航，你都可以渲染一个`<Redirect>`。 当一个`<Redirect>`呈现时，它将使用它的`to`道具来导航。

```js
<Redirect to='/login'/>
```
