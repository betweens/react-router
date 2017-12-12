# Philosophy

本指南的目的是解释使用React Router时的模型。 我们称之为“动态路由”，它与您可能更熟悉的“静态路由”有很大不同。

## Static Routing

如果您使用过Rails，Express，Ember，Angular等，则使用静态路由。 在这些框架中，在任何呈现发生之前，将您的路由声明为应用程序初始化的一部分。 React Router pre-v4也是静态的（主要是）。 我们来看看如何配置快速路由:

```js
app.get('/', handleIndex)
app.get('/invoices', handleInvoices)
app.get('/invoices/:id', handleInvoice)
app.get('/invoices/:id/edit', handleInvoiceEdit)

app.listen()
```
注意路由在应用程序侦听之前是如何声明的。 我们使用的客户端路由器是相似的。 在Angular中，你先声明你的路由，然后在渲染之前将它们导入到顶层的AppModule中：

```js
const appRoutes: Routes = [
  { path: 'crisis-center',
    component: CrisisListComponent
  },
  { path: 'hero/:id',
    component: HeroDetailComponent
  },
  { path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  { path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ]
})

export class AppModule { }
```

<!-- Ember has a conventional `routes.js` file that the build reads and
imports into the application for you. Again, this happens before
your app renders. -->
Ember有一个传统的`routes.js`文件，构建读取和
为您导入应用程序。 再一次，这发生在之前
你的应用程序呈现。

```js
Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('rentals', function() {
    this.route('show', { path: '/:rental_id' });
  });
});

export default Router
```

<!-- Though the APIs are different, they all share the model of "static routes". React Router also followed that lead up until v4. -->
尽管API不同，但它们都共享“静态路由”模型。 React路由器也随之而来，直到第4版。

<!-- To be successful with React Router, you need to forget all that! :O -->
要成功使用React Router，您需要忘记所有这些！

## Backstory

<!-- To be candid, we were pretty frustrated with the direction we'd taken React Router by v2. We (Michael and Ryan) felt limited by the API, recognized we were reimplementing parts of React (lifecycles, and more), and it just didn't match the mental model React has given us for composing UI. -->
坦率地说，我们非常沮丧，因为我们在第二版中采用了React Router。 我们（Michael和Ryan）觉得受到API的限制，认识到我们正在重新实现React（生命周期等等）的一部分，而且它与React给我们编写UI的心智模型并不匹配。

<!-- We were walking through the hallway of a hotel just before a workshop discussing what to do about it. We asked each other: "What would it look like if we built the router using the patterns we teach in our workshops?" -->
在研讨会讨论如何处理之前，我们正在走过一家旅馆的走廊。 我们互相问：“如果我们使用我们在研讨会上教授的模式来构建路由器，看起来会是什么样子？

<!-- It was only a matter of hours into development that we had a proof-of-concept that we knew was the future we wanted for routing. We ended up with API that wasn't "outside" of React, an API that composed, or naturally fell into place, with the rest of React. We think you'll love it. -->
只有几个小时的探讨，我们有一个概念验证，我们知道是我们想要的路由的未来。 我们最终得到的并不是React之外的API，这个API是由React的其余部分组成的，或者自然而然的落实到位。 我们认为你会喜欢它。

## Dynamic Routing

<!-- When we say dynamic routing, we mean routing that takes place **as your app is rendering**, not in a configuration or convention outside of a running app.  That means almost everything is a component in React Router. Here's a 60 second review of the API to see how it works: -->
当我们说动态路由时，我们的意思是路由发生在您的应用正在渲染的时候**，而不是在正在运行的应用之外的配置或者惯例中。 这意味着几乎所有东西都是React Router中的一个组件。 下面是API的60秒回顾，看看它是如何工作的：

<!-- First, grab yourself a `Router` component for the environment you're targeting and render it at the top of your app. -->
首先，为自己定位的环境获取一个“Router”组件，并将其渲染到应用程序的顶部。

```jsx
// react-native
import { NativeRouter } from 'react-router-native'

// react-dom (what we'll use here)
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), el)
```

<!-- Next, grab the link component to link to a new location: -->
接下来，抓住链接组件链接到一个新的位置:

```jsx
const App = () => (
  <div>
    <nav>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  </div>
)
```

<!-- Finally, render a `Route` to show some UI when the user visits -->
最后，在用户访问时渲染一个“Route”来显示一些用户界面
`/dashboard`.

```jsx
const App = () => (
  <div>
    <nav>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
    <div>
      <Route path="/dashboard" component={Dashboard}/>
    </div>
  </div>
)
```

<!-- The `Route` will render `<Dashboard {...props}/>` where `props` are some router specific things that look like `{ match, location, history }`. If the user is **not** at `/dashboard` then the `Route` will render `null`.  That's pretty much all there is to it. -->
`Route`将呈现`<Dashboard {... props} />`其中`props`是路由器特定的东西，看起来像{{match，location，history}`。 如果用户在`/dashboard`处不是**，那么`Route`将呈现`null`。 这几乎是所有这一切。
## Nested Routes

<!-- Lots of routers have some concept of "nested routes". If you've used versions of React Router previous to v4, you'll know it did too!  When you move from a static route configuration to dynamic, rendered routes, how do you "nest routes"? Well, how do you nest a `div`? -->
很多路由器都有一些“嵌套路由”的概念。 如果你已经使用了v4以前版本的React Router，你也会知道它的确如此！ 当你从静态路由配置移动到动态渲染路由时，你如何“嵌套路由”？ 那么，你怎么嵌套`div`？

```jsx
const App = () => (
  <BrowserRouter>
    {/* here's a div */}
    <div>
      {/* here's a Route */}
      <Route path="/tacos" component={Tacos}/>
    </div>
  </BrowserRouter>
)

// 当url匹配`/ tacos`这个组件呈现
const Tacos  = ({ match }) => (
  // here's a nested div
  <div>
    {/* here's a nested Route,
        match.url helps us make a relative path */}
    <Route
      path={match.url + '/carnitas'}
      component={Carnitas}
    />
  </div>
)
```

<!-- See how the router has no "nesting" API? `Route` is just a component, just like `div`. So to nest a `Route` or a `div`, you just ... do it. -->
看看路由器有没有“嵌套”的API？ `Route`只是一个组件，就像`div`一样。 所以嵌套一个`Route`或一个`div`，你只需做到这一点。

<!-- Let's get trickier. -->
让我们变得更棘手。

## Responsive Routes

<!-- Consider a user navigates to `/invoices`.  Your app is adaptive to different screen sizes, they have a narrow viewport, and so you only show them the list of invoices and a link to the invoice dashboard. They can navigate deeper from there. -->
考虑用户导航到`/invoices`。 您的应用程序适应不同的屏幕尺寸，它们的视口很窄，因此您只能向他们显示不同的屏幕尺寸清单和指向不同的屏幕尺寸的链接。 他们可以从那里导航更深。

```asciidoc
小屏幕
url: /invoices

+----------------------+
|                      |
|      Dashboard       |
|                      |
+----------------------+
|                      |
|      Invoice 01      |
|                      |
+----------------------+
|                      |
|      Invoice 02      |
|                      |
+----------------------+
|                      |
|      Invoice 03      |
|                      |
+----------------------+
|                      |
|      Invoice 04      |
|                      |
+----------------------+
```

<!-- On a larger screen we'd like to show a master-detail view where the navigation is on the left and the dashboard or specific invoices show up on the right. -->
在更大的屏幕上，我们希望显示左侧导航的主详细视图，特定内容显示在右侧。

```asciidoc
大屏幕
url: /invoices/dashboard

+----------------------+---------------------------+
|                      |                           |
|      Dashboard       |                           |
|                      |   Unpaid:             5   |
+----------------------+                           |
|                      |   Balance:   $53,543.00   |
|      Invoice 01      |                           |
|                      |   Past Due:           2   |
+----------------------+                           |
|                      |                           |
|      Invoice 02      |                           |
|                      |   +-------------------+   |
+----------------------+   |                   |   |
|                      |   |  +    +     +     |   |
|      Invoice 03      |   |  | +  |     |     |   |
|                      |   |  | |  |  +  |  +  |   |
+----------------------+   |  | |  |  |  |  |  |   |
|                      |   +--+-+--+--+--+--+--+   |
|      Invoice 04      |                           |
|                      |                           |
+----------------------+---------------------------+
```

<!-- Now pause for a minute and think about the `/invoices` url for both screen sizes. Is it even a valid route for a large screen? What should we put on the right side? -->
现在暂停一下，考虑两种屏幕尺寸的`/invoices` url。 它是一个有效的大屏幕route？ 我们应该把什么放在右边？

```asciidoc
Large Screen
url: /invoices
+----------------------+---------------------------+
|                      |                           |
|      Dashboard       |                           |
|                      |                           |
+----------------------+                           |
|                      |                           |
|      Invoice 01      |                           |
|                      |                           |
+----------------------+                           |
|                      |                           |
|      Invoice 02      |             ???           |
|                      |                           |
+----------------------+                           |
|                      |                           |
|      Invoice 03      |                           |
|                      |                           |
+----------------------+                           |
|                      |                           |
|      Invoice 04      |                           |
|                      |                           |
+----------------------+---------------------------+
```

<!-- On a large screen, `/invoices` isn't a valid route, but on a small screen it is!  To make things more interesting, consider somebody with a giant phone. They could be looking at `/invoices` in portrait orientation and then rotate their phone to landscape. Suddenly, we have enough room to show the master-detail UI, so you ought to redirect right then! -->
在大屏幕上，`/invoices`不是一个有效的route，但在一个小屏幕上！ 为了让事情变得更有趣，可以考虑一个拥有巨大手机的人。 他们可能正在以纵向方向查看`/invoices`，然后将他们的手机转到landscape。 突然，我们有足够的空间来显示主细节的用户界面，所以你应该重定向到那么！

<!-- React Router's previous versions' static routes didn't really have a composable answer for this. When routing is dynamic, however, you can declaratively compose this functionality. If you start thinking about routing as UI, not as static configuration, your intuition will lead you to the following code: -->
React路由器的以前版本的静态路由并没有真正的组合答案。 但是，如果路由是动态的，则可以声明性地编写此功能。 如果你开始考虑作为UI的路由，而不是静态配置，你的直觉会引导你到下面的代码：

```js
const App = () => (
  <AppLayout>
    <Route path="/invoices" component={Invoices}/>
  </AppLayout>
)

const Invoices = () => (
  <Layout>

    {/* always show the nav */}
    <InvoicesNav/>

    <Media query={PRETTY_SMALL}>
      {screenIsSmall => screenIsSmall
        // small screen has no redirect
        ? <Switch>
            <Route exact path="/invoices/dashboard" component={Dashboard}/>
            <Route path="/invoices/:id" component={Invoice}/>
          </Switch>
        // large screen does!
        : <Switch>
            <Route exact path="/invoices/dashboard" component={Dashboard}/>
            <Route path="/invoices/:id" component={Invoice}/>
            <Redirect from="/invoices" to="/invoices/dashboard"/>
          </Switch>
      }
    </Media>
  </Layout>
)
```

当用户将手机从纵向旋转到横向时，此代码将自动将其重定向到dashboard。 *这组有效路由根据用户手中的移动设备的动态性质而改变*。

这只是一个例子。 还有很多其他的我们可以讨论，但我们总结这个建议：为了让你的直觉符合React Router的思想，考虑组件，而不是静态路由。 想想如何用React的声明式组合来解决这个问题，因为几乎所有的“React Router问题”都可能是一个“React问题”。
