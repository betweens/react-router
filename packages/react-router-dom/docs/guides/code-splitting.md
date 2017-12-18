# Code Splitting

网站的一大特色就是我们不必让访问者在使用之前下载整个应用程序。 您可以将代码拆分看作递增地下载应用程序。 为了做到这一点，我们将使用[webpack]，[`babel-plugin-syntax-dynamic-import`]和[`react-loadable`]。

[webpack]内置了对[dynamic imports][import]的支持; 然而，如果你使用[Babel]（例如，将JSX编译成JavaScript），那么你将需要使用[`babel-plugin-syntax-dynamic-import`]插件。 这是一个只有语法的插件，这意味着巴别不会做任何额外的转换。 该插件只允许Babel解析动态导入，因此webpack可以将它们作为代码拆分进行捆绑。 你的`.babelrc`应该看起来像这样:

```json
{
  "presets": [
    "react"
  ],
  "plugins": [
    "syntax-dynamic-import"
  ]
}
```

[`react-loadable`]是用动态导入加载组件的高阶组件。 它自动处理各种边界情况，使代码拆分变得简单！ 下面是一个如何使用[`react-loadable`]的例子：

```js
import Loadable from 'react-loadable';
import Loading from './Loading';

const LoadableComponent = Loadable({
  loader: () => import('./Dashboard'),
  loading: Loading,
})

export default class LoadableDashboard extends React.Component {
  render() {
    return <LoadableComponent />;
  }
}
```

这里的所有都是它的！ 只需使用`LoadableDashboard`（或者任何你命名你的组件），当你在你的应用程序中使用它时，它将自动加载和渲染。 `loader`选项是一个实际加载组件的函数，`loading`是一个占位符组件，用于在实际组件加载时显示。

## Code Splitting and Server-Side Rendering

[`react-loadable`]包括[a guide for server-side rendering][ssr]. 所有你需要做的就是在你的`.babelrc`中包括[`babel-plugin-import-inspector`]，而服务器端的渲染应该是正常的。 这里是一个`.babelrc`文件的例子：

```json
{
  "presets": [
    "react"
  ],
  "plugins": [
    "syntax-dynamic-import",
    ["import-inspector", {
      "serverSideRequirePath": true
    }]
  ]
}
```

  [Babel]: https://babeljs.io/
  [`babel-plugin-syntax-dynamic-import`]: https://babeljs.io/docs/plugins/syntax-dynamic-import/
  [`babel-plugin-import-inspector`]: https://github.com/thejameskyle/react-loadable/tree/6902cc87f618446c54daa85d8fecec6836c9461a#babel-plugin-import-inspector
  [`react-loadable`]: https://github.com/thejameskyle/react-loadable
  [import]: https://github.com/tc39/proposal-dynamic-import
  [webpack]: https://webpack.js.org/
  [ssr]: https://github.com/thejameskyle/react-loadable/tree/6902cc87f618446c54daa85d8fecec6836c9461a#server-side-rendering
