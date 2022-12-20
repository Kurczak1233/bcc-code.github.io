import{_ as a,o as s,c as n,f as t}from"./app.1ded8a6d.js";const e={},o=t(`<h1 id="address-search" tabindex="-1"><a class="header-anchor" href="#address-search" aria-hidden="true">#</a> Address search</h1><p>The TV guide is a widget that shows the upcoming programs on BrunstadTV. It can be implemented on local church websites as a widget.</p><h4 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bcc-search<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>script-bcc-search<span class="token punctuation">&quot;</span></span> <span class="token attr-name">async</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-authentication-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-authentication-location</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-language</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">data-hidesearchbox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-searchquery</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://widgets.bcc.no/widgets/SearchJs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bcc-search<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>script-bcc-search<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-authentication-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-authentication-location</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-language</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">data-hidesearchbox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-searchquery</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>John Doe<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://widgets.bcc.no/widgets/SearchJs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="wordpress-example" tabindex="-1"><a class="header-anchor" href="#wordpress-example" aria-hidden="true">#</a> Wordpress Example</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>[bcc-widgets-search language=&quot;no&quot; hidesearchbox=&quot;false&quot; searchquery=&quot;John Doe&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>data-authentication-type</code> and <code>data-authentication-location</code></td><td>Please check the <a href="#widgets-authentication">documentation</a> on widget authentication.</td></tr><tr><td><code>data-language</code> (optional)</td><td>The language for the calendar to be returned in. If not specified, the language will be set to English</td></tr><tr><td></td><td><strong>DE</strong> (German), <strong>EN</strong> (English), <strong>FI</strong> (Finnish), <strong>FR</strong> (French), <strong>NO</strong> (Norwegian), <strong>NL</strong> (Dutch), <strong>ES</strong> (Spanish)</td></tr><tr><td><code>data-hidesearchbox </code> (optional)</td><td>Set to <strong>True</strong> to hide the search box so you can use your own search box and send the search string as <strong>q</strong> parameter. Default is <strong>False</strong>.</td></tr><tr><td><code>data-searchquery </code> (optional)</td><td>If you use your own search box, you may send the search string as this parameter. Must be used in combination with the HideSearchBox parameter.</td></tr></tbody></table>`,10),p=[o];function c(u,l){return s(),n("div",null,p)}const i=a(e,[["render",c],["__file","address-search.html.vue"]]);export{i as default};