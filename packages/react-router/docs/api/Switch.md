# &lt;Switch>

呈现与该位置匹配的第一个子节点[`<Route>`](Route.md)）或[`<Redirect>`](Redirect.md).

**这与仅仅使用队列`<Route>`有什么不同？**

`<Switch>`是独一无二的，因为它独有地呈现路由*。 相比之下，每个与该位置相匹配的<Route>都可以包含*。 考虑这个代码:

```js
<Route path="/about" component={About}/>
<Route path="/:user" component={User}/>
<Route component={NoMatch}/>
```

如果URL是`/about`，那么`<About>`,`<User>`和`<NoMatch>`将全部渲染，因为它们全都匹配路径。 这是通过设计，允许我们用许多方式将`<Route>组合成我们的应用程序，如侧边栏和面包屑，引导选项卡等等。

但有时候，我们只想选择一个`<Route>`来渲染。 如果我们在/about，我们不想匹配`/:user`（或者显示我们的“404”页面）。 以下是如何用`Switch`完成的：

```js
import { Switch, Route } from 'react-router'

<Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/about" component={About}/>
  <Route path="/:user" component={User}/>
  <Route component={NoMatch}/>
</Switch>
```

现在,如果我们在`/about`,`<Switch>`将开始寻找匹配的<Route>`.`<Route path =“/about” />`会匹配，`<Switch>`将停止查找匹配并渲染`<About>`。 同样,如果我们在`/michael`那么`<User>`会渲染。

这对动画转换也很有用，因为匹配的`<Route>`被渲染到与前一个相同的位置。

```js
<Fade>
  <Switch>
    {/* 这里只有一个child*/}
    <Route/>
    <Route/>
  </Switch>
</Fade>

<Fade>
  <Route/>
  <Route/>
  {/* 这里总会有两个child，
      可能会导致null，
      使得转换更加繁琐 */}
</Fade>
```

## location: object

一个 [`location`](./location.md) 用于匹配子元素而不是当前历史位置（通常是当前浏览器URL）的对象。

## children: node

所有<Switch>的children都应该是<Route>或者<Redirect>元素。 只有第一个匹配当前位置的children将被渲染。

`<Route>`元素使用他们的`path`prop匹配，`<Redirect>`元素使用他们的`from`prop匹配。 没有`path`prop的`<Route>`或没有`from`prop的`<Redirect>`将总是匹配当前位置。

当在<Switch>中包含一个`<Redirect>`时，它可以使用任何`<Route>`的位置匹配props:`path`，`exact`和`strict`。 `from`就是`path`props的别名。

如果一个`location`属性被赋予`<Switch>`，它将覆盖匹配的子元素上的`location`属性。

```js
<Switch>
  <Route exact path="/" component={Home}/>

  <Route path="/users" component={Users}/>
  <Redirect from="/accounts" to="/users"/>

  <Route component={NoMatch}/>
</Switch>
```
