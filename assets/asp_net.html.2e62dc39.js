import{_ as o,r as s,o as r,c as l,a as e,b as n,d as t,f as a}from"./app.1ded8a6d.js";const d={},c=a('<h2 id="page-content" tabindex="-1"><a class="header-anchor" href="#page-content" aria-hidden="true">#</a> Page Content</h2><hr><ul><li><a href="#getting-started">Getting started</a><ul><li><a href="#limitations">Limitations</a></li><li><a href="#read-more">Read More</a></li></ul></li><li><a href="#install-nuget-packages">Install nuget packages</a></li><li><a href="#edit-configuration-file">Edit configuration file</a><ul><li><a href="#get-your-client-ids">Get your client IDs</a></li><li><a href="#set-callback-urls">Set Callback URLs</a></li></ul></li><li><a href="#openid-connect-configuration">OpenID Connect configuration</a><ul><li><a href="#auth0-parameters">Auth0 Parameters</a></li><li><a href="#enable-cookie-authentication">Enable Cookie Authentication</a></li><li><a href="#auth0-configuration">Auth0 Configuration</a></li></ul></li><li><a href="#add-account-controller">Add Account Controller</a><ul><li><a href="#single-sign-out">Single Sign-out</a></li></ul></li><li><a href="#force-login-to-enter-the-website">Force login to enter the website</a></li></ul><h1 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting started</h1><p>This tutorial will introduce you to our login solution for ASP.NET Core.</p><h2 id="limitations" tabindex="-1"><a class="header-anchor" href="#limitations" aria-hidden="true">#</a> Limitations</h2><p>This solution has (for now) some limitations that you have to be aware of. Please read them carefully to avoid any bad surprise.</p>',7),u={href:"/_docs/bcc-signon/openid-connect#protect-news-feed-and-calendar",target:"_blank",rel:"noopener noreferrer"},p=e("code",null,"userAccountId",-1),h={href:"/_docs/bcc-signon/openid-connect#deprecated-claims",target:"_blank",rel:"noopener noreferrer"},v=e("h2",{id:"read-more",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#read-more","aria-hidden":"true"},"#"),n(" Read More")],-1),m={href:"https://auth0.com/docs/quickstart/webapp/aspnet-core/01-login",target:"_blank",rel:"noopener noreferrer"},g=e("br",null,null,-1),b=e("hr",null,null,-1),f=e("h1",{id:"install-nuget-packages",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#install-nuget-packages","aria-hidden":"true"},"#"),n(" Install nuget packages")],-1),k={href:"https://www.microsoftpressstore.com/articles/article.aspx?p=2473126",target:"_blank",rel:"noopener noreferrer"},C=a(`<div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>Install-Package Microsoft.Owin.Security.OpenIdConnect
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To avoid any problems with cookies, we recommend you to install this package.</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>Install-Package Kentor.OwinCookieSaver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><br><hr><h1 id="edit-configuration-file" tabindex="-1"><a class="header-anchor" href="#edit-configuration-file" aria-hidden="true">#</a> Edit configuration file</h1><h2 id="get-your-client-ids" tabindex="-1"><a class="header-anchor" href="#get-your-client-ids" aria-hidden="true">#</a> Get your client IDs</h2><p>To use the Auth0 solution, you need to get your client IDs. If you don’t have them, please contact <a href="mailto:it@bcc.no?subject=Support%Developer%BCC">support</a>.</p><p>Navigate to your configuration file, and then to the appSettings section. Add these keys:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>add key<span class="token operator">=</span><span class="token string">&quot;auth0:Domain&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;login.bcc.no&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>add key<span class="token operator">=</span><span class="token string">&quot;auth0:ClientId&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;YOUR-CLIENT-ID&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>add key<span class="token operator">=</span><span class="token string">&quot;auth0:ClientSecret&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;YOUR-CLIENT-SECRET-ID&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="set-callback-urls" tabindex="-1"><a class="header-anchor" href="#set-callback-urls" aria-hidden="true">#</a> Set Callback URLs</h2><p>To complete both login and logout, you need to configure callback URLs.</p><p>We recommend you configure them as follows.</p><ul><li>Login Callback: <code>https://your-domain.com/signin-auth0</code></li><li>Logout Callback: <code>https://your-domain.com</code></li></ul><p>Just replace <code>your-domain.com</code> with your website’s domain.</p><p>Then, go back to your configuration file and add these keys:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>add key<span class="token operator">=</span><span class="token string">&quot;auth0:RedirectUri&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;YOUR-LOGIN-CALLBACK&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>add key<span class="token operator">=</span><span class="token string">&quot;auth0:PostLogoutRedirectUri&quot;</span> value<span class="token operator">=</span><span class="token string">&quot;YOUR-LOGOUT-CALLBACK&quot;</span><span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Before continuing, please send your callback URLs to <a href="mailto:it@bcc.no?subject=Support%Developer%BCC">support</a> so Auth0 can be configured with your website.</p><br><hr><h1 id="openid-connect-configuration" tabindex="-1"><a class="header-anchor" href="#openid-connect-configuration" aria-hidden="true">#</a> OpenID Connect configuration</h1><p><strong>Warning:</strong> make sure that you have updated the <a href="#edit-configuration-file">configuration file</a>. Don’t expect the solution to work otherwise.</p><p>Navigate to the <code>Configuration</code> method of your <code>Startup</code> class.</p><p>The following code has to be added to the method.</p><h2 id="auth0-parameters" tabindex="-1"><a class="header-anchor" href="#auth0-parameters" aria-hidden="true">#</a> Auth0 Parameters</h2><p>Let’s start by defining some parameters.</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>// Configure Auth0 parameters
string auth0Domain = ConfigurationManager.AppSettings[&quot;auth0:Domain&quot;];
string auth0ClientId = ConfigurationManager.AppSettings[&quot;auth0:ClientId&quot;];
string auth0ClientSecret = ConfigurationManager.AppSettings[&quot;auth0:ClientSecret&quot;];
string auth0RedirectUri = ConfigurationManager.AppSettings[&quot;auth0:RedirectUri&quot;];
string auth0PostLogoutRedirectUri = ConfigurationManager.AppSettings[&quot;auth0:PostLogoutRedirectUri&quot;];
This will get the keys defined in the previous article.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="enable-cookie-authentication" tabindex="-1"><a class="header-anchor" href="#enable-cookie-authentication" aria-hidden="true">#</a> Enable Cookie Authentication</h2><p>Then, let’s enable cookie authentication with our installed package, and set them as the default authentication.</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>// Enable Kentor Cookie Saver middleware
app.UseKentorOwinCookieSaver();
// Set Cookies as default authentication type
app.SetDefaultSignInAsAuthenticationType(CookieAuthenticationDefaults.AuthenticationType);
app.UseCookieAuthentication(new CookieAuthenticationOptions
{
AuthenticationType = CookieAuthenticationDefaults.AuthenticationType,
LoginPath = new PathString(&quot;/Account/Login&quot;)
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you want to use a custom Login URL, you can edit the one set at line 9.</p><h2 id="auth0-configuration" tabindex="-1"><a class="header-anchor" href="#auth0-configuration" aria-hidden="true">#</a> Auth0 Configuration</h2><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>// Configure Auth0 authentication
// Configure Auth0 authentication
app.UseOpenIdConnectAuthentication(new OpenIdConnectAuthenticationOptions
{
AuthenticationType = &quot;Auth0&quot;,

                Authority = $&quot;https://{auth0Domain}&quot;,
                ClientId = auth0ClientId,
                ClientSecret = auth0ClientSecret,
                RedirectUri = auth0RedirectUri,
                PostLogoutRedirectUri = auth0PostLogoutRedirectUri,
                ResponseType = OpenIdConnectResponseType.CodeIdTokenToken,
                // Configure the scope, see: https://developer.bcc.no/docs/single-signon/get-information-about-the-user
                Scope = &quot;openid email profile&quot;,
                
                
                TokenValidationParameters = new TokenValidationParameters
                {
                    NameClaimType = &quot;name&quot;
                },
                Notifications = new OpenIdConnectAuthenticationNotifications
                {
                    SecurityTokenValidated = notification =&gt;
                    {
                        notification.AuthenticationTicket.Identity.AddClaim(new Claim(&quot;id_token&quot;, notification.ProtocolMessage.IdToken));
                        notification.AuthenticationTicket.Identity.AddClaim(new Claim(&quot;access_token&quot;, notification.ProtocolMessage.AccessToken));
                        return Task.FromResult(0);
                    },
                    RedirectToIdentityProvider = notification =&gt;
                    {
                        if (notification.ProtocolMessage.RequestType == OpenIdConnectRequestType.Authentication)
                        {
                            // Add audience to widgets, only required when using one of the BCC widgets (etc. Topbar). 
                            notification.ProtocolMessage.SetParameter(&quot;audience&quot;, &quot;https://widgets.brunstad.org&quot;);
                        }
                        else if (notification.ProtocolMessage.RequestType == OpenIdConnectRequestType.Logout)
                        {
                            var logoutUri = $&quot;https://{auth0Domain}/v2/logout?client_id={auth0ClientId}&quot;;
                            notification.Response.Redirect(logoutUri);
                            notification.HandleResponse();
                        }
                        return Task.FromResult(0);
                    }
                }
            });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><hr><h1 id="add-account-controller" tabindex="-1"><a class="header-anchor" href="#add-account-controller" aria-hidden="true">#</a> Add Account Controller</h1><p>If you don’t have any <code>AccountController</code>, create one in your <code>Controllers</code> folder, using this template:</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System.Web;
using System.Web.Mvc;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;

namespace MvcApplication.Controllers
{
    public class AccountController : Controller
    {
        [AllowAnonymous]
        public ActionResult Login(string returnUrl)
        {
            HttpContext.GetOwinContext().Authentication.Challenge(new AuthenticationProperties
                {
                    RedirectUri = returnUrl ?? Url.Action(&quot;Index&quot;, &quot;Home&quot;)
                },
                &quot;Auth0&quot;);
            return new HttpUnauthorizedResult();
        }

        // This endpoint should not be called directly (when using Single SignOut), but rather trough the &quot;SignOut&quot; page.
        [Authorize]
        public void EndSession()
        {
            HttpContext.GetOwinContext().Authentication.SignOut(CookieAuthenticationDefaults.AuthenticationType);
            HttpContext.GetOwinContext().Authentication.SignOut(&quot;Auth0&quot;);
        }

        [Authorize]
        public ActionResult SignOut()
        {
            HttpContext.Response.Headers.Add(&quot;Content-Security-Policy&quot;, &quot;frame-ancestors https://*.bcc.no&quot;);
            return View();
        }

        [Authorize]
        [HttpGet]
        public ActionResult AccessToken()
        {
            var claimsIdentity = User.Identity as ClaimsIdentity;
            var accesstoken = claimsIdentity?.FindFirst(c =&gt; c.Type == &quot;access_token&quot;)?.Value;
            return Content(accesstoken);
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Note:</strong> <code>Url.Action(&quot;Index&quot;, &quot;Home&quot;)</code> (line 15) may have to be edited according to your naming.</p><h3 id="single-sign-out" tabindex="-1"><a class="header-anchor" href="#single-sign-out" aria-hidden="true">#</a> Single Sign-out</h3>`,40),y={href:"/_docs/bcc-signon/openid-connect#single-sign-out",target:"_blank",rel:"noopener noreferrer"},A=a(`<p>The ‘endsession’ path for this tutorial is <code>/Account/EndSession</code></p><p>The sign-out path for this tutorial is <code>/Account/SignOut</code></p><p>The <code>SignOut</code> view should be implemented as described here: <a href="example.com">SignOut of BCC Widgets</a>.</p><br><hr><h1 id="force-login-to-enter-the-website" tabindex="-1"><a class="header-anchor" href="#force-login-to-enter-the-website" aria-hidden="true">#</a> Force login to enter the website</h1><p>We can add a global filter to prevent non-logged in users from entering the website.</p><p>The shortest way to do it is to add this line to the <code>Application_Start()</code> method of <code>Global.asax</code>.</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>GlobalFilters.Filters.Add(new System.Web.Mvc.AuthorizeAttribute());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9);function q(w,_){const i=s("ExternalLinkIcon");return r(),l("div",null,[c,e("ul",null,[e("li",null,[n("The newsfeed link shared with Brunstad Portal should be protected by a "),e("a",u,[n("private URL"),t(i)])]),e("li",null,[n("The "),p,n(" attribute of the old system has been deprecated "),e("a",h,[n("(read more)"),t(i)]),n(".")])]),v,e("p",null,[n("If you want to know more about this solution, you can read "),e("a",m,[n("Auth0’s extended tutorial"),t(i)]),n(".")]),g,b,f,e("p",null,[n("As suggested by Auth0, we will use the "),e("a",k,[n("OWIN OpenID Connect"),t(i)]),n(" middleware. To install it, type the following command in the Package Manager Console.")]),C,e("p",null,[n("Please install Single Signout on your application ("),e("a",y,[n("documentation"),t(i)]),n(").")]),A])}const T=o(d,[["render",q],["__file","asp_net.html.vue"]]);export{T as default};
