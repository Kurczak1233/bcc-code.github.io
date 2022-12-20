import{_ as i,o as l,c as e,f as a}from"./app.1ded8a6d.js";const t={},n=a('<h1 id="plugin-configuration" tabindex="-1"><a class="header-anchor" href="#plugin-configuration" aria-hidden="true">#</a> Plugin Configuration</h1><p>The settings of BCC Signon are grouped into two panels:</p><ul><li>OpenId Connect Client (OIDC Settings) contains all the settings related to the login of users.</li><li>BCC Signon (BCC Settings) contains all the settings related to BCC’s widgets: newsfeeds, topbar</li></ul><h2 id="openid-connect-client-settings" tabindex="-1"><a class="header-anchor" href="#openid-connect-client-settings" aria-hidden="true">#</a> OpenId Connect Client Settings</h2><p>Most of the fields are pre-filled according to BCC’s configuration.</p><p>However, there are some settings you’ll have to configure:</p><h3 id="login-type" tabindex="-1"><a class="header-anchor" href="#login-type" aria-hidden="true">#</a> Login Type</h3><p>OpenID Connect button on login form – is set by default. Keep it this way while setting up/testing the plugin.</p><p>Auto Login – SSO will redirect automatically the users to Auth0 login page.</p><p><strong>Note</strong>: Activate this only when the plugin is ready to be launched on production.</p><h3 id="client-id-client-secret-key" tabindex="-1"><a class="header-anchor" href="#client-id-client-secret-key" aria-hidden="true">#</a> Client ID &amp; Client Secret Key</h3><p>Fill in your Client ID and Client Secret Key. If you have not received these, please contact support.</p><h3 id="openid-scope" tabindex="-1"><a class="header-anchor" href="#openid-scope" aria-hidden="true">#</a> OpenID Scope</h3><p>Here you can request different scopes. More information is available here.</p><h3 id="enforce-privacy" tabindex="-1"><a class="header-anchor" href="#enforce-privacy" aria-hidden="true">#</a> Enforce Privacy</h3><p>With this setting you can decide whether the website will request authentication or not. In most of the cases this should be set to on and the Unprotected URLs field can be used to skip the privacy for one or more URLs.</p><h3 id="protected-urls-unprotected-urls" tabindex="-1"><a class="header-anchor" href="#protected-urls-unprotected-urls" aria-hidden="true">#</a> Protected URLs / Unprotected URLs</h3><p>This text field allows you to add / skip privacy for defined URLs. Regular expressions can very well be used as well. Example: if you want to add / skip privacy for all the articles which are under the category ‘local’, you would use “/local/”.</p><h3 id="enable-logging" tabindex="-1"><a class="header-anchor" href="#enable-logging" aria-hidden="true">#</a> Enable Logging</h3><p>A logger is available; it’s recommended to only use this for testing purposes since it uses the wp_options table to store the logs.</p><h2 id="bcc-signon-settings" tabindex="-1"><a class="header-anchor" href="#bcc-signon-settings" aria-hidden="true">#</a> BCC Signon Settings</h2><h3 id="bcc-signon-url" tabindex="-1"><a class="header-anchor" href="#bcc-signon-url" aria-hidden="true">#</a> BCC Signon URL</h3><p>This is BCC’s base URL for the authentication domain; this setting is pre-filled, you don’t need to change it.</p><h3 id="enable-private-newsfeed" tabindex="-1"><a class="header-anchor" href="#enable-private-newsfeed" aria-hidden="true">#</a> Enable private newsfeed</h3><p>If you want to integrate your website to BCC’s news feed widget, please enable this setting.</p><p>Otherwise, you can turn it off.</p><h3 id="private-newsfeed-link" tabindex="-1"><a class="header-anchor" href="#private-newsfeed-link" aria-hidden="true">#</a> Private newsfeed link</h3><p>If you have enabled the private newsfeed, the RSS feed will be available at this URL. Please share this URL with BCC IT by contacting <a href="it@bcc.no?subject=Support%Developer%BCC">support</a>.</p><h3 id="enable-topbar" tabindex="-1"><a class="header-anchor" href="#enable-topbar" aria-hidden="true">#</a> Enable TopBar</h3><p>This enables BCC’s new top bar widget, that you already see on this website.</p><p>If you enable this, you can delete the old top bar script tag (See the documentation of the old top bar)</p><h3 id="local-church" tabindex="-1"><a class="header-anchor" href="#local-church" aria-hidden="true">#</a> Local church</h3><p>If you want to identify the users which log in to your website by church, e.g. for displaying specific content or give access to some pages just to members from your local church, find the church name in the list below and type it in the text field on the BCC Login Settings page. If the church you’re coming from is not in the list you can contact <a href="it@bcc.no?subject=Support%Developer%BCC">support</a>.</p><ul><li>Argentina <ul><li>Paso Flores</li><li>Villa Regina</li></ul></li><li>Australia <ul><li>Melbourne</li><li>Sydney</li></ul></li><li>Austria <ul><li>Graz</li><li>Mittewald</li><li>Raumberg</li><li>Wien</li></ul></li><li>Brasil <ul><li>Novo Sarandi</li><li>Para</li></ul></li><li>Cameroon <ul><li>Bafoussam</li><li>Douala</li><li>Yaoundé</li></ul></li><li>Canada <ul><li>Ottawa</li><li>Toronto</li><li>Vancouver</li><li>Winnipeg</li></ul></li><li>Chile <ul><li>Curico</li><li>Valdivia</li></ul></li><li>China <ul><li>Shanghai</li><li>Shenzhen</li><li>Singapore</li></ul></li><li>Congo <ul><li>Congo</li></ul></li><li>Denmark <ul><li>Holstebro</li><li>København</li></ul></li><li>England <ul><li>Didcot</li><li>Huntworth</li></ul></li><li>Finland <ul><li>Kyrkslätt</li><li>Lahti</li></ul></li><li>France <ul><li>Nancy</li><li>Paris</li><li>Steinseltz</li></ul></li><li>Germany <ul><li>Dürrmenz</li><li>Exter</li><li>Fulda</li><li>Hamburg</li><li>Hessenhöfe</li><li>Lilienhof</li><li>Linnenbach</li><li>Maubach</li><li>Waldhausen</li><li>Waltrop</li></ul></li><li>Hong Kong <ul><li>Hong Kong</li></ul></li><li>Hungary <ul><li>Vácduka</li></ul></li><li>India <ul><li>Alwaye</li><li>Bangalore</li><li>Coimbatore</li><li>Goa</li><li>Langtore</li><li>Mumbai</li><li>Pune</li><li>Trivandrum</li></ul></li><li>Italy <ul><li>Catania</li><li>Sardinia</li></ul></li><li>Kenya <ul><li>Kisii</li><li>Kisumu</li><li>Nyakweri</li><li>Rodi</li><li>Kopany</li></ul></li><li>Mexico <ul><li>Leon</li></ul></li><li>Netherlands <ul><li>Flevoland</li><li>Groningen</li><li>Rotterdam</li><li>Schermer</li><li>Terwolde</li><li>Twente</li><li>Utrecht</li><li>Zeeland-Belgie</li></ul></li><li>New Zealand <ul><li>New Zealand</li></ul></li><li>Norway <ul><li>A-lag Brunstad</li><li>Bergen</li><li>Brunstad</li><li>Drammen</li><li>Eiker</li><li>Grenland</li><li>Hallingdal</li><li>Hamar</li><li>Harstad</li><li>Horten</li><li>Hønefoss</li><li>Molde</li><li>Måløy</li><li>Oslo/Follo</li><li>Sandefjord</li><li>Stavanger</li><li>Stord</li><li>Sørlandet</li><li>Tønsberg</li><li>Valdres</li><li>Østfold</li></ul></li><li>Peru <ul><li>Ilo</li></ul></li><li>Poland <ul><li>Malinka</li><li>Wroclaw</li></ul></li><li>Romania <ul><li>Adjud</li><li>Brasov</li><li>Bucharest</li><li>Caragiale</li><li>Crasna</li><li>Giurgiu</li></ul></li><li>Russia <ul><li>Central Russia</li><li>St. Petersburg</li></ul></li><li>South Africa <ul><li>Pretoria</li><li>Vanderbijlpark</li></ul></li><li>Spain <ul><li>Mallorca</li></ul></li><li>Sri Lanka <ul><li>Colombo</li></ul></li><li>Switzerland <ul><li>Schweiz</li></ul></li><li>Turkey <ul><li>Istanbul</li></ul></li><li>Ukraine <ul><li>Beljaevka</li><li>Ozornoe</li><li>Ternopol</li><li>Zakarpattia</li></ul></li><li>United Arab Emirates <ul><li>Dubai</li></ul></li><li>USA <ul><li>Connecticut</li><li>Delaware</li><li>Detroit</li><li>Missoula</li><li>Missouri</li><li>Salem</li><li>Seattle</li><li>Syracuse</li><li>Urbana</li></ul></li><li>(no country) <ul><li>A-lag MOBILT</li></ul></li></ul><hr><p>Next: <a href="customization">Plugin Customization →</a></p>',36),o=[n];function r(s,u){return l(),e("div",null,o)}const d=i(t,[["render",r],["__file","configuration.html.vue"]]);export{d as default};
