import{_ as n,r as s,o as e,c as o,a as p,b as a,d as l,w as c,f as u}from"./app.1ded8a6d.js";const i={},r=u(`<h1 id="topbar" tabindex="-1"><a class="header-anchor" href="#topbar" aria-hidden="true">#</a> Topbar</h1><p>The topbar widget can be included at the top of a web page to provide:</p><ul><li>Links to central websites (BMM, Brunstad TV, YEP…)</li><li>Links to local churches</li><li>Show personalized information of the user (e.g. display the name of the user)</li><li>Logout function</li></ul><h2 id="install-the-topbar" tabindex="-1"><a class="header-anchor" href="#install-the-topbar" aria-hidden="true">#</a> Install the topbar</h2><p><strong>WordPress applications that have the <code>BCC Signon</code> plugin installed should not follow this tutorial (the topbar is already included in the plugin).</strong></p><p>Make sure you include this styling in your <code>&lt;head&gt;</code> tag:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- stylesheet link (common for all widgets) --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://widgets.bcc.no/styles/widgets.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token comment">&lt;!-- end stylesheet link --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Include the following just after <code>&lt;body&gt;</code>:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- topbar widget --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>script-bcc-topbar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-authentication-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>TYPE<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-authentication-location</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>LOCATION<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://widgets.bcc.no/widgets/TopbarJs<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-app-title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-app-url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-logout-url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>LOGOUT_URL<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- end topbar widget --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Inside of the data-app-title attribute you can add the title of the application and in data-app-url, the url of the website you want to point to. That can, for example, be:</p><p><code>data-app-title=&quot;BCC Developer&quot; data-app-url=&quot;https://developer.bcc.no&quot;</code></p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration:</h2>`,12);function d(k,h){const t=s("RouterLink");return e(),o("div",null,[r,p("p",null,[a("Please check the "),l(t,{to:"/_projects/widget-authentication/"},{default:c(()=>[a("widgets authentication")]),_:1}),a(".")])])}const m=n(i,[["render",d],["__file","topbar-widget.html.vue"]]);export{m as default};
