import{_ as e,o as i,c as n,f as s}from"./app.1ded8a6d.js";const l={},d=s(`<h1 id="protect-uploads-files" tabindex="-1"><a class="header-anchor" href="#protect-uploads-files" aria-hidden="true">#</a> Protect Uploads files</h1><p>We have been notified that uploaded files on WordPress were not protected with BCC Signon, allowing a direct access using the file’s URL. This is true for all WordPress websites, also those protected by WordPress’s login system.</p><p>However, we are aware that this can be an issue for you local church website. Here will be described a way to prevent unprotected access to your uploads; this may be integrated to BCC’s Signon plugin in the future, but we want to get your feedback first to ensure it fits all of your configurations.</p><p><strong>This has been tested on a Linux server running Apache 2.4.18 and WordPress 5.2.3: please contact us if this isn’t working seamlessly for you.</strong></p><ol><li>Add the following file as <code>dl-file.php</code> to your WordPress root folder.</li></ol><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;?php
/*
 * dl-file.php
 *
 * Protect uploaded files with login.
 *
 * @link http://wordpress.stackexchange.com/questions/37144/protect-wordpress-uploads-if-user-is-not-logged-in
 *
 * @author hakre &lt;http://hakre.wordpress.com/&gt;
* @license GPL-3.0+
* @registry SPDX
*/

require_once(&#39;wp-load.php&#39;);
require_once ABSPATH . WPINC . &#39;/formatting.php&#39;;
require_once ABSPATH . WPINC . &#39;/capabilities.php&#39;;
require_once ABSPATH . WPINC . &#39;/user.php&#39;;
require_once ABSPATH . WPINC . &#39;/meta.php&#39;;
require_once ABSPATH . WPINC . &#39;/post.php&#39;;
require_once ABSPATH . WPINC . &#39;/pluggable.php&#39;;
wp_cookie_constants();
ob_end_clean();
ob_end_flush();

is_user_logged_in() ||  auth_redirect();

list($basedir) = array_values(array_intersect_key(wp_upload_dir(), array(&#39;basedir&#39; =&gt; 1)))+array(NULL);

$file =  rtrim($basedir,&#39;/&#39;).&#39;/&#39;.str_replace(&#39;..&#39;, &#39;&#39;, isset($_GET[ &#39;file&#39; ])?$_GET[ &#39;file&#39; ]:&#39;&#39;);

if (!$basedir || !is_file($file)) {
status_header(404);
wp_redirect(home_url());
exit();
}

$mime = wp_check_filetype($file);
if( false === $mime[ &#39;type&#39; ] &amp;&amp; function_exists( &#39;mime_content_type&#39; ) )
$mime[ &#39;type&#39; ] = mime_content_type( $file );

if( $mime[ &#39;type&#39; ] )
$mimetype = $mime[ &#39;type&#39; ];
else
$mimetype = &#39;image/&#39; . substr( $file, strrpos( $file, &#39;.&#39; ) + 1 );

header( &#39;Content-Type: &#39; . $mimetype ); // always send this
if ( false === strpos( $_SERVER[&#39;SERVER_SOFTWARE&#39;], &#39;Microsoft-IIS&#39; ) )
header( &#39;Content-Length: &#39; . filesize( $file ) );

$last_modified = gmdate( &#39;D, d M Y H:i:s&#39;, filemtime( $file ) );
$etag = &#39;&quot;&#39; . md5( $last_modified ) . &#39;&quot;&#39;;
header( &quot;Last-Modified: $last_modified GMT&quot; );
header( &#39;ETag: &#39; . $etag );
header( &#39;Expires: &#39; . gmdate( &#39;D, d M Y H:i:s&#39;, time() + 1800 ) . &#39; GMT&#39; );

// Support for Conditional GET
$client_etag = isset( $_SERVER[&#39;HTTP_IF_NONE_MATCH&#39;] ) ? stripslashes( $_SERVER[&#39;HTTP_IF_NONE_MATCH&#39;] ) : false;

if( ! isset( $_SERVER[&#39;HTTP_IF_MODIFIED_SINCE&#39;] ) )
$_SERVER[&#39;HTTP_IF_MODIFIED_SINCE&#39;] = false;

$client_last_modified = trim( $_SERVER[&#39;HTTP_IF_MODIFIED_SINCE&#39;] );
// If string is empty, return 0. If not, attempt to parse into a timestamp
$client_modified_timestamp = $client_last_modified ? strtotime( $client_last_modified ) : 0;

// Make a timestamp for our most recent modification...
$modified_timestamp = strtotime($last_modified);

if ( ( $client_last_modified &amp;&amp; $client_etag )
? ( ( $client_modified_timestamp &gt;= $modified_timestamp) &amp;&amp; ( $client_etag == $etag ) )
: ( ( $client_modified_timestamp &gt;= $modified_timestamp) || ( $client_etag == $etag ) )
) {
status_header( 304 );
exit;
}

// If we made it this far, just serve the file
readfile( $file );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Append the following lines to your .htaccess</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>RewriteCond %{REQUEST_FILENAME} -s
RewriteRule ^wp-content/uploads/(.*)$ dl-file.php?file=$1 [QSA,L]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>Next: <a href="troubleshooting">Troubleshooting</a></p>`,10),t=[d];function a(r,c){return i(),n("div",null,t)}const m=e(l,[["render",a],["__file","protect-uploads-files.html.vue"]]);export{m as default};
