# &lt;MemoryRouter>

在内存中保存"URL"的历史的[`<Router>`](Router.md)（不读取或写入地址栏）。 在测试和非浏览器环境（如[React Native](https://facebook.github.io/react-native/)）中很有用。

```js
import { MemoryRouter } from 'react-router'

<MemoryRouter>
  <App/>
</MemoryRouter>
```

## initialEntries: array

历史堆栈中的`location`数组。 这些可能是完整的的位置对象，具有`{ pathname, search, hash, state }`或简单的字符串URL。

```js
<MemoryRouter
  initialEntries={[ '/one', '/two', { pathname: '/three' } ]}
  initialIndex={1}
>
  <App/>
</MemoryRouter>
```

## initialIndex: number

initialEntries数组中的初始位置索引。

## getUserConfirmation: func

initialEntries数组中的初始位置索引。

## keyLength: number

`location.key`的长度。 默认为6。

```js
<MemoryRouter keyLength={12}/>
```

## children: node

一个 [单个子元素](https://facebook.github.io/react/docs/react-api.html#react.children.only) 来渲染。
