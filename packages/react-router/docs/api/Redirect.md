# &lt;Redirect>

渲染一个`<Redirect>`将会导航到一个新的位置。 新位置将覆盖历史堆栈中的当前位置，例如服务器端重定向（HTTP 3xx）。

```js
import { Route, Redirect } from 'react-router'

<Route exact path="/" render={() => (
  loggedIn ? (
    <Redirect to="/dashboard"/>
  ) : (
    <PublicHomePage/>
  )
)}/>
```

## to: string

要重定向到的URL。 任何有效的URL路径，[`path-to-regexp`](https://www.npmjs.com/package/path-to-regexp)可以理解。
`to`中使用的所有URL参数必须由`from`覆盖。

```js
<Redirect to="/somewhere/else"/>
```

## to: object

要重定向到的位置。 `pathname`可以是[`path-to-regexp`](https://www.npmjs.com/package/path-to-regexp)可以理解的任何有效的URL路径。

```js
<Redirect to={{
  pathname: '/login',
  search: '?utm=your+face',
  state: { referrer: currentLocation }
}}/>
```

## push: bool

当`true`时，重定向会把新的条目推到历史上，而不是替换当前的条目。

```js
<Redirect push to="/somewhere/else"/>
```

## from: string

要从中重定向的路径名。 任何有效的URL路径[`path-to-regexp`](https://www.npmjs.com/package/path-to-regexp)理解。

所有匹配的URL参数都提供给`to`中的模式。 必须包含在`to`中使用的所有参数。 未被`to`使用的其他参数被忽略。

这只能用于在`<Switch>`内部渲染`<Redirect>`时匹配位置。 有关更多详细信息，请参阅[`<Switch children>`](./Switch.md#children-node)。

```js
<Switch>
  <Redirect from='/old-path' to='/new-path'/>
  <Route path='/new-path' component={Place}/>
</Switch>
```

```js
// Redirect with matched parameters
<Switch>
  <Redirect from='/users/:id' to='/users/profile/:id'/>
  <Route path='/users/profile/:id' component={Profile}/>
</Switch>
```

## exact: bool

完全匹配`from`; 相当于 [Route.exact](./Route.md#exact-bool).

## strict: bool

严格匹配`from`; 相当于 [Route.strict](./Route.md#strict-bool).
