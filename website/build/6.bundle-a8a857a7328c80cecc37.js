webpackJsonp([6],{547:function(n,s){n.exports='<span class="token keyword" >import</span> <span class="token operator" >*</span> <span class="token keyword" >as</span> React <span class="token keyword" >from</span> <span class="token string" >\'react\'</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> StaticRouter<span class="token punctuation" >,</span> Route <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'react-router-dom\'</span>\n\n<span class="token comment" spellcheck="true">// This example renders a route within a StaticRouter and populates its staticContext,</span>\n<span class="token comment" spellcheck="true">// which it then prints out.</span>\n<span class="token comment" spellcheck="true">// In the real world you would use the StaticRouter for server-side rendering:</span>\n<span class="token comment" spellcheck="true">//</span>\n<span class="token comment" spellcheck="true">// import * as express from \'express\'</span>\n<span class="token comment" spellcheck="true">// import { renderToString } from \'react-dom/server\'</span>\n<span class="token comment" spellcheck="true">//</span>\n<span class="token comment" spellcheck="true">// const app = express()</span>\n<span class="token comment" spellcheck="true">//</span>\n<span class="token comment" spellcheck="true">// app.get(\'*\', (req, res) => {</span>\n<span class="token comment" spellcheck="true">//     const staticContext = {}</span>\n<span class="token comment" spellcheck="true">//</span>\n<span class="token comment" spellcheck="true">//     const html = renderToString(</span>\n<span class="token comment" spellcheck="true">//         &lt;StaticRouter location={req.url} context={staticContext}></span>\n<span class="token comment" spellcheck="true">//             &lt;App /> (includes the RouteStatus component below e.g. for 404 errors)</span>\n<span class="token comment" spellcheck="true">//         &lt;/StaticRouter></span>\n<span class="token comment" spellcheck="true">//     )</span>\n<span class="token comment" spellcheck="true">//</span>\n<span class="token comment" spellcheck="true">//     res.status(staticContext.statusCode || 200).send(html)</span>\n<span class="token comment" spellcheck="true">// })</span>\n<span class="token comment" spellcheck="true">//</span>\n<span class="token comment" spellcheck="true">// app.listen(process.env.PORT || 3000)</span>\n\n<span class="token keyword" >const</span> RouteStatus <span class="token operator" >=</span> <span class="token punctuation" >(</span>props<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n    <span class="token operator" >&lt;</span>Route\n        render<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> staticContext <span class="token punctuation" >}</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n            <span class="token comment" spellcheck="true">// we have to check if staticContext exists</span>\n            <span class="token comment" spellcheck="true">// because it will be undefined if rendered through a BrowserRouter</span>\n            <span class="token keyword" >if</span> <span class="token punctuation" >(</span>staticContext<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n                staticContext<span class="token punctuation" >.</span>statusCode <span class="token operator" >=</span> props<span class="token punctuation" >.</span>statusCode\n            <span class="token punctuation" >}</span>\n\n            <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n                <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n                    <span class="token punctuation" >{</span>props<span class="token punctuation" >.</span>children<span class="token punctuation" >}</span>\n                <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n            <span class="token punctuation" >)</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >}</span>\n    <span class="token operator" >/</span><span class="token operator" >></span>\n<span class="token punctuation" >)</span>\n\n<span class="token keyword" >const</span> PrintContext <span class="token operator" >=</span> <span class="token punctuation" >(</span>props<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\n        Static context<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span>props<span class="token punctuation" >.</span>staticContext<span class="token punctuation" >)</span><span class="token punctuation" >}</span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >)</span>\n\n<span class="token keyword" >class</span> <span class="token class-name" >StaticRouterExample</span> <span class="token keyword" >extends</span> <span class="token class-name" >React<span class="token punctuation" >.</span>Component</span> <span class="token punctuation" >{</span>\n\n    <span class="token comment" spellcheck="true">// This is the context object that we pass to the StaticRouter.</span>\n    <span class="token comment" spellcheck="true">// It can be modified by routes to provide additional information</span>\n    <span class="token comment" spellcheck="true">// for the server-side render</span>\n    staticContext <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n    <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n        <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>StaticRouter</span> <span class="token attr-name" >location</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/foo<span class="token punctuation" >"</span></span> <span class="token attr-name" >context</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>staticContext<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n                <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n                    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>RouteStatus</span> <span class="token attr-name" >statusCode</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >404</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n                        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>Route <span class="token keyword" >with</span> statusCode <span class="token number" >404</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n                        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>PrintContext</span> <span class="token attr-name" >staticContext</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>staticContext<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n                    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>RouteStatus</span><span class="token punctuation" >></span></span>\n                <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>StaticRouter</span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >)</span>\n    <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >export</span> <span class="token keyword" >default</span> StaticRouterExample\n'}});