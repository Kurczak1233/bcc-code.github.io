import{_ as o,r as p,o as l,c,a,b as n,d as s,f as e}from"./app.1ded8a6d.js";const i={},r=e('<h1 id="news" tabindex="-1"><a class="header-anchor" href="#news" aria-hidden="true">#</a> News</h1><h2 id="page-contents" tabindex="-1"><a class="header-anchor" href="#page-contents" aria-hidden="true">#</a> Page Contents</h2><ul><li><a href="#rss-link-to-be-shared-with-brunstad">RSS Link to be shared with Brunstad</a></li><li><a href="#rss-format">RSS Format</a></li><li><a href="#rss-example">RSS Example</a></li><li><a href="#modify-the-properties-of-your-feed">Modify the properties of your feed</a></li><li><a href="#developer-tips">Developer Tips</a></li></ul><hr><h3 id="integrate-your-news-with-brunstad-portal" tabindex="-1"><a class="header-anchor" href="#integrate-your-news-with-brunstad-portal" aria-hidden="true">#</a> Integrate your news with Brunstad Portal</h3><p>Articles from local churches are being collected via RSS to be shown on Brunstad Portal. News and information from all local churches are shown on the Brunstad Portal start page, and users can select which content they are interested in seeing on their front page.</p><p>Here you’ll find information on how you as a developer should make the RSS feed.</p><h4 id="how-do-we-share-our-news-on-brunstad-portal" tabindex="-1"><a class="header-anchor" href="#how-do-we-share-our-news-on-brunstad-portal" aria-hidden="true">#</a> How do we share our news on Brunstad Portal?</h4><p>You are required to make your own RSS-feed containing news to be accessible via Brunstad Portal and send us the URL.</p><h4 id="warning" tabindex="-1"><a class="header-anchor" href="#warning" aria-hidden="true">#</a> Warning</h4>',10),u={href:"/docs/bcc-signon/openid-connect/#protect-news-feed-and-calendar",target:"_blank",rel:"noopener noreferrer"},d=a("a",{href:"#rss-format"},"here",-1),h=a("h4",{id:"what-is-rss",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#what-is-rss","aria-hidden":"true"},"#"),n(" What is RSS?")],-1),k={href:"https://www.rssboard.org/rss-specification",target:"_blank",rel:"noopener noreferrer"},g={href:"https://en.wikipedia.org/wiki/RSS",target:"_blank",rel:"noopener noreferrer"},m=e('<h2 id="rss-link-to-be-shared-with-brunstad" tabindex="-1"><a class="header-anchor" href="#rss-link-to-be-shared-with-brunstad" aria-hidden="true">#</a> RSS Link to be shared with Brunstad</h2><p>We would like to get a link in the following format:</p><h4 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h4><p><code>http://{domain name}/{file path}?updated-min={RFC 3339}&amp;max-results={int}</code></p><h4 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h4><p><code>http://church.brunstad.org/rssfeed?updated-min=2019-01-31T16:39:57-08:00&amp;max-results=100</code></p>',6),f=a("strong",null,"RFC3339",-1),b={href:"/docs/bcc-signon/openid-connect/#protect-news-feed-and-calendar",target:"_blank",rel:"noopener noreferrer"},v=e('<h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3><p>The link should contain the following parameters, so that our indexing service does not have to retrieve all data on every update. Alternatively, you can omit the parameters, and instead make the feed <strong>return only the ten most recent events</strong>. Thank you for understanding. You are welcome to contact support if you have any questions about this.</p><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>updated-min</code></td><td>Only entries updated after this date should be returned.</td></tr><tr><td><code>max-results</code></td><td>Maximum number of entries to be returned. Return latest entries.</td></tr></tbody></table><h2 id="rss-format" tabindex="-1"><a class="header-anchor" href="#rss-format" aria-hidden="true">#</a> RSS Format</h2><p>The following fields are <strong>required</strong> for each <code>&lt;item&gt;</code>:</p><table><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td><code>&lt;title&gt;</code></td><td>The article heading/title.</td></tr><tr><td><code>&lt;link&gt;</code></td><td>Must contain the complete URL to the article itself on your web site.</td></tr><tr><td><code>&lt;pubDate&gt;</code></td><td>The time when the article was published.</td></tr><tr><td><code>&lt;guid&gt;</code></td><td>A global unique identification for each article, preferably in the form {URL}-{ID} where URL is for example lokalmenighet.brunstadworld.org and ID is the unique ID of the entry in your database. This should be the same each time the feed is generated.</td></tr></tbody></table><p>The following fields are <strong>optional</strong> for each <code>&lt;item&gt;</code>:</p>',7),w=a("thead",null,[a("tr",null,[a("th",null,"Field"),a("th",null,"Description")])],-1),y=a("td",null,[a("code",null,"<enclosure>")],-1),x={href:"https://www.rssboard.org/rss-specification#ltenclosuregtSubelementOfLtitemgt",target:"_blank",rel:"noopener noreferrer"},_=a("code",null,"length",-1),S=a("tr",null,[a("td",null,[a("code",null,"<category>")]),a("td",null,[n("An "),a("code",null,"<item>"),n(" can contain this tag. If the value of the tag contains “internal”, the item will be marked as internal (read more below).")])],-1),q=e(`<h3 id="internal-items" tabindex="-1"><a class="header-anchor" href="#internal-items" aria-hidden="true">#</a> Internal items</h3><p>If the special category “internal” is used, the article will only be shown to the friends from your local church. You can also allow people from other churches to read the internal posts from your feed. In that case, please contact us and specify what churches apart from your local church should be able to read your internal posts. It is also possible to do this on a country basis. (E.g. all friends from France can see internal posts from “france_news”.)</p><h2 id="rss-example" tabindex="-1"><a class="header-anchor" href="#rss-example" aria-hidden="true">#</a> RSS Example</h2><p>Here is an example of a RSS Feed:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-16&quot; standalone=&quot;yes&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rss</span> <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>channel</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>StavangerWEB<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span><span class="token punctuation">&gt;</span></span>http://stavanger.brunstadworld.org/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>link</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>description</span><span class="token punctuation">&gt;</span></span>Artikler fra forsiden på StavangerWEB<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>description</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pubDate</span><span class="token punctuation">&gt;</span></span>Tue, 29 Mar 2011 13:34:45 GMT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pubDate</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>lastBuildDate</span><span class="token punctuation">&gt;</span></span>Tue, 29 Mar 2011 13:34:45 GMT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>lastBuildDate</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>docs</span><span class="token punctuation">&gt;</span></span>http://www.rssboard.org/rss-specification<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>docs</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ttl</span><span class="token punctuation">&gt;</span></span>30<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ttl</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Dugnad på Snøde<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span><span class="token punctuation">&gt;</span></span>http://stavanger.brunstadworld.org/documents.asp?id=1855<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>link</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pubDate</span><span class="token punctuation">&gt;</span></span>2011-03-28T19:07:57<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pubDate</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>guid</span><span class="token punctuation">&gt;</span></span>stavanger.brunstadworld.org-1855<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>guid</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enclosure</span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://stavanger.brunstadworld.org/images/ingress-123.jpg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">length</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>22356<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image/jpeg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Skøytegruppa<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span><span class="token punctuation">&gt;</span></span>http://stavanger.brunstadworld.org/documents.asp?id=1856<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>link</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pubDate</span><span class="token punctuation">&gt;</span></span>2011-03-28T16:28:53<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pubDate</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>guid</span><span class="token punctuation">&gt;</span></span>stavanger.brunstadworld.org-1856<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>guid</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enclosure</span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://stavanger.brunstadworld.org/files.asp?id=27835<span class="token punctuation">&quot;</span></span> <span class="token attr-name">length</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>24756<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image/jpeg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Vaskelag uke 48<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span><span class="token punctuation">&gt;</span></span>http://stavanger.brunstadworld.org/documents.asp?id=1857<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>link</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pubDate</span><span class="token punctuation">&gt;</span></span>2011-01-28T16:28:53<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pubDate</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>guid</span><span class="token punctuation">&gt;</span></span>stavanger.brunstadworld.org-1856<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>guid</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>enclosure</span> <span class="token attr-name">url</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://stavanger.brunstadworld.org/files.asp?id=27635<span class="token punctuation">&quot;</span></span> <span class="token attr-name">length</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>24776<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image/jpeg<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>category</span><span class="token punctuation">&gt;</span></span>internal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>category</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>channel</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rss</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="modify-the-properties-of-your-feed" tabindex="-1"><a class="header-anchor" href="#modify-the-properties-of-your-feed" aria-hidden="true">#</a> Modify the properties of your feed</h2><p>You can modify certain properties of your feed. The actual modification must be done by us, but you can contact us and specify what properties you would like to modify.</p><p>The following properties of a feed can be modified:</p><h4 id="local-feed" tabindex="-1"><a class="header-anchor" href="#local-feed" aria-hidden="true">#</a> <strong>Local Feed</strong></h4><p>You can associate any number of churches and/or countries with a feed and say that the feed is local to people from those churches/countries. If a feed is local to you, posts from that feed will show up in your “Local” section, instead of your “Worldwide” section. By default, a feed for a local church is marked as local for people from that church. However, you may want to make the feed local for other churches as well. (Unrealistic example: Maybe you have a feed called “Fjellnytt” that you want to be local to people from not only Hallingdal, but also Valdres and Harstad.)</p><h4 id="who-can-see-internal-posts" tabindex="-1"><a class="header-anchor" href="#who-can-see-internal-posts" aria-hidden="true">#</a> <strong>Who can see internal posts?</strong></h4><p>You can associate any number of churches and/or countries with a feed and say that people from those churches/countries can see internal posts from that feed. By default, people can see internal posts from the feed for their local church. However, you may want to let people from certain other churches/countries see internal posts from your feed as well.</p><h2 id="developer-tips" tabindex="-1"><a class="header-anchor" href="#developer-tips" aria-hidden="true">#</a> Developer Tips</h2><h3 id="xml-encoding" tabindex="-1"><a class="header-anchor" href="#xml-encoding" aria-hidden="true">#</a> XML Encoding</h3><p>It is important that text fields that can contain special XML characters, like for instance &lt; or &gt; are properly encoded, so that they do not result in invalid XML.</p><p>There are various ways to do this:</p><ul><li>Use XML/HTML encoding so that <code>&gt;</code> is replaced by <code>&amp;gt</code> and <code>&lt;</code> with <code>&amp;lt</code> etc. For example:<code>&lt;title&gt;Some html encoded title.&lt;/title&gt;</code></li><li>Use <code>&lt;![CDATA[ ]]&gt;</code> around all content. For example: <code>&lt;title&gt;&lt;![CDATA[Some title with special characters.]]&gt;&lt;/title&gt;</code></li><li>Use libraries to generate the RSS XML that handles this automatically (such as XElement in the System.Linq.Xml library in .Net 3.5+)</li></ul>`,17);function T(R,D){const t=p("ExternalLinkIcon");return l(),c("div",null,[r,a("p",null,[n("The url should be a "),a("a",u,[n("private url"),s(t)]),n(" and not protected by signon. Because the contents of the news feed is then technically available to anyone (if they know the url), it’s best to keep the information in the feed to a minimum and to avoid any sensitive information. You should only include the title, the link to the article, the publication date, a unique id for the article and a link to the thumbnail image. Read more about the format "),d,n(". The actual content (ingress, description, body) of the articles should not be included in the RSS feed.")]),h,a("p",null,[n("RSS is a simple and open XML-based format used to exchange news and articles on the Internet. We follow the standard "),a("a",k,[n("RSS 2.0"),s(t)]),n(".")]),a("p",null,[n("Read more about RSS on "),a("a",g,[n("Wikipedia"),s(t)])]),m,a("p",null,[f,n(" is a standardized time format. Please make sure the link is making use of a "),a("a",b,[n("Private Url"),s(t)]),n(".")]),v,a("table",null,[w,a("tbody",null,[a("tr",null,[y,a("td",null,[n("Specifies the image to be shown on the thumbnail on the portal. The image will be downscaled if it is too large, but it should have at least 150px width. Please follow the "),a("a",x,[n("RSS 2.0 Specification"),s(t)]),n(" to see what the required attributes are. The url to the image should NOT be protected by signon. (You may omit the "),_,n(" attribute, because it’s currently not used by us.)")])]),S])]),q])}const B=o(i,[["render",T],["__file","news-widget.html.vue"]]);export{B as default};
