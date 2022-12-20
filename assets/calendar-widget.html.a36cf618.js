import{_ as t,r as e,o as p,c as o,a,d as c,w as l,b as n,f as u}from"./app.1ded8a6d.js";const i={},r=a("h1",{id:"calendar-–-widget",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#calendar-–-widget","aria-hidden":"true"},"#"),n(" Calendar – widget")],-1),d=a("h2",{id:"page-contents",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#page-contents","aria-hidden":"true"},"#"),n(" Page Contents")],-1),k=a("li",null,[a("a",{href:"#week-calendar"},"Week calendar")],-1),h=a("li",null,[a("a",{href:"#month-calendar"},"Month calendar")],-1),g=u(`<hr><h2 id="implement-the-brunstad-portal-calendar-on-your-website" tabindex="-1"><a class="header-anchor" href="#implement-the-brunstad-portal-calendar-on-your-website" aria-hidden="true">#</a> Implement the Brunstad Portal calendar on your website</h2><p>The calendars shown on Brunstad Portal can be implemented on local church websites as widgets. If you share your calendar with Brunstad Portal, you can make a widget that shows e.g. your church calendar and the Brunstad calendar.</p><h2 id="week-calendar" tabindex="-1"><a class="header-anchor" href="#week-calendar" aria-hidden="true">#</a> Week calendar</h2><p>The script tag of the week calendar looks like this:</p><h4 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">position</span><span class="token punctuation">:</span>relative<span class="token punctuation">;</span> <span class="token property">width</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bcc-calendar-week<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>script-bcc-calendar-week<span class="token punctuation">&quot;</span></span> <span class="token attr-name">async</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-authentication-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-authentication-location</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">data-language</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-maxdays</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-maxappointments</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-calendars</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-fullcalendarurl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://widgets.bcc.no/widgets/CalendarWeekJs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">position</span><span class="token punctuation">:</span>relative<span class="token punctuation">;</span> <span class="token property">width</span><span class="token punctuation">:</span>300px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bcc-calendar-week<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>script-bcc-calendar-week<span class="token punctuation">&quot;</span></span> <span class="token attr-name">async</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-authentication-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-authentication-location</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">data-language</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-maxdays</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>15<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-maxappointments</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>30<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">data-calendars</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>brunstad_calendar_no,tonsberg_calenda<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-fullcalendarurl</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/kalendar.aspx<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://widgets.bcc.no/widgets/CalendarWeekJs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="wordpress-example" tabindex="-1"><a class="header-anchor" href="#wordpress-example" aria-hidden="true">#</a> Wordpress Example</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">position</span><span class="token punctuation">:</span>relative<span class="token punctuation">;</span> <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    [bcc-widgets-week-calendar language=&quot;no&quot; maxdays=15
    calendars=&quot;brunstad_calendar_no&quot; fullcalendarurl=&quot;/kalendar&quot; maxappointments=30]
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>data-authentication-type</code> and <code>data-authentication-location</code></td><td>Please check the <a href="#widgets-authentication">documentation</a> on widget authentication.</td></tr><tr><td><code>data-calendars</code> (required)</td><td>Comma separated list of ids to the calendars that should be returned. <strong>This parameter must be specified</strong>. Each local church church has an id like <em>tonsberg_calendar</em>, and Brunstad has one calendar named <em>brunstad_calendar_no</em>.</td></tr><tr><td><code>data-language</code> (optional)</td><td>The language for the calendar to be returned in. If not specified, the language will be set to English</td></tr><tr><td></td><td><strong>DE</strong> (German), <strong>EN</strong> (English), <strong>FI</strong> (Finnish), <strong>FR</strong> (French), <strong>NO</strong> (Norwegian), <strong>NL</strong> (Dutch), <strong>ES</strong> (Spanish)</td></tr><tr><td><code>data-fullcalendarurl</code> (optional)</td><td>If specified, a button with a link to this URL and with a text like “Show full calendar” (depending on culture selection) will be shown in the bottom of the week calendar. This should contain a link to the month calendar. For the month calendar, it should not be specified.</td></tr><tr><td><code>data-maxdays</code> (optional)</td><td>Maximum number of days (counted from today) to return. Only applicable to the week calendar. Default is 7 days.</td></tr><tr><td><code>data-maxappointments</code> (optional)</td><td>Maximum number of appointments to return. Only applicable to the week calendar. Default is all appointments within the specified days.</td></tr></tbody></table><h2 id="month-calendar" tabindex="-1"><a class="header-anchor" href="#month-calendar" aria-hidden="true">#</a> Month calendar</h2><p>The script tag of the month calendar looks like this:</p><h4 id="syntax-1" tabindex="-1"><a class="header-anchor" href="#syntax-1" aria-hidden="true">#</a> Syntax</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bcc-calendar-month<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>script-bcc-calendar-month<span class="token punctuation">&quot;</span></span> <span class="token attr-name">async</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-authentication-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-authentication-location</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">data-language</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-calendars</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://widgets.bcc.no/widgets/CalendarMonthJs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bcc-calendar-month<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>script-bcc-calendar-month<span class="token punctuation">&quot;</span></span> <span class="token attr-name">async</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-authentication-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-authentication-location</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">data-language</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-calendars</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>brunstad_calendar_no<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://widgets.bcc.no/widgets/CalendarMonthJs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="wordpress-example-1" tabindex="-1"><a class="header-anchor" href="#wordpress-example-1" aria-hidden="true">#</a> Wordpress Example</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
    [bcc-widgets-month-calendar language=&quot;no&quot; calendars=&quot;brunstad_calendar_no&quot;]
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h3><table><thead><tr><th>Parameter</th><th>Description</th></tr></thead><tbody><tr><td><code>data-authentication-type</code> and <code>data-authentication-location</code></td><td>Please check the <a href="#widgets-authentication">documentation</a> on widget authentication.</td></tr><tr><td><code>data-calendars</code> (required)</td><td>Comma separated list of ids to the calendars that should be returned. <strong>This parameter must be specified</strong>. Each local church church has an id like <em>tonsberg_calendar</em>, and Brunstad has one calendar named <em>brunstad_calendar_no</em>.</td></tr><tr><td><code>data-language</code> (optional)</td><td>The language for the calendar to be returned in. If not specified, the language will be set to English</td></tr><tr><td></td><td><strong>DE</strong> (German), <strong>EN</strong> (English), <strong>FI</strong> (Finnish), <strong>FR</strong> (French), <strong>NO</strong> (Norwegian), <strong>NL</strong> (Dutch), <strong>ES</strong> (Spanish)</td></tr></tbody></table>`,23);function m(v,q){const s=e("RouterLink");return p(),o("div",null,[r,d,a("ul",null,[a("li",null,[c(s,{to:"/_projects/bcc-widgets/calendar-widget-integration.html"},{default:l(()=>[n("Calendar - integration")]),_:1})]),k,h]),g])}const w=t(i,[["render",m],["__file","calendar-widget.html.vue"]]);export{w as default};
