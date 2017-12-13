# &lt;StaticRouter>

[`<Router>`](Router.md)永远不会改变位置。

当用户没有真正点击时，这在服务器端渲染场景中可能很有用，所以这个位置从来没有真正改变。 因此，名称：静态。 当你只需要插入一个位置并在渲染输出上进行断言时，它在简单测试中也很有用。

下面是一个示例节点服务器，它为[`<Redirect>`](Redirect.md)发送302状态码，并为其他请求发送常规HTML：

```js
import { createServer } from 'http'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'

createServer((req, res) => {

  // This context object contains the results of the render
  const context = {}

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App/>
    </StaticRouter>
  )

  // 如果使用<Redirect>，context.url将包含重定向到的URL
  if (context.url) {
    res.writeHead(302, {
      Location: context.url
    })
    res.end()
  } else {
    res.write(html)
    res.end()
  }
}).listen(3000)
```

## basename: string

所有locations的基础 URL。 格式正确的基本名应该有一个前导斜杠,但不能有斜线。


```js
<StaticRouter basename="/calendar">
  <Link to="/today"/> // renders <a href="/calendar/today">
</StaticRouter>
```

## location: string

服务器收到的URL，可能是节点服务器上的`req.url`.

```js
<StaticRouter location={req.url}>
  <App/>
</StaticRouter>
```

## location: object

一个形似`{ pathname, search, hash, state }`的位置对象

```js
<StaticRouter location={{ pathname: '/bubblegum' }}>
  <App/>
</StaticRouter>
```

## context: object

一个普通的JavaScript对象。 在渲染过程中，组件可以向对象添加属性以存储有关渲染的信息。

```js
const context = {}
<StaticRouter context={context}>
  <App />
</StaticRouter>
```

当一个“<Route>”匹配时，它会将上下文对象传递给它作为staticContext的prop所呈现的组件。 查看[服务器渲染指南](../../../react-router-dom/docs/guides/server-rendering.md)）以获得更多关于如何自己完成的信息。

在渲染之后，可以使用这些属性来配置服务器的响应.

```js
if(context.status === '404') {
  // ...
}
```

## children: node

A [single child element](https://facebook.github.io/react/docs/react-api.html#react.children.only) to render.
