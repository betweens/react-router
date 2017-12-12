# Installation

<!-- React Router runs in multiple environments: browsers, servers, native, and even VR (works in the dev preview!) While many components are shared (like `Route`) others are specific to environment (like `NativeRouter`).  Rather than requiring you install two packages, you only have to install the package for the target environment. Any shared components between the environments are re-exported from the environment specific package. -->
React路由器运行在多种环境下：浏览器，服务器，本机甚至VR（在dev预览中都可以使用）。虽然许多组件是共享的（比如`Route`），其他的则是特定于环境的（比如`NativeRouter`）。 您不需要安装两个软件包，只需要为目标环境安装软件包。 环境之间的任何共享组件都是从环境特定的包中重新导出的。
## Web

```bash
npm install react-router-dom
# or
yarn add react-router-dom
```

所有的包模块都可以从顶部导入:

```js
import {
  BrowserRouter as Router,
  StaticRouter, // for server rendering
  Route,
  Link
  // etc.
} from 'react-router-dom'
```

<!-- If you're going for a really minimal bundle sizes on the web you can import modules directly. Theoretically a tree-shaking bundler like Webpack makes this unnecessary but we haven't tested it yet. We welcome you to!-->
如果您要在网络上获得最小的包大小，您可以直接导入模块。 从理论上讲，像Webpack这样的tree-shaking bundler使得这个不必要，但是我们还没有对它进行测试。 我们欢迎您的到来！

```js
import Router from 'react-router-dom/BrowserRouter'
import Route from 'react-router-dom/Route'
// etc.
```

## Native

<!-- We're still working on great documentation for the native capabilities of React Router. For now we recommend you [read the source](https://github.com/ReactTraining/react-router/tree/v4/packages/react-router-native).-->
我们仍在为React Router的本地功能编写出色的文档。 现在我们推荐你[读源码](https://github.com/ReactTraining/react-router/tree/v4/packages/react-router-native）。

```bash
yarn add react-router-native
# or if not using the react-native cli
npm install react-router-native
```

所有的封装模块都可以从顶部导入:

```js
import {
  NativeRouter as Router,
  DeepLinking,
  BackButton,
  Link,
  Route
  // etc.
} from 'react-router-native'
```

## Who-knows-where

```bash
yarn add react-router
# or if not using the react-native cli
npm install react-router
```

所有的封装模块都可以从顶部导入:

```js
import {
  MemoryRouter as Router,
  Route
  // etc.
} from 'react-router'
```

您可以在运行React的任何地方使用React Router导航，导航状态保存在内存路由器中。 您可以查看本地路由器的实现，以了解如何进行集成。
