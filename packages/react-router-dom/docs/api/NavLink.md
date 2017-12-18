# &lt;NavLink>

[`<Link>`](Link.md)的特殊版本，当它与当前URL相匹配时，将会为呈现的元素添加样式属性

```js
import { NavLink } from 'react-router-dom'

<NavLink to="/about">About</NavLink>
```

## activeClassName: string

active时给予元素的类。 给定的默认类是“active”。 这将被加入`className`的prop。


```js
<NavLink
  to="/faq"
  activeClassName="selected"
>FAQs</NavLink>
```

## activeStyle: object

处于活动状态的元素的样式.

```js
<NavLink
  to="/faq"
  activeStyle={{
    fontWeight: 'bold',
    color: 'red'
   }}
>FAQs</NavLink>
```

## exact: bool

当`true`时，只有当位置完全匹配时，才会应用活动的类/样式。

```js
<NavLink
  exact
  to="/profile"
>Profile</NavLink>
```

## strict: bool

如果为`true`，则在确定位置是否与当前URL匹配时，将考虑位置`pathname`的尾部斜线。 请参阅[`<Route strict>`](../../../react-router/docs/api/Route.md#strict-bool) documentation for more information文档以获取更多信息。

```js
<NavLink
  strict
  to="/events/"
>Events</NavLink>
```

## isActive: func

添加额外逻辑以确定链接是否处于活动状态的功能, 如果您不想验证链接的路径名是否与当前URL的路径名匹配,那么应该使用这个.

```js
// 如果事件ID是奇数，则只考虑事件激活
const oddEvent = (match, location) => {
  if (!match) {
    return false
  }
  const eventID = parseInt(match.params.eventID)
  return !isNaN(eventID) && eventID % 2 === 1
}

<NavLink
  to="/events/123"
  isActive={oddEvent}
>Event 123</NavLink>
```

## location: object


[`isActive`](#isactive-func)比较当前的历史位置（通常是当前的浏览器URL）。
为了比较不同的位置，[`location`](../../../react-router/docs/api/location.md)可以通过。
