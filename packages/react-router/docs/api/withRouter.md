# withRouter

您可以通过`withRouter`高阶组件访问[`history`](./history.md)对象的属性和最接近的[`<Route>`](./Route.md)'s [`match`](./match.md)。 当router渲染时，`withRouter`会将更新后的`match`，`location`和`history`props传递给包裹组件。

```js
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

// A simple component that shows the pathname of the current location
class ShowTheLocation extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render() {
    const { match, location, history } = this.props

    return (
      <div>You are now at {location.pathname}</div>
    )
  }
}

// 创建一个"connected"的新组件（借用redux术语）到router。

const ShowTheLocationWithRouter = withRouter(ShowTheLocation)
```

#### Important Note

`withRouter`不会订阅像React Redux的`connect`这样的位置更改，以便进行状态更改。 相反，在位置更改从“<Router>”组件传出之后重新渲染。 这意味着`withRouter`不会在路由转换上重新渲染，除非它的父组件重新渲染。 如果使用`withRouter`来防止更新被`shouldComponentUpdate`阻塞，那么``withRouter``包装实现`shouldComponentUpdate`的组件是很重要的。 例如，使用Redux时：

```js
// This gets around shouldComponentUpdate
withRouter(connect(...)(MyComponent))
// or
compose(
  withRouter,
  connect(...)
)(MyComponent)

// 这不是
connect(...)(withRouter(MyComponent))
// 也不是
compose(
  connect(...),
  withRouter
)(MyComponent)
```

请参阅 [this guide](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md) 了解更多信息.

#### 静态方法和属性

所有non-react特定的静态方法和封装组件的属性都会自动复制到"connected"组件。

## Component.WrappedComponent

被包装的组件在返回的组件上被公开为静态属性`WrappedComponent`，可以被使用
用于独立测试组件等等。

```js
// MyComponent.js
export default withRouter(MyComponent)

// MyComponent.test.js
import MyComponent from './MyComponent'
render(<MyComponent.WrappedComponent location={{...}} ... />)
```

## wrappedComponentRef: func

一个将作为`ref`prop传递给包装组件的函数。

```js
class Container extends React.Component {
  componentDidMount() {
    this.component.doSomething()
  }

  render() {
    return (
      <MyComponent wrappedComponentRef={c => this.component = c}/>
    )
  }
}
```
