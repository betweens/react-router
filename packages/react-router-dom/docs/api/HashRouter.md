# &lt;HashRouter>

一个使用URL哈希部分（即`window.location.hash`）的[`<Router>`](../../../react-router/docs/api/Router.md)来保持你的UI与URL同步。

**重要的提示:** 哈希历史记录不支持`location.key`或`location.state`。 在以前的版本中，我们试图填补这个行为，但是存在我们无法解决的边缘案例。 任何需要这种行为的代码或插件将无法正常工作。 由于此技术仅用于支持传统浏览器，因此我们建议您将服务器配置为使用“<BrowserHistory>”来代替。

```js
import { HashRouter } from 'react-router-dom'

<HashRouter>
  <App/>
</HashRouter>
```

## basename: string

所有位置的根网址。 格式正确的基本名应该有一个前导的斜线，但不能有斜线。

```js
<HashRouter basename="/calendar"/>
<Link to="/today"/> // renders <a href="#/calendar/today">
```

## getUserConfirmation: func

用于确认导航的功能。 默认使用 [`window.confirm`](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm).

```js
// this is the default behavior
const getConfirmation = (message, callback) => {
  const allowTransition = window.confirm(message)
  callback(allowTransition)
}

<HashRouter getUserConfirmation={getConfirmation}/>
```

## hashType: string

用于`window.location.hash`的编码类型。 可用的值是:

- `"slash"` - Creates hashes like `#/` and `#/sunshine/lollipops`
- `"noslash"` - Creates hashes like `#` and `#sunshine/lollipops`
- `"hashbang"` - Creates ["ajax crawlable"](https://developers.google.com/webmasters/ajax-crawling/docs/learn-more) (deprecated by Google) hashes like `#!/` and `#!/sunshine/lollipops`

Defaults to `"slash"`.

## children: node

A [single child element](https://facebook.github.io/react/docs/react-api.html#react.children.only) to render.
