# &lt;Link>

在应用程序周围提供声明式的可访问导航.

```js
import { Link } from 'react-router-native'

<Link to='/about'>About</Link>
```

## to: string

链接位置的字符串表示，通过连接位置的路径名，搜索和哈希属性创建.

```js
<Link to='/courses?sort=name'/>
```

## to: object

可以具有以下任何属性的对象:
  * `pathname`: 表示要链接到的路径的字符串.
  * `search`: 查询参数的字符串表示，例如 `？key = value`.
  * `hash`: 要放入网址的哈希，例如`＃A-hash`.
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

当“true”时，单击该链接将替换历史堆栈中的当前条目而不是添加新条目.

```js
<Link to="/courses" replace />
```

## component: func

用于使“Link”响应的组件。 通常会是一个React Native的“可触摸”组件（“TouchableHighlight”，“TouchableOpacity”等）。 所有传递给`Link`的道具都会传递给这个组件。 默认为“TouchableHighlight”。

```js
<Link
  to='/about'
  component={TouchableOpacity}
  activeOpacity={0.8} />
```
