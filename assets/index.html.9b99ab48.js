import{_ as r,r as i,o as s,c,a as e,b as a,d as o,f as n}from"./app.1ded8a6d.js";const h={},l=e("h1",{id:"bcc-members-data-access-beta",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#bcc-members-data-access-beta","aria-hidden":"true"},"#"),a(" BCC Members Data Access (BETA)")],-1),d=e("p",null,[e("strong",null,[e("em",null,"NB: Please note that the members API is still in BETA, this means we still might make some changes to the data structure without versioning the API")]),e("br"),e("br"),a(" This documentation is aimed at you as a Developer/Technical Administrator for your organization. The documentation here provides documentation on all the ways possible to integrate with BCC's membership system.")],-1),m={href:"https://members.bcc.no",target:"_blank",rel:"noopener noreferrer"},p={href:"https://members.bcc.no/docs",target:"_blank",rel:"noopener noreferrer"},u=n('<h2 id="menu" tabindex="-1"><a class="header-anchor" href="#menu" aria-hidden="true">#</a> Menu</h2><ul><li><a href="index">Home</a></li><li><a href="api-integration">API integration</a></li><li><a href="webhooks">Webhooks integration</a></li><li><a href="data-structures-and-scopes">Data Structures and Scopes</a></li><li><a href="single-sign-out">Single Sign Out</a></li></ul><h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h2>',3),b=e("li",null,[a("Write to "),e("a",{href:"mailto:it@bcc.no"},"it@bcc.no"),a(' requesting the "Technical Administrator" role')],-1),g={href:"https://members.bcc.no",target:"_blank",rel:"noopener noreferrer"},f={href:"https://members.bcc.no/organisations",target:"_blank",rel:"noopener noreferrer"},_=e("li",null,"You will be able use the scopes that has been approved for your application",-1),y=n('<h1 id="concepts-and-roles" tabindex="-1"><a class="header-anchor" href="#concepts-and-roles" aria-hidden="true">#</a> Concepts and Roles</h1><h3 id="members" tabindex="-1"><a class="header-anchor" href="#members" aria-hidden="true">#</a> Members</h3><p>&quot;Members&quot; is the name for BCC&#39;s membership system. This is where all the members&#39;s data is residing</p><h3 id="technical-admin" tabindex="-1"><a class="header-anchor" href="#technical-admin" aria-hidden="true">#</a> Technical Admin</h3><p>The technical admin is a person that is registered in members that has a role called &quot;Technical Administrator&quot;. This person has access to the system to manage the application for his organization and to do things like applies for scopes etc. <em>(Are you the technical admin for your organization? Write an email to <a href="mailto:it@bcc.no">it@bcc.no</a> to get access for your organization)</em></p><h3 id="organization" tabindex="-1"><a class="header-anchor" href="#organization" aria-hidden="true">#</a> Organization</h3><p>All organizations that has a relationship to BCC, for example because they are dependent on the members data, will be registered in Members as an organization</p><h3 id="application" tabindex="-1"><a class="header-anchor" href="#application" aria-hidden="true">#</a> Application</h3><p>An Organization can have one or more applications registered that are attached to that organization.</p><h3 id="scope" tabindex="-1"><a class="header-anchor" href="#scope" aria-hidden="true">#</a> Scope</h3><p>A scope is a permission for your application for example the <code>members.read_membership</code> scope will give you access to read fields related to the members membership. See <a href="data-structures-and-scopes">Data Structures and Scopes</a></p><h3 id="consent" tabindex="-1"><a class="header-anchor" href="#consent" aria-hidden="true">#</a> Consent</h3><p>A consent is where the end user explicitly approves the scopes your application has access to. For example let&#39;s say an application called <em>X</em> got access to the <code>members.read_membership</code> scope. Now, lets&#39;s say we have a member called <em>Philly Dally</em>, Application X now wants to read the memberships of Philly Dally, but he still won&#39;t be able to read Philly Dally&#39;s membership until Philly Dally has explicitly given him consent to do so.</p>',13);function x(A,w){const t=i("ExternalLinkIcon");return s(),c("div",null,[l,d,e("p",null,[e("strong",null,[a("url: "),e("a",m,[a("https://members.bcc.no"),o(t)])])]),e("p",null,[e("strong",null,[a("swagger: "),e("a",p,[a("https://members.bcc.no/docs"),o(t)])])]),u,e("ol",null,[b,e("li",null,[a("Log into "),e("a",g,[a("https://members.bcc.no"),o(t)]),a(" and configure your application settings")]),e("li",null,[a("In the application settings you can also apply for the scopes you require for your "),e("a",f,[a("organization"),o(t)])]),_]),y])}const v=r(h,[["render",x],["__file","index.html.vue"]]);export{v as default};
