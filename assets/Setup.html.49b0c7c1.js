import{_ as n,o as s,c as a,f as e}from"./app.1ded8a6d.js";const t={},o=e(`<h1 id="welcome-bcc-developers" tabindex="-1"><a class="header-anchor" href="#welcome-bcc-developers" aria-hidden="true">#</a> Welcome BCC developers!</h1><p>Setup the package for local development:</p><ol><li>yarn init</li><li>yarn add -D vuepress@next</li><li>Add scripts to inited package json</li><li>add/install packages:</li></ol><ul><li>&quot;stylus&quot;: &quot;^0.59.0&quot;,</li><li>&quot;vuepress-plugin-md-enhance&quot;: &quot;^2.0.0-beta.130&quot;, (For tabs support)*</li><li>&quot;vuepress-theme-bcc-common-components&quot;: &quot;^1.0.30&quot;,</li><li>&quot;vuepress-theme-hope&quot;: &quot;^2.0.0-beta.130&quot;*</li><li>&quot;tailwindcss&quot;: &quot;^3.2.4&quot;,</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>*Take care of the package version. It automatically installs the VuePress 1 stable version.</p><p>Packages versions may vary, so feel free to install the newest version.</p></div><ol start="5"><li>Create config file. Localization: .vuepress/config.js</li></ol><p>Basic config setup:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&quot;en-US&quot;</span><span class="token punctuation">,</span> 
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;BCC Developer Documentation&quot;</span><span class="token punctuation">,</span> 
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&quot;Package documentation&quot;</span><span class="token punctuation">,</span> 
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&quot;/bcc-code.github.io/&quot;</span><span class="token punctuation">,</span> <span class="token comment">//Base of the repository name.</span>
  <span class="token comment">//It is important to have the same as the repo name.</span>
  <span class="token comment">//Otherwise it may be problematic to deploy it.</span>

  <span class="token comment">//BCC custom theme</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">bccCustomTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span> 
    <span class="token literal-property property">logoDark</span><span class="token operator">:</span> <span class="token string">&quot;bccLogoWhite.png&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">&quot;bccLogoDark.png&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token function">getSideBarItems</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span><span class="token punctuation">,</span> 
    <span class="token comment">//Important</span>
    <span class="token comment">//Get the method from the theme package</span>

    <span class="token literal-property property">icons</span><span class="token operator">:</span> <span class="token function">findPathIcons</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">)</span><span class="token punctuation">,</span> 
    <span class="token comment">//Important</span>
    <span class="token comment">//Get the method from the theme package</span>
    <span class="token comment">//Above methods allows to get the local md/svg files paths.</span>

    
    <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;Setup&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&quot;/Setup.md&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">//Custom navbar navigation. Customizable.</span>
    <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">&quot;Kurczak1233/bcc-code.github.io&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// if your docs are in a different repo from your main project:</span>
    <span class="token literal-property property">docsRepo</span><span class="token operator">:</span> <span class="token string">&quot;Kurczak1233/bcc-code.github.io&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// if your docs are not at the root of the repo:</span>
    <span class="token literal-property property">docsDir</span><span class="token operator">:</span> <span class="token string">&quot;docs&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// if your docs are in a specific branch (defaults to &#39;master&#39;):</span>
    <span class="token literal-property property">docsBranch</span><span class="token operator">:</span> <span class="token string">&quot;master&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// defaults to false, set to true to enable</span>
    <span class="token literal-property property">editLinks</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// custom text for edit link. Defaults to &quot;Edit this page&quot;</span>
    <span class="token literal-property property">editLinkText</span><span class="token operator">:</span> <span class="token string">&quot;Edit this page on github&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">prev</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//Show prev page in footer</span>
    <span class="token literal-property property">next</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//Show next page in footer</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">mdEnhancePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// adds code tabs support</span>
      <span class="token literal-property property">codetabs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>Get the public folder and change favicon and the logo.</li><li>Setup the custom sidebar links icons. Localization: .vuepress/public/routesIcons/* Pay attention to the naming, otherwise, the routes will not be detected. To overwrite the route icons, just name it as a route name. The icons are applyable only to the first layer of sidebar routes.</li><li>Write documentation</li></ol>`,9),p=[o];function i(l,c){return s(),a("div",null,p)}const u=n(t,[["render",i],["__file","Setup.html.vue"]]);export{u as default};