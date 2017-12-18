# Server Rendering

在服务器上的渲染有点不同，因为它是无状态的。 基本的想法是，我们将应用程序封装在一个无状态[`<StaticRouter>`][StaticRouter]中而不是[`BrowserRouter]`[BrowserRouter]中。 我们从服务器传入请求的URL，以便路由可以匹配，接下来我们将讨论一个“context”支持。

```js
// client
<BrowserRouter>
  <App/>
</BrowserRouter>

// server (not the complete story)
<StaticRouter
  location={req.url}
  context={context}
>
  <App/>
</StaticRouter>
```

在客户端上渲染[`Redirect>] [Redirect]时，浏览器历史记录会更改状态，我们将获得新的屏幕。 在静态服务器环境中，我们无法更改应用程序状态。 相反，我们使用`context` prop来找出渲染结果是什么。 如果我们找到`context.url`，那么我们知道应用程序被重定向了。 这使我们能够从服务器发送正确的重定向。

```js
const context = {}
const markup = ReactDOMServer.renderToString(
  <StaticRouter
    location={req.url}
    context={context}
  >
    <App/>
  </StaticRouter>
)

if (context.url) {
  // Somewhere a `<Redirect>` was rendered
  redirect(301, context.url)
} else {
  // we're good, send the response
}
```

## 添加应用特定的上下文信息

路由器只添加`context.url`。 但是，您可能需要一些重定向为301和其他302.或者，也许你想发送一个404响应，如果一些特定的UI分支被渲染，或401如果他们没有被授权。 上下文支柱是你的，所以你可以改变它。 以下是区分301和302重定向的一种方法：

```js
const RedirectWithStatus = ({ from, to, status }) => (
  <Route render={({ staticContext }) => {
    //在客户端没有`staticContext`，所以
    //我们需要在这里防范
    if (staticContext)
      staticContext.status = status
    return <Redirect from={from} to={to}/>
  }}/>
)

// 在你的应用程序的某处
const App = () => (
  <Switch>
    {/* 其他一些routes */}
    <RedirectWithStatus
      status={301}
      from="/users"
      to="/profiles"
    />
    <RedirectWithStatus
      status={302}
      from="/courses"
      to="/dashboard"
    />
  </Switch>
)

// on the server
const context = {}

const markup = ReactDOMServer.renderToString(
  <StaticRouter context={context}>
    <App/>
  </StaticRouter>
)

if (context.url) {
  // can use the `context.status` that
  // 我们加入了 RedirectWithStatus
  redirect(context.status, context.url)
}
```

## 404, 401, or any other status

我们可以做同样的事情，如上所述。 创建一个组件，添加一些上下文并将其呈现在应用程序的任何位置以获取不同的状态代码。

```js
const Status = ({ code, children }) => (
  <Route render={({ staticContext }) => {
    if (staticContext)
      staticContext.status = code
    return children
  }}/>
)
```

现在，您可以在应用程序中的任何位置呈现`Status`，以将代码添加到`staticContext`中。

```js
const NotFound = () => (
  <Status code={404}>
    <div>
      <h1>Sorry, can’t find that.</h1>
    </div>
  </Status>
)

// somewhere else
<Switch>
  <Route path="/about" component={About}/>
  <Route path="/dashboard" component={Dashboard}/>
  <Route component={NotFound}/>
</Switch>
```

## 把它放在一起

这不是一个真正的应用程序，但它显示了所有的一般你会
需要把它放在一起。

```js
import { createServer } from 'http'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'

createServer((req, res) => {
  const context = {}

  const html = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App/>
    </StaticRouter>
  )

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end()
  } else {
    res.write(`
      <!doctype html>
      <div id="app">${html}</div>
    `)
    res.end()
  }
}).listen(3000)
```

然后是客户端:

```js
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById('app'))
```

## 数据加载

有很多不同的方法来解决这个问题，目前还没有明确的最佳做法，所以我们试图用任何方法来组合，而不是规定或倾向于某一方面。 我们确信router可以适应您的应用程序的限制。

主要的限制是你想在渲染之前加载数据。 React路由器导出内部使用的matchPath静态函数，以匹配路由的位置。 你可以在服务器上使用这个函数来帮助确定你的数据依赖将在渲染之前。

这种方法的要点依赖于一个静态路由配置，用于呈现您的routes并在渲染前匹配以确定数据依赖性。

```js
const routes = [
  { path: '/',
    component: Root,
    loadData: () => getSomeData(),
  },
  // etc.
]
```

然后使用这个配置来渲染你的应用程序中的routes:

```js
import { routes } from './routes'

const App = () => (
  <Switch>
    {routes.map(route => (
      <Route {...route}/>
    ))}
  </Switch>
)
```
然后在服务器上，你会有类似的东西:

```js
import { matchPath } from 'react-router-dom'

// 在请求内
const promises = []
//使用`some`模拟`<Switch>`选择的行为
//第一个匹配
routes.some(route => {
  // use `matchPath` here
  const match = matchPath(req.path, route)
  if (match)
    promises.push(route.loadData(match))
  return match
})

Promise.all(promises).then(data => {
   //做一些有关数据的事情，这样的客户端
   //可以访问它，然后渲染应用程序
})
```

最后，客户需要拿起数据。 同样，我们并不是为您的应用程序开发数据加载模式，但这些是您需要实现的接触点。

您可能对我们的[React Router Config][RRC] 软件包感兴趣，通过静态路由配置协助数据加载和服务器渲染。

  [StaticRouter]:../api/StaticRouter.md
  [BrowserRouter]:../api/BrowserRouter.md
  [Redirect]:../api/Redirect.md
  [RRC]:https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
