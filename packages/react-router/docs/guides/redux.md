# Redux 安装

Redux是React生态系统的重要组成部分。 我们希望尽可能使React Router和Redux尽可能无缝地集成在一起。

## Blocked Updates

通常，React Router和Redux一起工作得很好。 有时候，一个应用程序可以有一个组件，当位置改变时不会更新（子route或活动的导航链接不会更新）。

如果发生这种情况:

1.组件通过`connect() (Comp)`连接到redux。
2.该组件不是**“路由组件”，这意味着它不是
    像这样呈现：`<Route component = {SomeConnectedThing} />`

问题是Redux实现了`shouldComponentUpdate`，并且没有任何迹象表明如果没有从路由器接收props，就会发生任何变化。 这是很容易解决的。 找到你连接你的组件的地方，并用`withRouter`把它包装起来。

```js
// before
export default connect(mapStateToProps)(Something)

// after
import { withRouter } from 'react-router-dom'
export default withRouter(connect(mapStateToProps)(Something))
```

## 深度整合

有些人想要:

- 使路由数据与store同步，并从store访问
- 能够通过调度操作进行导航
- 支持Redux中路由更改的时间线调试
  devtools

所有这些都需要更深入的整合。 请注意，您不需要这种深度集成:

- Route changes are unlikely to matter for time travel debugging.
- 您可以通过提供的“历史”对象来将组件路由到您的操作并在其中导航，而不是分派操作来导航。
- 路由数据已经是大多数关心它的组件的prop，不管它来自store还是router都不会更改组件的代码。

但是，我们知道一些人对此感到强烈，所以我们希望提供最好的深度集成。 从React Router的版本4开始，React Router Redux软件包是该项目的一部分。 请参考它进行深度整合。

[React Router Redux](https://github.com/reacttraining/react-router/tree/master/packages/react-router-redux)
