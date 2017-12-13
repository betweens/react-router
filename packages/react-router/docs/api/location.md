# location

Locations代表现在的应用程序的位置，你想要去的地方，或
即使在那里。 它看起来像这样:


```js
{
  key: 'ac3df4', // 不用HashHistory！
  pathname: '/somewhere'
  search: '?some=search-string',
  hash: '#howdy',
  state: {
    [userDefined]: true
  }
}
```

router将在几个地方提供一个location object:

- [Route component](./Route.md#component) as `this.props.location`
- [Route render](./Route.md#render-func) as `({ location }) => ()`
- [Route children](./Route.md#children-func) as `({ location }) => ()`
- [withRouter](./withRouter.md) as `this.props.location`

它也可以在`history.location`找到，但是你不应该使用它，因为它是可变的。 您可以在[history](./history.md)文档中阅读更多。

location对象永远不会发生变化，所以您可以在生命周期钩子函数中使用它来确定何时导航，这对于数据获取和动画非常有用。

```js
componentWillReceiveProps(nextProps) {
  if (nextProps.location !== this.props.location) {
    // navigated!
  }
}
```

您可以提供位置而不是字符串到导航的各个位置:

- Web [Link to](../../../react-router-dom/docs/api/Link.md#to)
- Native [Link to](../../../react-router-native/docs/api/Link.md#to)
- [Redirect to](./Redirect.md#to)
- [history.push](./history.md#push)
- [history.replace](./history.md#push)

通常你只是使用一个字符串，但如果你需要添加一些“location123state”，只要应用程序返回到特定的位置就可以使用，你可以使用一个位置对象。 如果您想根据导航历史记录而不是仅路径（如modals）来分支UI，这很有用。

```jsx
// 平时你所用的
<Link to="/somewhere"/>

// 但是一可以用一下来代替:
const location = {
  pathname: '/somewhere',
  state: { fromDashboard: true }
}

<Link to={location}/>
<Redirect to={location}/>
history.push(location)
history.replace(location)
```

最后，您可以将location递给以下组件

- [Route](./Route.md#location)
- [Switch](./Switch.md#location)

这将阻止他们在router's state下使用实际location。 这对动画和等待导航非常有用，或者任何时候你想欺骗一个组件在不同于真实位置的位置渲染。

