# &lt;BackButton>

将Android和tvOS上的全局后退按钮连接到路由器的历史记录。 在Android上，当到达初始位置时，默认的返回行为将会接管。 只要在你的应用程序的某个地方渲染一个

```js
<BackButton/>
```

## children

如果你想避免浮动配置组件，你可以和children合作。

```js
<NativeRouter>
  <BackButton>
    <App/>
  </BackButton>
</NativeRouter>

// instead of
<NativeRouter>
  <View>
    <BackButton/>
    <View>Some people don't like that.</View>
  </View>
</NativeRouter>
```
