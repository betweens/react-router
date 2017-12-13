# match

match对象包含有关“<Route path>”如何匹配URL的信息。 match对象包含以下属性：

  - `params` - (object) Key/value对从与路径动态段相对应的URL解析。
  - `isExact` - (boolean) 如果整个URL匹配，则为“true”（不包含尾随字符
  - `path` - (string) 用于匹配的路径模式。 用于构建嵌套 `<Route>`s
  - `url` - (string) URL的匹配部分。 用于构建嵌套 `<Link>`s

你会在不同的地方访问`match`对象:

- [Route component](./Route.md#component) as `this.props.match`
- [Route render](./Route.md#render-func) as `({ match }) => ()`
- [Route children](./Route.md#children-func) as `({ match }) => ()`
- [withRouter](./withRouter.md) as `this.props.match`
- [matchPath](./matchPath.md) as the return value

如果Route没有`path`，因此总是匹配，你会得到最接近的parent匹配。 `withRouter`也一样


