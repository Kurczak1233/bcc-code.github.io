import{_ as s,o as n,c as a,f as t}from"./app.1ded8a6d.js";const o={},p=t(`<h1 id="persons-api-scope-definitions" tabindex="-1"><a class="header-anchor" href="#persons-api-scope-definitions" aria-hidden="true">#</a> Persons API Scope definitions</h1><h2 id="list-of-all-available-scopes-with-example-payloads" tabindex="-1"><a class="header-anchor" href="#list-of-all-available-scopes-with-example-payloads" aria-hidden="true">#</a> List of all available scopes with example payloads</h2><ol><li><p>persons#read</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;personID&quot;</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lastChangedDate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2019-01-01T20:10:15.123Z&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;firstName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;middleName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Bernard&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lastName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Doe&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;displayName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;John Bernard Doe&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
  <span class="token property">&quot;birthDate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1990-01-01&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;diseasedDate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Male&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;john.doe@example.com&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;emailVerified&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;cellPhone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;+474111111&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;cellPhoneVerified&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;homePhone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;+472722222&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;address1&quot;</span><span class="token operator">:</span> <span class="token string">&quot;testAddress3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;address2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;waddw&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;address3&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ås&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;countryIso2Code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;no&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;countryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Norway&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;countryNameNative&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Norge&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;postalCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1234&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;region&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>persons.name#read</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;personID&quot;</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lastChangedDate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2019-01-01T20:10:15.123Z&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;firstName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;middleName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Bernard&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lastName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Doe&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;displayName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;John Bernard Doe&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>persons.birth_date#read</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;personID&quot;</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lastChangedDate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2019-01-01T20:10:15.123Z&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
  <span class="token property">&quot;birthDate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1990-01-01&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>persons.deceased_date#read</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;personID&quot;</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lastChangedDate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2019-01-01T20:10:15.123Z&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;diseasedDate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2018-01-01&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>persons.gender#read</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;personID&quot;</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lastChangedDate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2019-01-01T20:10:15.123Z&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;gender&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Male&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>persons.email#read</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;personID&quot;</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lastChangedDate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2019-01-01T20:10:15.123Z&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token string">&quot;john.doe@example.com&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;emailVerified&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>persons.phone#read</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;personID&quot;</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lastChangedDate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2019-01-01T20:10:15.123Z&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;cellPhone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;+474111111&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;cellPhoneVerified&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;homePhone&quot;</span><span class="token operator">:</span> <span class="token string">&quot;+472722222&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>persons.address#read</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;personID&quot;</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lastChangedDate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2019-01-01T20:10:15.123Z&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;address1&quot;</span><span class="token operator">:</span> <span class="token string">&quot;testAddress3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;address2&quot;</span><span class="token operator">:</span> <span class="token string">&quot;waddw&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;address3&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;city&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ås&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;countryIso2Code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;no&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;countryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Norway&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;countryNameNative&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Norge&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;postalCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1234&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;region&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>persons.national_ids#read</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;personID&quot;</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lastChangedDate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2019-01-01T20:10:15.123Z&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;nationalIDs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;countryIso2Code&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NO&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1234123412&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>persons.affiliations#read</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;personID&quot;</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lastChangedDate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2019-01-01T20:10:15.123Z&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;affiliations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;orgID&quot;</span><span class="token operator">:</span> <span class="token number">123</span><span class="token punctuation">,</span>
      <span class="token property">&quot;orgType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Church&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Participant&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;validFrom&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2020-01-01T08:01:23.456Z&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>persons.relations#read</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;personID&quot;</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
  <span class="token property">&quot;lastChangedDate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2019-01-01T20:10:15.123Z&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;relations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Child&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;ValidFrom&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2010-10-10&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;PersonID&quot;</span><span class="token operator">:</span> <span class="token number">10001</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Spouse&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;ValidFrom&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2008-09-09&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;PersonID&quot;</span><span class="token operator">:</span> <span class="token number">10002</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,3),e=[p];function l(i,u){return n(),a("div",null,e)}const c=s(o,[["render",l],["__file","scopes.html.vue"]]);export{c as default};
