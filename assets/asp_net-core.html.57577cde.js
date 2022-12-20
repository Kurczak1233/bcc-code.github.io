import{_ as a,r as s,o as r,c as l,a as n,b as e,d as t,f as o}from"./app.1ded8a6d.js";const d={},c=o('<h2 id="page-content" tabindex="-1"><a class="header-anchor" href="#page-content" aria-hidden="true">#</a> Page Content</h2><hr><ul><li><a href="#getting-started">Getting started</a><ul><li><a href="#limitations">Limitations</a></li><li><a href="#read-more">Read More</a></li></ul></li><li><a href="#install-nuget-packages">Install nuget packages</a></li><li><a href="#edit-configuration-file">Edit configuration file</a><ul><li><a href="#get-your-application-credentials">Get your application credentials</a></li></ul></li><li><a href="#openid-connect-configuration">OpenID Connect configuration</a><ul><li><a href="#warning-make-sure-that-you-have-updated-the-configuration-file-dont-expect-the-solution-to-work-otherwise">Warning: make sure that you have updated the configuration file. Don’t expect the solution to work otherwise.</a></li><li><a href="#register-callbackurl">Register callbackURL</a> - <a href="#before-continuing-please-send-your-callback-urls-to-supportmailtoitbccnosubjectsupport-developer-bcc-so-auth0-can-be-configured-with-your-website">Before continuing, please send your callback URLs to [support](mailto:it@bcc.no?subject=Support Developer BCC) so Auth0 can be configured with your website</a></li></ul></li><li><a href="#add-account-controller">Add Account controller</a><ul><li><a href="#single-signout">Single Signout</a></li></ul></li><li><a href="#force-login-to-enter-the-website">Force login to enter the website</a></li></ul><h1 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting started</h1><p>This tutorial will introduce you to our login solution for ASP.NET Core.</p><h2 id="limitations" tabindex="-1"><a class="header-anchor" href="#limitations" aria-hidden="true">#</a> Limitations</h2><p>This solution has (for now) some limitations that you have to be aware of. Please read them carefully to avoid any bad surprise.</p>',7),u={href:"/_docs/bcc-signon/openid-connect#protect-news-feed-and-calendar",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"userAccountId",-1),h={href:"/_docs/bcc-signon/openid-connect#deprecated-claims",target:"_blank",rel:"noopener noreferrer"},p=n("h2",{id:"read-more",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#read-more","aria-hidden":"true"},"#"),e(" Read More")],-1),b={href:"https://auth0.com/docs/quickstart/webapp/aspnet-core/01-login",target:"_blank",rel:"noopener noreferrer"},m=o(`<br><hr><h1 id="install-nuget-packages" tabindex="-1"><a class="header-anchor" href="#install-nuget-packages" aria-hidden="true">#</a> Install nuget packages</h1><p>We need to install packages for the Cookies and OpenID Connect. To do that, type the following commands in the Package Manager Console.</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>Install-Package Microsoft.AspNetCore.Authentication.Cookies
Install-Package Microsoft.AspNetCore.Authentication.OpenIdConnect
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><br><hr><h1 id="edit-configuration-file" tabindex="-1"><a class="header-anchor" href="#edit-configuration-file" aria-hidden="true">#</a> Edit configuration file</h1><h2 id="get-your-application-credentials" tabindex="-1"><a class="header-anchor" href="#get-your-application-credentials" aria-hidden="true">#</a> Get your application credentials</h2><p>To use the Auth0 solution, you need to get your client credentials If you don’t have them, please contact [support](mailto:it@bcc.no?subject=Support Developer BCC).</p><p>Navigate to your <code>appsettings.json</code> file. Add these parameters</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>&quot;Auth0&quot;: {
    &quot;Domain&quot;: &quot;login.bcc.no&quot;,
    &quot;ClientId&quot;: &quot;YOUR-CLIENT-ID&quot;,
    &quot;ClientSecret&quot;: &quot;YOUR-CLIENT-SECRET&quot;,
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><hr><h1 id="openid-connect-configuration" tabindex="-1"><a class="header-anchor" href="#openid-connect-configuration" aria-hidden="true">#</a> OpenID Connect configuration</h1><h2 id="warning-make-sure-that-you-have-updated-the-configuration-file-don-t-expect-the-solution-to-work-otherwise" tabindex="-1"><a class="header-anchor" href="#warning-make-sure-that-you-have-updated-the-configuration-file-don-t-expect-the-solution-to-work-otherwise" aria-hidden="true">#</a> Warning: make sure that you have updated the <a href="example.com">configuration file</a>. Don’t expect the solution to work otherwise.</h2><p>Navigate to the <code>ConfigureServices </code> method of your Startup class.</p><p>Add this code to the method.</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public void ConfigureServices(IServiceCollection services)
        {
            // Add authentication services
            services.AddAuthentication(options =&gt; {
                options.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            })
            .AddCookie()
            .AddOpenIdConnect(&quot;Auth0&quot;, options =&gt; {
                // Set the authority to your Auth0 domain
                options.Authority = $&quot;https://{Configuration[&quot;Auth0:Domain&quot;]}&quot;;

                // Configure the Auth0 Client ID and Client Secret
                options.ClientId = Configuration[&quot;Auth0:ClientId&quot;];
                options.ClientSecret = Configuration[&quot;Auth0:ClientSecret&quot;];

                // Set response type to code
                options.ResponseType = &quot;code&quot;;


                // Configure the scope, see: https://developer.bcc.no/docs/single-signon/get-information-about-the-user
                options.Scope.Clear();
                options.Scope.Add(&quot;openid&quot;);
                options.Scope.Add(&quot;email&quot;);


                // Set the callback path, so Auth0 will call back to http://localhost:5000/signin-auth0
                // Also ensure that you have added the URL as an Allowed Callback URL in your Auth0 dashboard
                options.CallbackPath = new PathString(&quot;/signin-auth0&quot;);

                // Configure the Claims Issuer to be Auth0
                options.ClaimsIssuer = &quot;Auth0&quot;;

                // Saves tokens to the AuthenticationProperties
                options.SaveTokens = true;

                options.Events = new OpenIdConnectEvents
                {
                    OnRedirectToIdentityProvider = context =&gt;
                    {
                        context.ProtocolMessage.SetParameter(&quot;audience&quot;, &quot;https://widgets.brunstad.org&quot;);
                        return Task.FromResult(0);
                    },
                    // handle the logout redirection
                    OnRedirectToIdentityProviderForSignOut = (context) =&gt;
                    {
                        var logoutUri = $&quot;https://{Configuration[&quot;Auth0:Domain&quot;]}/v2/logout&quot;;
                        context.Response.Redirect(logoutUri);
                        context.HandleResponse();
                        return Task.CompletedTask;
                    }
                };
            });

        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, navigate to the <code>Configure</code> method and add these lines</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseAuthentication();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="register-callbackurl" tabindex="-1"><a class="header-anchor" href="#register-callbackurl" aria-hidden="true">#</a> Register callbackURL</h2><h5 id="before-continuing-please-send-your-callback-urls-to-support-mailto-it-bcc-no-subject-support-developer-bcc-so-auth0-can-be-configured-with-your-website" tabindex="-1"><a class="header-anchor" href="#before-continuing-please-send-your-callback-urls-to-support-mailto-it-bcc-no-subject-support-developer-bcc-so-auth0-can-be-configured-with-your-website" aria-hidden="true">#</a> Before continuing, please send your callback URLs to [support](mailto:it@bcc.no?subject=Support Developer BCC) so Auth0 can be configured with your website</h5><p>Callback URL:: <code>https://your-domain.com/signin-auth0</code> (replace <code>your-domain.com</code> with your website’s domain)</p><br><hr><h1 id="add-account-controller" tabindex="-1"><a class="header-anchor" href="#add-account-controller" aria-hidden="true">#</a> Add Account controller</h1><p>If you don&#39;t have any <code>AccountController</code>, create one in your <code>Controllers</code> folder, using this template:</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;


namespace SampleMvcApp.Controllers
{
    public class AccountController : Controller
    {
        [AllowAnonymous]
        public async Task Login(string returnUrl = &quot;/&quot;)
        {
            await HttpContext.ChallengeAsync(&quot;Auth0&quot;, new AuthenticationProperties() { RedirectUri = returnUrl });
        }

        // This endpoint should not be called directly when using a BCC Widget(e.g. topbar), but rather trough the &quot;singleSignout&quot; page.
        [Authorize]
        public async Task EndSession()
        {
            await HttpContext.SignOutAsync(&quot;Auth0&quot;);
            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);
        }

        [Authorize]
        public ActionResult SignOut()
        {
            HttpContext.Response.Headers.Add(&quot;Content-Security-Policy&quot;, &quot;frame-ancestors https://*.bcc.no&quot;);
            return View();
        }

        [Authorize]
        [HttpGet]
        public async Task AccessToken()
        {
            var accesstoken = await HttpContext.GetTokenAsync(&quot;access_token&quot;);
            return Ok(accesstoken);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="single-signout" tabindex="-1"><a class="header-anchor" href="#single-signout" aria-hidden="true">#</a> Single Signout</h3><p>Please install Single Signout on your application (<a href="example.com">documentation</a>).</p><p>The ‘endsession’ path for this tutorial is <code>/Account/EndSession</code></p><p>The ‘signout’ path for this tutorial is <code>/Account/SignOut</code></p><p>The <code>SignOut</code> view should be implemented as described here: <a href="example.com">Signout of BCC Widgets.</a></p><br><hr><h1 id="force-login-to-enter-the-website" tabindex="-1"><a class="header-anchor" href="#force-login-to-enter-the-website" aria-hidden="true">#</a> Force login to enter the website</h1><p>We can add a global filter to prevent non-logged in users from entering the website.</p><p>To do it, edit the declaration of the Mvc, in the <code>ConfigureServices</code> method.</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>services.AddMvc(options =&gt;
    {
        options.Filters.Add(new AuthorizeFilter(new AuthorizationPolicyBuilder()
            .RequireAuthenticatedUser()
            .Build()));
    })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Don’t forget then to mark your login method with <code>[AllowAnonymous]</code>, like that:</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>[AllowAnonymous]
public async Task Login(string returnUrl = &quot;/&quot;)
{
    await HttpContext.ChallengeAsync(&quot;Auth0&quot;, new AuthenticationProperties() { RedirectUri = returnUrl });
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42);function g(f,A){const i=s("ExternalLinkIcon");return r(),l("div",null,[c,n("ul",null,[n("li",null,[e("The newsfeed link shared with Brunstad Portal should be protected by a "),n("a",u,[e("private URL"),t(i)])]),n("li",null,[e("The "),v,e(" attribute of the old system has been deprecated "),n("a",h,[e("(read more)"),t(i)]),e(".")])]),p,n("p",null,[e("If you want to know more about this solution, you can read "),n("a",b,[e("Auth0’s extended tutorial"),t(i)]),e(".")]),m])}const k=a(d,[["render",g],["__file","asp_net-core.html.vue"]]);export{k as default};
