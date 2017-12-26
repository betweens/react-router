export default {
  api: [
    require('../../packages/react-router-dom/docs/api/BrowserRouter.md'),
    require('../../packages/react-router-dom/docs/api/HashRouter.md'),
    require('../../packages/react-router-dom/docs/api/Link.md'),
    require('../../packages/react-router-dom/docs/api/NavLink.md'),
    require('../../packages/react-router-dom/docs/api/Prompt.md'),
    require('../../packages/react-router/docs/api/MemoryRouter.md?web'),
    require('../../packages/react-router/docs/api/Redirect.md?web'),
    require('../../packages/react-router/docs/api/Route.md?web'),
    require('../../packages/react-router/docs/api/Router.md?web'),
    require('../../packages/react-router/docs/api/StaticRouter.md?web'),
    require('../../packages/react-router/docs/api/Switch.md?web'),
    require('../../packages/react-router/docs/api/history.md?web'),
    require('../../packages/react-router/docs/api/location.md?web'),
    require('../../packages/react-router/docs/api/match.md?web'),
    require('../../packages/react-router/docs/api/matchPath.md?web'),
    require('../../packages/react-router/docs/api/withRouter.md?web')
  ],

  guides: [
    require('../../packages/react-router/docs/guides/philosophy.md'),
    require('../../packages/react-router-dom/docs/guides/basic-components.md'),
    require('../../packages/react-router-dom/docs/guides/quick-start.md'),
    require('../../packages/react-router-dom/docs/guides/server-rendering.md'),
    require('../../packages/react-router-dom/docs/guides/code-splitting.md'),
    require('../../packages/react-router-dom/docs/guides/scroll-restoration.md'),
    require('../../packages/react-router/docs/guides/testing.md?web'),
    require('../../packages/react-router/docs/guides/redux.md'),
    require('../../packages/react-router/docs/guides/static-routes.md'),
    require('../../packages/react-router/docs/guides/blocked-updates.md')
  ],

  examples: [
    {
      label: '基本',
      slug: 'basic',
      load: require('bundle?lazy!babel!../examples/Basic'),
      loadSource: require('bundle?lazy!!prismjs?lang=jsx!../examples/Basic.js')
    },
    {
      label: 'URL 参数',
      slug: 'url-params',
      load: require('bundle?lazy!babel!../examples/Params'),
      loadSource: require('bundle?lazy!!prismjs?lang=jsx!../examples/Params.js')
    },
    {
      label: '重定向 (Auth)',
      slug: 'auth-workflow',
      load: require('bundle?lazy!babel!../examples/Auth'),
      loadSource: require('bundle?lazy!!prismjs?lang=jsx!../examples/Auth.js')
    },
    {
      label: '传统 Link',
      slug: 'custom-link',
      load: require('bundle?lazy!babel!../examples/CustomLink'),
      loadSource: require('bundle?lazy!!prismjs?lang=jsx!../examples/CustomLink.js')
    },
    {
      label: '阻止跳转',
      slug: 'preventing-transitions',
      load: require('bundle?lazy!babel!../examples/PreventingTransitions'),
      loadSource: require('bundle?lazy!!prismjs?lang=jsx!../examples/PreventingTransitions.js')
    },
    {
      label: '找不到匹配 (404)',
      slug: 'no-match',
      load: require('bundle?lazy!babel!../examples/NoMatch'),
      loadSource: require('bundle?lazy!!prismjs?lang=jsx!../examples/NoMatch.js')
    },
    {
      label: '路径递归',
      slug: 'recursive-paths',
      load: require('bundle?lazy!babel!../examples/Recursive'),
      loadSource: require('bundle?lazy!!prismjs?lang=jsx!../examples/Recursive.js')
    },
    {
      label: '侧边栏',
      slug: 'sidebar',
      load: require('bundle?lazy!babel!../examples/Sidebar'),
      loadSource: require('bundle?lazy!!prismjs?lang=jsx!../examples/Sidebar.js')
    },
    {
      label: '过渡动画',
      slug: 'animated-transitions',
      load: require('bundle?lazy!babel!../examples/Animation'),
      loadSource: require('bundle?lazy!!prismjs?lang=jsx!../examples/Animation.js')
    },
    {
      label: '模糊匹配',
      slug: 'ambiguous-matches',
      load: require('bundle?lazy!babel!../examples/Ambiguous'),
      loadSource: require('bundle?lazy!!prismjs?lang=jsx!../examples/Ambiguous.js')
    },
    {
      label: '路由配置',
      slug: 'route-config',
      load: require('bundle?lazy!babel!../examples/RouteConfig'),
      loadSource: require('bundle?lazy!!prismjs?lang=jsx!../examples/RouteConfig.js')
    },
    {
      label: '画廊',
      slug: 'modal-gallery',
      load: require('bundle?lazy!babel!../examples/ModalGallery'),
      loadSource: require('bundle?lazy!!prismjs?lang=jsx!../examples/ModalGallery.js')
    },
    {
      label: '静态路由器上下文',
      slug: 'static-router',
      load: require('bundle?lazy!babel!../examples/StaticRouter'),
      loadSource: require('bundle?lazy!!prismjs?lang=jsx!../examples/StaticRouter.js')
    }
  ]
}
