# &lt;Prompt>

用于在离开页面之前提示用户。 当你的应用程序进入一个应该阻止用户浏览的状态时（比如表单被填满了），渲染一个`<Prompt>`。

```js
import { Prompt } from 'react-router'

<Prompt
  when={formIsHalfFilledOut}
  message="Are you sure you want to leave?"
/>
```

## message: string

当他们试图离开时提示用户的消息。

```js
<Prompt message="Are you sure you want to leave?"/>
```

## message: func

将被用户试图导航到的下一个`location`和`action`调用。 返回一个字符串以向用户显示提示，或者返回`true`以允许转换。

```js
<Prompt message={location => (
  `Are you sure you want to go to ${location.pathname}?`
)}/>
```

## when: bool

你可以随时渲染它，而不是通过`when={true}` or `when={false}`来传递一个`<Prompt>`来防止或者允许导航。

```js
<Prompt when={formIsHalfFilledOut} message="Are you sure?"/>
```
