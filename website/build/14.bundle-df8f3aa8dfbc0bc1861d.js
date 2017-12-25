webpackJsonp([14],{539:function(n,a){n.exports='<span class="token keyword" >import</span> React <span class="token keyword" >from</span> <span class="token string" >\'react\'</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span>\n  BrowserRouter <span class="token keyword" >as</span> Router<span class="token punctuation" >,</span>\n  Route<span class="token punctuation" >,</span>\n  Link\n<span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'react-router-dom\'</span>\n\n<span class="token keyword" >const</span> CustomLinkExample <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Router</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>OldSchoolMenuLink</span> <span class="token attr-name" >activeOnlyWhenExact</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >true</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >to</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/<span class="token punctuation" >"</span></span> <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Home<span class="token punctuation" >"</span>/</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>OldSchoolMenuLink</span> <span class="token attr-name" >to</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/about<span class="token punctuation" >"</span></span> <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>About<span class="token punctuation" >"</span>/</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>hr</span><span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Route</span> <span class="token attr-name" >exact</span> <span class="token attr-name" >path</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/<span class="token punctuation" >"</span></span> <span class="token attr-name" >component</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>Home<span class="token punctuation" >}</span></span><span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Route</span> <span class="token attr-name" >path</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/about<span class="token punctuation" >"</span></span> <span class="token attr-name" >component</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>About<span class="token punctuation" >}</span></span><span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Router</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >)</span>\n\n<span class="token keyword" >const</span> OldSchoolMenuLink <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >{</span> label<span class="token punctuation" >,</span> to<span class="token punctuation" >,</span> activeOnlyWhenExact <span class="token punctuation" >}</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Route</span> <span class="token attr-name" >path</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>to<span class="token punctuation" >}</span></span> <span class="token attr-name" >exact</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>activeOnlyWhenExact<span class="token punctuation" >}</span></span> <span class="token attr-name" >children</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> match <span class="token punctuation" >}</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n    <span class="token operator" >&lt;</span>div className<span class="token punctuation" >=</span><span class="token punctuation" >{</span>match <span class="token operator" >?</span> <span class="token string" >\'active\'</span> <span class="token punctuation" >:</span> <span class="token string" >\'\'</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token punctuation" >{</span>match <span class="token operator" >?</span> <span class="token string" >\'> \'</span> <span class="token punctuation" >:</span> <span class="token string" >\'\'</span><span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >to</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>to<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>label<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Link</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token punctuation" >)</span><span class="token punctuation" >}</span><span class="token operator" >/</span><span class="token operator" >></span>\n<span class="token punctuation" >)</span>\n\n<span class="token keyword" >const</span> Home <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h2</span><span class="token punctuation" >></span></span>主页<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h2</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >)</span>\n\n<span class="token keyword" >const</span> About <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h2</span><span class="token punctuation" >></span></span>关于<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h2</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >)</span>\n\n<span class="token keyword" >export</span> <span class="token keyword" >default</span> CustomLinkExample\n'}});