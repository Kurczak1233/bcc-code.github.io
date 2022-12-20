import{_ as e,o as a,c as n,f as o}from"./app.1ded8a6d.js";const t={},i=o('<h2 id="context" tabindex="-1"><a class="header-anchor" href="#context" aria-hidden="true">#</a> Context</h2><p>There is a need to define how microservice APIs will be secured, deployed and documented and how they will communicate with eachother (internally and externally).</p><h2 id="decision" tabindex="-1"><a class="header-anchor" href="#decision" aria-hidden="true">#</a> Decision</h2><h3 id="auth" tabindex="-1"><a class="header-anchor" href="#auth" aria-hidden="true">#</a> Auth</h3><p>OAuth 2.0 access tokens should be used for course-grained authorization. Reason: wide industry adoption. Zero-trust principle indicates that even internal services should authorize requests. Undecided: whether to use one or multiple audiences. For user-facing APIs one audience would allow a microfrontend approach to development with multiple backends (this could also be acheived using a proxy). For security, different audiences would be more optimal.</p><h3 id="communication" tabindex="-1"><a class="header-anchor" href="#communication" aria-hidden="true">#</a> Communication</h3><p>Mandatory: APIs should at the very least support HTTP and publish an Open API <em>v2</em> specification (swagger). Reason: Widely supported by 3rd party tools, and sufficient to generate clients etc.</p><p>Optional: they may additionally support gRPC endpoints (esp. for internal communication) -- which MAY be achieved using Dapr</p><p>Recommended: APIs should publish business events to a shared message broker (internally) and via webhooks (externally). Ideally, webhooks API can be provided as an infrastructure service. Reason: support asynchronous, highly available and scalable workflows. Simpler to understand/implement than Event streaming.</p><p>To try: use Dapr as an abstraction for the shared message broker (pub/sub)</p><h3 id="documentation" tabindex="-1"><a class="header-anchor" href="#documentation" aria-hidden="true">#</a> Documentation</h3><p>The following needs to be documented for all APIs:</p><ol><li>Endpoints (swagger, gRPC, graphQL etc) including a description of the functionality provided by the endpoint</li><li>Error codes, status codes and Models for all endpoints</li><li>Models for asynchronous messages (Events, Commands, Requests etc)</li><li>Authentication scopes</li></ol><p>Recommended: develop SDKs in the most common languages (c#, node, perhaps GO) which make both the endpoints and models easy to consume.</p><h3 id="deployment" tabindex="-1"><a class="header-anchor" href="#deployment" aria-hidden="true">#</a> Deployment</h3><p>Deployment of services should be highly automated including unit testing. Approval processes may be manual.</p><p>Recommended: services should ideally be containerized and stateless to allow for migration between environments and more importantly horizontal scaling. An exception to this rule could be light weight cloud functions where the cost of reimplementing (if necessary) is low and the benefits of a lightweight approach is high.</p><h2 id="consequences" tabindex="-1"><a class="header-anchor" href="#consequences" aria-hidden="true">#</a> Consequences</h2><h3 id="containers-based-on-dapr" tabindex="-1"><a class="header-anchor" href="#containers-based-on-dapr" aria-hidden="true">#</a> Containers based on Dapr</h3><p>Containers using Dapr to communicate currently need to be run:</p><ol><li>Within the same network as other containers (for direct invocation, though not for pub/sub messaging)</li><li>Strictly speaking need to run on Kubernetes (or a VM) since there is no mature managed dapr environment</li><li>The widest offering of stable Dapr components is currently on the Azure cloud (equivelent GCP offerings are mainly in alpha or beta)</li></ol><h2 id="alternatives" tabindex="-1"><a class="header-anchor" href="#alternatives" aria-hidden="true">#</a> Alternatives</h2><ol><li>Drop use of Dapr, and use Cloud Run to host services</li></ol>',23),s=[i];function r(d,c){return a(),n("div",null,s)}const l=e(t,[["render",r],["__file","02-approach-to-microservice-architecture.html.vue"]]);export{l as default};