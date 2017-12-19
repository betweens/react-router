# 快速开始

如果这是您第一次构建React Native应用程序，我们建议您查看官方["Getting Started"](https://facebook.github.io/react-native/docs/getting-started.html)指南。

## 安装

React Router Native 发布到 [npm](https://npm.im/react-router-native). You can install it with either `npm` or [`yarn`](https://yarnpkg.com).

```sh
npm install react-router-native
# or
yarn add react-router-native
```

一旦你初始化了一个新的React Native项目，你可以复制/粘贴任何的例子到你的`index.ios.js`或`index.android.js`文件中去。

这是基本的例子:

```jsx
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
} from 'react-native'

import { NativeRouter, Route, Link } from 'react-router-native'

const Home = () => (
  <Text style={styles.header}>
    Home
  </Text>
)

const About = () => (
  <Text style={styles.header}>
    About
  </Text>
)

const Topic = ({ match }) => (
  <Text style={styles.topic}>
    {match.params.topicId}
  </Text>
)

const Topics = ({ match }) => (
  <View>
    <Text style={styles.header}>Topics</Text>
    <View>
      <Link
        to={`${match.url}/rendering`}
        style={styles.subNavItem}
        underlayColor='#f0f4f7'>
          <Text>Rendering with React</Text>
      </Link>
      <Link
        to={`${match.url}/components`}
        style={styles.subNavItem}
        underlayColor='#f0f4f7'>
          <Text>Components</Text>
      </Link>
      <Link
        to={`${match.url}/props-v-state`}
        style={styles.subNavItem}
        underlayColor='#f0f4f7'>
          <Text>Props v. State</Text>
      </Link>
    </View>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <Text style={styles.topic}>Please select a topic.</Text>
    )} />
  </View>
)

const App = () => (
  <NativeRouter>
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link
          to="/"
          underlayColor='#f0f4f7'
          style={styles.navItem}>
            <Text>Home</Text>
        </Link>
        <Link
          to="/about"
          underlayColor='#f0f4f7'
          style={styles.navItem}>
            <Text>About</Text>
        </Link>
        <Link
          to="/topics"
          underlayColor='#f0f4f7'
          style={styles.navItem} >
            <Text>Topics</Text>
        </Link>
      </View>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </View>
  </NativeRouter>
)

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: 'center',
    fontSize: 15,
  }
})

AppRegistry.registerComponent('MyApp', () => App);
```
