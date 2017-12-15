# &lt;Link>

在应用程序里面提供声明式的可访问导航.

```js
import { Link } from 'react-router-dom'

<Link to="/about">About</Link>
```

## to: string

链接位置的字符串表示，通过连接位置的路径名，搜索和哈希属性创建。

```js
<Link to='/courses?sort=name'/>
```

## to: object

可以具有以下任何属性的对象:
  * `pathname`: 表示要链接到的路径的字符串.
  * `search`: 查询参数的字符串表示形式.
  * `hash`: 一个散列在URL中, 例如:  `#a-hash`.
  * `state`: State to persist to the `location`.

```js
<Link to={{
  pathname: '/courses',
  search: '?sort=name',
  hash: '#the-hash',
  state: { fromDashboard: true }
}}/>
```

## replace: bool

当replace为`true`时，单击链接将替换历史堆栈中的当前条目而不是添加新条目。

```js
<Link to="/courses" replace />
```

## innerRef: function

允许访问组件的底层`ref`

```js

const refCallback = node => {
  // `node` refers to the mounted DOM element or null when unmounted
}

<Link to="/" innerRef={refCallback} />
```
