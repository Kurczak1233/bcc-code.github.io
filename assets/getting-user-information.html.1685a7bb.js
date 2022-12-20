import{_ as t,r as e,o,c,a as n,b as a,d as i,f as p}from"./app.1ded8a6d.js";const l={},u=p(`<h1 id="get-information-about-the-user" tabindex="-1"><a class="header-anchor" href="#get-information-about-the-user" aria-hidden="true">#</a> Get information about the user</h1><p>You can easily get information about the logged in user by using this method.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getUserAttribute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    $user_id <span class="token operator">=</span> <span class="token function">get_current_user_id</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    $claims <span class="token operator">=</span> <span class="token function">get_user_meta</span><span class="token punctuation">(</span>$user_id<span class="token punctuation">,</span> <span class="token string">&#39;openid-connect-generic-last-user-claim&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    $attribute <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">empty</span><span class="token punctuation">(</span>$claims<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        $attribute <span class="token operator">=</span> $claims<span class="token punctuation">[</span><span class="token string">&#39;ClaimName&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> $attribute<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),r=n("code",null,"ClaimName",-1),d={href:"/docs/bcc-signon/openid-connect#get-information-about-the-user",target:"_blank",rel:"noopener noreferrer"},k=n("hr",null,null,-1),m=n("p",null,[a("Next: "),n("a",{href:"sso-data-handling"},"How SSO data is handled →")],-1);function h(_,v){const s=e("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[a("Where "),r,a(" is the name of the claim. All the available claims are documented "),n("a",d,[a("here"),i(s)]),a(".")]),k,m])}const f=t(l,[["render",h],["__file","getting-user-information.html.vue"]]);export{f as default};