webpackJsonp([10],{543:function(n,a){n.exports='<span class="token keyword" >import</span> React <span class="token keyword" >from</span> <span class="token string" >\'react\'</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span>\n  BrowserRouter <span class="token keyword" >as</span> Router<span class="token punctuation" >,</span>\n  Route<span class="token punctuation" >,</span>\n  Link<span class="token punctuation" >,</span>\n  Prompt\n<span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'react-router-dom\'</span>\n\n<span class="token keyword" >const</span> PreventingTransitionsExample <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Router</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ul</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>li</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >to</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Form<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Link</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>li</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>li</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >to</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/one<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>One<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Link</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>li</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>li</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >to</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/two<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Two<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Link</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>li</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>ul</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Route</span> <span class="token attr-name" >path</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/<span class="token punctuation" >"</span></span> <span class="token attr-name" >exact</span> <span class="token attr-name" >component</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>Form<span class="token punctuation" >}</span></span><span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Route</span> <span class="token attr-name" >path</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/one<span class="token punctuation" >"</span></span> <span class="token attr-name" >render</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h3</span><span class="token punctuation" >></span></span>One<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h3</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span></span><span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Route</span> <span class="token attr-name" >path</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/two<span class="token punctuation" >"</span></span> <span class="token attr-name" >render</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>h3</span><span class="token punctuation" >></span></span>Two<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>h3</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span></span><span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Router</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >)</span>\n\n<span class="token keyword" >class</span> <span class="token class-name" >Form</span> <span class="token keyword" >extends</span> <span class="token class-name" >React<span class="token punctuation" >.</span>Component</span> <span class="token punctuation" >{</span>\n  state <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n    isBlocking<span class="token punctuation" >:</span> <span class="token boolean" >false</span>\n  <span class="token punctuation" >}</span>\n\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> <span class="token punctuation" >{</span> isBlocking <span class="token punctuation" >}</span> <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state\n\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span>\n        <span class="token attr-name" >onSubmit</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>event <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n          event<span class="token punctuation" >.</span><span class="token function" >preventDefault</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span>\n          event<span class="token punctuation" >.</span>target<span class="token punctuation" >.</span><span class="token function" >reset</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span>\n          <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n            isBlocking<span class="token punctuation" >:</span> <span class="token boolean" >false</span>\n          <span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n        <span class="token punctuation" >}</span></span><span class="token attr-name" >}</span>\n      <span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Prompt</span>\n          <span class="token attr-name" >when</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>isBlocking<span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >message</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>location <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n            <span class="token template-string" ><span class="token string" >`Are you sure you want to go to </span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>location<span class="token punctuation" >.</span>pathname<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span>\n          <span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >/></span></span>\n\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\n          Blocking<span class="token operator" >?</span> <span class="token punctuation" >{</span>isBlocking <span class="token operator" >?</span> <span class="token string" >\'Yes, click a link or the back button\'</span> <span class="token punctuation" >:</span> <span class="token string" >\'Nope\'</span><span class="token punctuation" >}</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>input</span>\n            <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>50<span class="token punctuation" >"</span></span>\n            <span class="token attr-name" >placeholder</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>type</span> <span class="token attr-name" >something</span> <span class="token attr-name" >to</span> <span class="token attr-name" >block</span> <span class="token attr-name" >transitions"</span>\n            <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>event <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n              <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n                isBlocking<span class="token punctuation" >:</span> event<span class="token punctuation" >.</span>target<span class="token punctuation" >.</span>value<span class="token punctuation" >.</span>length <span class="token operator" >></span> <span class="token number" >0</span>\n              <span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n            <span class="token punctuation" >}</span></span><span class="token attr-name" >}</span>\n          <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span><span class="token punctuation" >></span></span>Submit to stop blocking<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >export</span> <span class="token keyword" >default</span> PreventingTransitionsExample\n'}});