webpackJsonp([15],{538:function(n,a){n.exports='<span class="token keyword" >import</span> React <span class="token keyword" >from</span> <span class="token string" >\'react\'</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span>\n  BrowserRouter <span class="token keyword" >as</span> Router<span class="token punctuation" >,</span>\n  Route<span class="token punctuation" >,</span>\n  Link\n<span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'react-router-dom\'</span>\n\n<span class="token keyword" >const</span> BasicExample <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Router</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ul</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>li</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >to</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>主页<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Link</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>li</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>li</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >to</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/about<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>关于<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Link</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>li</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>li</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >to</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/topics<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>主题<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Link</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>li</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>ul</span><span class="token punctuation" >></span></span>\n\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>hr</span><span class="token punctuation" >/></span></span>\n\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Route</span> <span class="token attr-name" >exact</span> <span class="token attr-name" >path</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/<span class="token punctuation" >"</span></span> <span class="token attr-name" >component</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>Home<span class="token punctuation" >}</span></span><span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Route</span> <span class="token attr-name" >path</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/about<span class="token punctuation" >"</span></span> <span class="token attr-name" >component</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>About<span class="token punctuation" >}</span></span><span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Route</span> <span class="token attr-name" >path</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/topics<span class="token punctuation" >"</span></span> <span class="token attr-name" >component</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>Topics<span class="token punctuation" >}</span></span><span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Router</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >)</span>\n\n<span class="token keyword" >const</span> Home <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h2</span><span class="token punctuation" >></span></span>Home<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h2</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >)</span>\n\n<span class="token keyword" >const</span> About <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h2</span><span class="token punctuation" >></span></span>About<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h2</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >)</span>\n\n<span class="token keyword" >const</span> Topics <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >{</span> match <span class="token punctuation" >}</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h2</span><span class="token punctuation" >></span></span>主题<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h2</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ul</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>li</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >to</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token template-string" ><span class="token string" >`</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>match<span class="token punctuation" >.</span>url<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >/rendering`</span></span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          使用React进行渲染\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Link</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>li</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>li</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >to</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token template-string" ><span class="token string" >`</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>match<span class="token punctuation" >.</span>url<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >/components`</span></span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          组件\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Link</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>li</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>li</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >to</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token template-string" ><span class="token string" >`</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>match<span class="token punctuation" >.</span>url<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >/props-v-state`</span></span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          Props v<span class="token punctuation" >.</span> State\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Link</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>li</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>ul</span><span class="token punctuation" >></span></span>\n\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Route</span> <span class="token attr-name" >path</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token template-string" ><span class="token string" >`</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>match<span class="token punctuation" >.</span>url<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >/:topicId`</span></span><span class="token punctuation" >}</span></span> <span class="token attr-name" >component</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>Topic<span class="token punctuation" >}</span></span><span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Route</span> <span class="token attr-name" >exact</span> <span class="token attr-name" >path</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>match<span class="token punctuation" >.</span>url<span class="token punctuation" >}</span></span> <span class="token attr-name" >render</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h3</span><span class="token punctuation" >></span></span>请选择一个主题。<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h3</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >)</span>\n\n<span class="token keyword" >const</span> Topic <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >{</span> match <span class="token punctuation" >}</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h3</span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>match<span class="token punctuation" >.</span>params<span class="token punctuation" >.</span>topicId<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h3</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >)</span>\n\n<span class="token keyword" >export</span> <span class="token keyword" >default</span> BasicExample\n'}});