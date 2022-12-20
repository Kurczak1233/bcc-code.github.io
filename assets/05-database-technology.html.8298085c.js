import{_ as e,o as i,c as a,f as r}from"./app.1ded8a6d.js";const l={},o=r('<h2 id="there-are-2-types-or-databases-that-are-considered" tabindex="-1"><a class="header-anchor" href="#there-are-2-types-or-databases-that-are-considered" aria-hidden="true">#</a> There are 2 types or databases that are considered:</h2><ol><li>Relational</li><li>Document <ul><li>MongoDB</li><li>Firestore</li><li>CosmosDB</li><li>ArangoDB</li></ul></li></ol><h2 id="considerations" tabindex="-1"><a class="header-anchor" href="#considerations" aria-hidden="true">#</a> Considerations</h2><ol><li>Costs</li><li>Security</li><li>Governance (offboarding of team members)</li><li>Scaling</li><li>Community</li><li>Learning curve</li><li>Redundancy</li><li>Development speed (migrations, containerized)</li><li>Data integrity</li><li>Performance</li><li>Querying features</li></ol><h2 id="database-comparison" tabindex="-1"><a class="header-anchor" href="#database-comparison" aria-hidden="true">#</a> Database Comparison</h2><h3 id="relational" tabindex="-1"><a class="header-anchor" href="#relational" aria-hidden="true">#</a> Relational</h3><h4 id="pros" tabindex="-1"><a class="header-anchor" href="#pros" aria-hidden="true">#</a> Pros</h4><ul><li>Guaranteed data integrity</li><li>Easy to learn and widely used</li><li>Large community</li><li>Full sorting and filter capabilities</li><li>Likely to be more performant for join operations</li></ul><h4 id="cons" tabindex="-1"><a class="header-anchor" href="#cons" aria-hidden="true">#</a> Cons</h4><ul><li>Azure SQL Database is the only mainstream scalable solution</li><li>Time consuming migrations</li></ul><h3 id="document" tabindex="-1"><a class="header-anchor" href="#document" aria-hidden="true">#</a> Document</h3><h4 id="pros-1" tabindex="-1"><a class="header-anchor" href="#pros-1" aria-hidden="true">#</a> Pros</h4><ul><li>Existing experience with MongoDB</li><li>High development speed</li><li>Most support serverless scaling</li><li>Learning curve is not steep</li><li>Likely to be more performant for simple read/write operations</li></ul><h4 id="cons-1" tabindex="-1"><a class="header-anchor" href="#cons-1" aria-hidden="true">#</a> Cons</h4><ul><li>Easily lose data integrity</li><li>Tooling is not standardized (querying, emulating)</li></ul><h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary" aria-hidden="true">#</a> Summary</h2><p>After lining up the considerations for Relational and Document DBs we come to our final candidates:</p><ol><li>Azure SQL Database serverless</li><li>MongoDB (Serverless is in preview and not governed)</li><li>CosmosDB with Mongo API (Not full support of mongo API, weak data integrity)</li><li>Firestore (Weak data integrity, limited querying)</li><li>ArangoDB (Not serverless, small community)</li><li>CockroachDB, PlanetScale (Not mainstream, lacks governance)</li></ol><h1 id="decision" tabindex="-1"><a class="header-anchor" href="#decision" aria-hidden="true">#</a> Decision</h1><ol><li>For the source of truth APIs we&#39;re going to use Azure Serverless SQL Database <ol><li>Mainstream solution</li><li>Fits serverless needs</li><li>Forces good data integrity</li></ol></li><li>For query API we&#39;re suggest going for a document database with strong search and querying capabilities <ol><li>MongoDB looks like a promising option, but we need more research to be sure</li><li>Other options include ArangoDB, Elastic Search</li></ol></li></ol><h1 id="consequences" tabindex="-1"><a class="header-anchor" href="#consequences" aria-hidden="true">#</a> Consequences</h1><ul><li>Slower development, especially when migration is needed</li><li>We need to test scaling performance</li><li>Team needs to get familiar with SQL</li></ul><h1 id="alternatives" tabindex="-1"><a class="header-anchor" href="#alternatives" aria-hidden="true">#</a> Alternatives</h1><p>Document databases where not chosen for the source of truth APIs because;</p><ul><li>they risk losing data integrity</li><li>they often lack serverless capabilities</li><li>sometimes lack community</li></ul><p>CockroachDB / PlanetScale</p><ul><li>Are not mainstream providers</li><li>No big name governance system</li></ul>',27),n=[o];function t(s,d){return i(),a("div",null,n)}const h=e(l,[["render",t],["__file","05-database-technology.html.vue"]]);export{h as default};