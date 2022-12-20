import{_ as e,o as a,c as i,f as r}from"./app.1ded8a6d.js";const o={},n=r('<h1 id="context" tabindex="-1"><a class="header-anchor" href="#context" aria-hidden="true">#</a> Context</h1><p>After deciding the API model, we need to agree on implementation details. This document is focusing on the language selection for the core APIs (person API, org API, Affilitaions API, profile API)</p><h2 id="considerations" tabindex="-1"><a class="header-anchor" href="#considerations" aria-hidden="true">#</a> Considerations</h2><ol><li>Type validation</li><li>Documentation API</li><li>Code maintenance/readability</li><li>Language popularity (libraries, community)</li><li>Testing</li><li>gRPC support</li></ol><h2 id="possible-languages" tabindex="-1"><a class="header-anchor" href="#possible-languages" aria-hidden="true">#</a> Possible languages</h2><p>We shouldn&#39;t be introducing any new languages to BCC IT so we&#39;re going to choose from 3 that are already used</p><ol><li>Node js</li><li>C#</li><li>Golang</li></ol><h2 id="language-comparison" tabindex="-1"><a class="header-anchor" href="#language-comparison" aria-hidden="true">#</a> Language comparison</h2><h3 id="node" tabindex="-1"><a class="header-anchor" href="#node" aria-hidden="true">#</a> Node</h3><h4 id="pros" tabindex="-1"><a class="header-anchor" href="#pros" aria-hidden="true">#</a> Pros</h4><ul><li>The team is familiar with it</li><li>The most used language with most developers</li><li>Language is easy to learn and understand</li><li>Rich community with libraries allowing for testing, debugging, hot reloads</li><li>Same language as in the frontend, so it allows for code sharing</li></ul><h4 id="cons" tabindex="-1"><a class="header-anchor" href="#cons" aria-hidden="true">#</a> Cons</h4><ul><li>Higher latencies for API requests</li><li>Loosely typed</li><li>Stack traces are useless in async functions</li><li>NPM packages are often compromised (bad for security)</li></ul><h4 id="remarks" tabindex="-1"><a class="header-anchor" href="#remarks" aria-hidden="true">#</a> Remarks</h4><ul><li>It is possible to generate documentation and input validators from Typescript definitions</li></ul><h3 id="c" tabindex="-1"><a class="header-anchor" href="#c" aria-hidden="true">#</a> C#</h3><h4 id="pros-1" tabindex="-1"><a class="header-anchor" href="#pros-1" aria-hidden="true">#</a> Pros</h4><ul><li>Strongly typed</li><li>Input validation and documentation out of the box</li><li>Solid stack traces</li><li>Official packages provide good security (entity framework)</li></ul><h4 id="cons-1" tabindex="-1"><a class="header-anchor" href="#cons-1" aria-hidden="true">#</a> Cons</h4><ul><li>A lot of boilerplate</li><li>Steeper learning code</li><li>Not that well supported on VS Code</li><li>More difficult to dockerize</li></ul><h4 id="remarks-1" tabindex="-1"><a class="header-anchor" href="#remarks-1" aria-hidden="true">#</a> Remarks</h4><ul><li>Team has minimal experience with the language</li></ul><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h3><h4 id="pros-2" tabindex="-1"><a class="header-anchor" href="#pros-2" aria-hidden="true">#</a> Pros</h4><ul><li>Strongly typed</li><li>Compiles to binary</li><li>Good testing framework</li><li>Easy to dockerize</li><li>Cross-platform support</li><li>Best performance</li></ul><h4 id="cons-2" tabindex="-1"><a class="header-anchor" href="#cons-2" aria-hidden="true">#</a> Cons</h4><ul><li>No experience in the team</li></ul><h4 id="remark" tabindex="-1"><a class="header-anchor" href="#remark" aria-hidden="true">#</a> Remark</h4><ul><li>Media is satisfied with the language</li></ul><h1 id="decision" tabindex="-1"><a class="header-anchor" href="#decision" aria-hidden="true">#</a> Decision</h1><p>Because of insufficient experience with Go and C# we cannot make a decision 100% certainly, but based on research we feel like go is more likely to be the right choice, so we&#39;re going to implement the first API with go. If the results are not satisfactory then we&#39;re going to re-evaluate</p><h1 id="consequences" tabindex="-1"><a class="header-anchor" href="#consequences" aria-hidden="true">#</a> Consequences</h1><ul><li>We need to learn a new language which is going to take some time and effort.</li></ul><h1 id="alternatives" tabindex="-1"><a class="header-anchor" href="#alternatives" aria-hidden="true">#</a> Alternatives</h1><ul><li>Node: We want to avoid the mess of loosely type language causing data integrity issues</li><li>C#: Also a good alternative, but with our current knowledge it&#39;s better to go with Go</li></ul>',35),t=[n];function l(s,d){return a(),i("div",null,t)}const c=e(o,[["render",l],["__file","04-language-for-core-apis.html.vue"]]);export{c as default};