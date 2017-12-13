# context.router

React Router使用`context.router`来便于`<Router>`和它的后代[`<Route>`](Route.md)s, [`<Link>`](../../../react-router-dom/docs/api/Link.md)s, [`<Prompt>`](Prompt.md)s之间的通信

`context.router`不应该被视为公共API。 由于上下文本身是一个实验性的API，可能会在将来的React版本中发生变化，所以应该避免直接在组件中访问`this.context.router`。 相反，你可以通过传递给你的[`<Route>`](Route.md)'组件或者`[`withRouter`](withRouter.md)]组件的道具来访问我们存储在上下文中的变量。
