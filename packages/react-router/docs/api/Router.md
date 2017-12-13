# &lt;Router>

所有router组件的通用底层接口. 通常,应用程序将使用其中一个高级router:

- [`<BrowserRouter>`](../../../react-router-dom/docs/api/BrowserRouter.md)
- [`<HashRouter>`](../../../react-router-dom/docs/api/HashRouter.md)
- [`<MemoryRouter>`](./MemoryRouter.md)
- [`<NativeRouter>`](../../../react-router-native/docs/api/NativeRouter.md)
- [`<StaticRouter>`](./StaticRouter.md)

使用低级别的<Router>最常见的用例是
将自定义历史记录与Redux或Mobx之类的状态管理库同步。 请注意，与React Router一起使用状态管理库并不是必需的，它仅用于深度集成。

```js
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

<Router history={history}>
  <App/>
</Router>
```

## history: object

一个 [`history`](https://github.com/ReactTraining/history) 用于navigation的对象.

```js
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()
<Router history={customHistory}/>
```

## children: node

A [single child element](https://facebook.github.io/react/docs/react-api.html#react.children.only) to render.

```js
<Router>
  <App/>
</Router>
```
