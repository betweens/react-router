# &lt;BrowserRouter>

[`<Router>`](../../../react-router/docs/api/Router.md)使用HTML5历史记录API (`pushState`, `replaceState` and the `popstate` event)保持您的用户界面与URL同步。

```js
import { BrowserRouter } from 'react-router-dom'

<BrowserRouter
  basename={optionalString}
  forceRefresh={optionalBool}
  getUserConfirmation={optionalFunc}
  keyLength={optionalNumber}
>
  <App/>
</BrowserRouter>
```

## basename: string

所有位置的根网址,如果您的应用程序是从服务器上的子目录提供的，则需要将其设置为子目录。 格式正确的基本名应该有一个前导的斜线，但不能有斜线。

```js
<BrowserRouter basename="/calendar"/>
<Link to="/today"/> // renders <a href="/calendar/today">
```

## getUserConfirmation: func

用于确认导航的功能。 默认使用 [`window.confirm`](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm).

```js
// this is the default behavior
const getConfirmation = (message, callback) => {
  const allowTransition = window.confirm(message)
  callback(allowTransition)
}

<BrowserRouter getUserConfirmation={getConfirmation}/>
```

## forceRefresh: bool

如果为true，路由器将在页面导航中使用整页刷新。 您可能只想在[不支持HTML5历史API的浏览器](http://caniuse.com/#feat=history)中使用。

```js
const supportsHistory = 'pushState' in window.history
<BrowserRouter forceRefresh={!supportsHistory}/>
```

## keyLength: number

The length of `location.key`. Defaults to 6.

```js
<BrowserRouter keyLength={12}/>
```

## children: node

A [single child element](https://facebook.github.io/react/docs/react-api.html#react.children.only) to render.
