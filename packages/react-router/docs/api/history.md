# history

本文档中的“history”和“history`对象是指[the `history` package](https://github.com/ReactTraining/history)，它是React Router（除了React本身）的两个主要依赖之一，它提供了几种不同的实现来管理JavaScript中的会话history环境。

以下术语也被使用:

- "browser history" - 一个DOM特定的实现，在支持HTML5历史API的Web浏览器中很有用
- "hash history" - 传统Web浏览器的DOM特定实现
- "memory history" - 内存中的历史实现，在测试和React Native等非DOM环境中非常有用

`history` 对象通常具有以下属性和方法:

- `length` - (number) 历史堆栈中的条目数量
- `action` - (string) 当前行为(`PUSH`, `REPLACE`, or `POP`)
- `location` - (object) 当前位置。 可能有以下属性:
  - `pathname` - (string) URL的路径
  - `search` - (string) The URL query string
  - `hash` - (string) The URL hash fragment
  - `state` - (object) 提供给例如特定位置的状态 push（path，state）`当这个位置被推入堆栈时。 仅在浏览器和内存历史记录中可用。
- `push(path, [state])` - (function) 将新条目推入历史堆栈
- `replace(path, [state])` - (function) 替换历史堆栈上的当前条目
- `go(n)` - (function) 通过`n`条目移动历史堆栈中的指针
- `goBack()` - (function) 相当于 `go(-1)`
- `goForward()` - (function) 相当于 `go(1)`
- `block(prompt)` - (function) Prevents navigation (see [the history docs](https://github.com/ReactTraining/history#blocking-transitions))

## history 是可变的

历史对象是可变的。 因此，建议从[`location`](./location.md)的渲染道具访问[`<Route>`](./Route.md)，而不是从`history.location`。 这可以确保您对React的假设在生命周期钩子中是正确的。 例如：

```js
class Comp extends React.Component {
  componentWillReceiveProps(nextProps) {
    // will be true
    const locationChanged = nextProps.location !== this.props.location

    // INCORRECT, will *always* be false because history is mutable.
    const locationChanged = nextProps.history.location !== this.props.history.location
  }
}

<Route component={Comp}/>
```

根据您使用的实施情况，其他属性也可能存在。 有关更多详细信息，请参阅[the history documentation](https://github.com/ReactTraining/history#properties) for more details.。
