# matchPath

这可以让你使用`<Route>`使用的相同的匹配代码，除了在正常的渲染周期外，就像在服务器上渲染之前收集数据依赖关系一样。

```js
import { matchPath } from 'react-router'

const match = matchPath('/users/123', {
  path: '/users/:id',
  exact: true,
  strict: false
})
```

## pathname

第一个参数是你想要匹配的路径名。 如果你正在使用
这在与Node.js的服务器上，这将是`req.url`.

## props

第二个参数是匹配的props，它们是相同的
到匹配的props`Route`接受:

```js
{
  path, // like /users/:id
  strict, // optional, defaults to false
  exact // optional, defaults to false
}
```
