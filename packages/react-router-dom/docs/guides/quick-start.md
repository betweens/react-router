# Quick Start


开始使用React Web项目最简单的方法是使用名为[Create React App][crapp]的工具，这是一个拥有大量社区帮助的Facebook项目。

首先安装create-react-app，如果你还没有，那么
用它建立一个新的项目。

```sh
npm install -g create-react-app
create-react-app demo-app
cd demo-app
```

## Installation

React Router DOM是[published to npm](https://npm.im/react-router-dom),所以你可以用`npm`或[`yarn`](https://yarnpkg.com)来安装它。 创建React App使用yarn，这就是我们将要使用的。

```sh
yarn add react-router-dom
# 或者，如果你不使用yarn
npm install react-router-dom
```

现在，您可以将任何示例复制/粘贴到`src/App.js`中。 这是基本的一个例子:

```jsx
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)
export default BasicExample
```

Now you're ready to tinker. Happy routing!

  [crapp]:https://github.com/facebookincubator/create-react-app
