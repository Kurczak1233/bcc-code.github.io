import{_ as o,r as i,o as r,c as l,a as e,b as a,d as s,f as t}from"./app.1ded8a6d.js";const c={},p=t('<h1 id="menu" tabindex="-1"><a class="header-anchor" href="#menu" aria-hidden="true">#</a> Menu</h1><ul><li><a href="#menu">Menu</a></li><li><a href="#overview">Overview</a></li><li><a href="#environments">Environments</a><ul><li><a href="#sandbox">Sandbox</a></li><li><a href="#production">Production</a></li></ul></li><li><a href="#getting-started">Getting Started</a><ul><li><a href="#request-access">Request access</a><ul><li><a href="#write-a-email-to-itbccno">Write a email to it@bcc.no</a></li></ul></li><li><a href="#generate-a-token">Generate a token</a><ul><li><a href="#example-in-curl">Example in cURL</a></li><li><a href="#example-response">Example response</a></li></ul></li><li><a href="#use-the-token">Use the token</a><ul><li><a href="#example-in-curl-1">Example in cURL</a></li></ul></li></ul></li><li><a href="#api-explorer">API Explorer</a></li></ul><h1 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h1>',3),d=e("li",null,"This API is the official source of personal data for Machine-To-Machine applications in BCC.",-1),u={href:"https://www.oauth.com/oauth2-servers/access-tokens/client-credentials/",target:"_blank",rel:"noopener noreferrer"},h=e("li",null,"Permissions are managed with scopes",-1),b=t(`<h1 id="environments" tabindex="-1"><a class="header-anchor" href="#environments" aria-hidden="true">#</a> Environments</h1><p>All APIs are availible for 2 environments. Sandbox is meant for use in local development and staging/sandbox environment for your app. Production should only be used in production deployments.</p><p>Both environments are essentially the same. The only difference is that the sandbox environment has fictitious data. In usage they are also the same. You only need to use different values here, which are referenced further in the documentation.</p><h3 id="sandbox" tabindex="-1"><a class="header-anchor" href="#sandbox" aria-hidden="true">#</a> Sandbox</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">IDENTITY_SERVER_ORIGIN</span><span class="token operator">=</span><span class="token string">&quot;https://bcc-sso-sandbox.eu.auth0.com&quot;</span>
<span class="token assign-left variable">API_ORIGIN</span><span class="token operator">=</span><span class="token string">&quot;https://sandbox-api.bcc.no&quot;</span>
<span class="token assign-left variable">API_AUDIENCE</span><span class="token operator">=</span><span class="token string">&quot;sandbox-api.bcc.no&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="production" tabindex="-1"><a class="header-anchor" href="#production" aria-hidden="true">#</a> Production</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">IDENTITY_SERVER_ORIGIN</span><span class="token operator">=</span><span class="token string">&quot;https://login.bcc.no&quot;</span>
<span class="token assign-left variable">API_ORIGIN</span><span class="token operator">=</span><span class="token string">&quot;https://api.bcc.no&quot;</span>
<span class="token assign-left variable">API_AUDIENCE</span><span class="token operator">=</span><span class="token string">&quot;api.bcc.no&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h1><h2 id="request-access" tabindex="-1"><a class="header-anchor" href="#request-access" aria-hidden="true">#</a> Request access</h2><p>We recommend first using the sandbox for local development, and only getting the production access when releasing to production</p><h3 id="write-a-email-to-it-bcc-no" tabindex="-1"><a class="header-anchor" href="#write-a-email-to-it-bcc-no" aria-hidden="true">#</a> Write a email to <a href="mailto:it@bcc.no">it@bcc.no</a></h3><p>Your email should include the following information:</p><ol><li>The environment to which you need access</li><li>Name for your application</li><li>Scopes you need access to, with a reason for each scope</li><li>Link to the privacy policy (if the application is third party)</li></ol><p>BCC IT will create an application with the requested permissions and respond with it&#39;s OAuth2 <code>CLIENT_ID</code> and <code>CLIENT_SECRET</code></p><h2 id="generate-a-token" tabindex="-1"><a class="header-anchor" href="#generate-a-token" aria-hidden="true">#</a> Generate a token</h2><p>Use the credentials to get an access token to our APIs</p><h3 id="example-in-curl" tabindex="-1"><a class="header-anchor" href="#example-in-curl" aria-hidden="true">#</a> Example in cURL</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--request</span> POST <span class="token punctuation">\\</span>
  <span class="token parameter variable">--url</span> <span class="token variable">$IDENTITY_SERVER_ORIGIN</span>/oauth/token <span class="token punctuation">\\</span>
  <span class="token parameter variable">--header</span> <span class="token string">&#39;content-type: application/json&#39;</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--data</span> <span class="token string">&#39;{&quot;client_id&quot;:&quot;$CLIENT_ID&quot;,&quot;client_secret&quot;:&quot;$CLIENT_SECRET&quot;,&quot;audience&quot;:&quot;$API_AUDIENCE&quot;,&quot;grant_type&quot;:&quot;client_credentials&quot;, &quot;scope&quot;:&quot;persons.name#read persons.birth_date#read&quot;}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="example-response" tabindex="-1"><a class="header-anchor" href="#example-response" aria-hidden="true">#</a> Example response</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;access_token&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ACCESS_TOKEN&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;persons.name#read persons.birth_date#read&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;expires_in&quot;</span><span class="token operator">:</span> <span class="token number">86400</span><span class="token punctuation">,</span>
  <span class="token property">&quot;token_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Bearer&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="use-the-token" tabindex="-1"><a class="header-anchor" href="#use-the-token" aria-hidden="true">#</a> Use the token</h2><p>Attach the access token to all requests to our APIs. Token should be present in the <code>Authorization</code> header, prefixed with <code>&quot;Bearer &quot;</code></p><h3 id="example-in-curl-1" tabindex="-1"><a class="header-anchor" href="#example-in-curl-1" aria-hidden="true">#</a> Example in cURL</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">--request</span> GET <span class="token punctuation">\\</span>
  <span class="token parameter variable">--url</span> <span class="token variable">$API_ORIGIN</span>/persons/1 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--header</span> <span class="token string">&#39;Authorization: Bearer $ACCESS_TOKEN&#39;</span> <span class="token punctuation">\\</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="api-explorer" tabindex="-1"><a class="header-anchor" href="#api-explorer" aria-hidden="true">#</a> API Explorer</h1><p>All of our APIs support an API explorer. To use it:</p>`,26),v={href:"https://api.bcc.no/docs/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://sandbox-api.bcc.no/docs/",target:"_blank",rel:"noopener noreferrer"},k=e("li",null,"Select the API in the top right corner",-1),f=e("li",null,'Click "Authorize"',-1),g=e("li",null,"Provide your credentials and select the scopes you want to use",-1),_=e("li",null,"Now you can try out the availible endpoints",-1);function x(q,I){const n=i("ExternalLinkIcon");return r(),l("div",null,[p,e("ul",null,[d,e("li",null,[a("Authentication is done with "),e("a",u,[a("oauth2 client credentials flow"),s(n)])]),h]),b,e("ol",null,[e("li",null,[a("Go to the API Explorer page ("),e("a",v,[a("Production"),s(n)]),a(", "),e("a",m,[a("Sandbox"),s(n)]),a(")")]),k,f,g,_])])}const A=o(c,[["render",x],["__file","index.html.vue"]]);export{A as default};