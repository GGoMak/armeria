(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"References":{"Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse","server-service-registration"],"Client":["client-http","client-thrift","client-grpc","client-factory","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-structured-logging-kafka","advanced-metrics","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration","advanced-scala","advanced-scalapb","advanced-client-interoperability"]}')},LO0G:function(e,r,t){"use strict";t.r(r),t.d(r,"pageTitle",(function(){return c})),t.d(r,"_frontmatter",(function(){return o})),t.d(r,"default",(function(){return b}));var a=t("zLVn"),i=(t("q1tI"),t("7ljp")),n=t("xCMr"),c="Production checklist",o={},l=function(e){return function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",r)}},p=l("Warning"),s=l("Tip"),m={pageTitle:c,_frontmatter:o},d=n.a;function b(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)(d,Object.assign({},m,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"production-checklist",style:{position:"relative"}},Object(i.b)("a",{parentName:"h1",href:"#production-checklist","aria-label":"production checklist permalink",className:"anchor before"},Object(i.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Production checklist"),Object(i.b)(p,{mdxType:"Warning"},Object(i.b)("p",null,"Note that the advices in this page are not always applicable for every use case and thus should be\napplied with caution. Do not apply the changes you really do not need.")),Object(i.b)("p",null,"You may want to consider the following options before putting your Armeria application into production."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Specify the maximum number of accepted connections. The default is ",Object(i.b)("em",{parentName:"p"},"unbounded"),"."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"import com.linecorp.armeria.server.Server;\nimport com.linecorp.armeria.server.ServerBuilder;\n\nServerBuilder sb = Server.builder();\nsb.maxNumConnections(500);\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Specify an alternative ",Object(i.b)("inlineCode",{parentName:"p"},"blockingTaskExecutor")," based on expected workload if your server has\na service that uses it, such as ",Object(i.b)("a",{parentName:"p",href:"type://TomcatService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/tomcat/TomcatService.html"},"type://TomcatService"),", ",Object(i.b)("a",{parentName:"p",href:"type://JettyService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/jetty/JettyService.html"},"type://JettyService")," and ",Object(i.b)("a",{parentName:"p",href:"type://THttpService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/thrift/THttpService.html"},"type://THttpService")," with\nsynchronous service implementation. The default is a simple ",Object(i.b)("inlineCode",{parentName:"p"},"ScheduledThreadPoolExecutor")," with maximum\n200 threads, provided by ",Object(i.b)("a",{parentName:"p",href:"type://CommonPools:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/CommonPools.html"},"type://CommonPools"),"."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"import com.linecorp.armeria.server.ServerBuilder;\n\nServerBuilder sb = Server.builder();\nsb.blockingTaskExecutor(myScheduledExecutorService);\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Specify the default limits of an HTTP request or response."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"import java.time.Duration;\nimport com.linecorp.armeria.client.ClientBuilder;\nimport com.linecorp.armeria.server.ServerBuilder;\n\n// Server-side\nServerBuilder sb = Server.builder();\nsb.maxRequestLength(1048576); // bytes (default: 10 MiB)\nsb.requestTimeout(Duration.ofSeconds(7)); // (default: 10 seconds)\n\n// Client-side\nClientBuilder cb = Clients.builder(...); // or WebClient.builder(...)\ncb.maxResponseLength(1048576); // bytes (default: 10 MiB)\ncb.responseTimeout(Duration.ofSeconds(10)); // (default: 15 seconds)\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Decorate your services with ",Object(i.b)("a",{parentName:"p",href:"type://ThrottlingService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/throttling/ThrottlingService.html"},"type://ThrottlingService")," which lets you fail the incoming requests based on a\npolicy, such as 'fail if the rate of requests exceed a certain threshold."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},'import com.linecorp.armeria.server.throttling.ThrottlingService;\nimport com.linecorp.armeria.server.throttling.ThrottlingStrategy;\n\nServerBuilder sb = Server.builder();\nsb.service("/my_service", // Allow up to 1000 requests/sec.\n           myService.decorate(ThrottlingService.newDecorator(\n                   ThrottlingStrategy.rateLimiting(1000.0))));\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Decorate your clients with ",Object(i.b)("a",{parentName:"p",href:"type://RetryingClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryingClient.html"},"type://RetryingClient"),". See ",Object(i.b)("a",{parentName:"p",href:"/docs/client-retry#automatic-retry"},"Automatic retry"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Decorate your clients with ",Object(i.b)("a",{parentName:"p",href:"type://CircuitBreakerClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerClient.html"},"type://CircuitBreakerClient"),". See ",Object(i.b)("a",{parentName:"p",href:"/docs/client-circuit-breaker"},"Circuit breaker"),"."))),Object(i.b)(s,{mdxType:"Tip"},Object(i.b)("p",null,"You can use Armeria's ",Object(i.b)("a",{parentName:"p",href:"type://CircuitBreaker:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreaker.html"},"type://CircuitBreaker")," API for non-Armeria clients without circuit breaker support.\nSee ",Object(i.b)("a",{parentName:"p",href:"/docs/client-circuit-breaker#using-circuitbreaker-with-non-armeria-client"},"Using CircuitBreaker with non-Armeria client"),".")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Tune the socket options."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-java"},"import com.linecorp.armeria.client.ClientBuilder;\nimport com.linecorp.armeria.client.ClientFactory;\nimport com.linecorp.armeria.client.ClientFactoryBuilder;\nimport com.linecorp.armeria.server.ServerBuilder;\nimport io.netty.channel.ChannelOption;\n\n// Server-side\nServerBuilder sb = Server.builder();\nsb.channelOption(ChannelOption.SO_BACKLOG, ...);\nsb.channelOption(ChannelOption.SO_REUSEADDR, ...);\nsb.childChannelOption(ChannelOption.SO_SNDBUF, ...);\nsb.childChannelOption(ChannelOption.SO_RCVBUF, ...);\n\n// Client-side\nClientFactoryBuilder cfb = new ClientFactoryBuilder();\ncfb.channelOption(ChannelOption.SO_REUSEADDR, ...);\ncfb.channelOption(ChannelOption.SO_SNDBUF, ...);\ncfb.channelOption(ChannelOption.SO_RCVBUF, ...);\nClientFactory cf = cfb.build();\nClientBuilder cb = Clients.builder(...);\ncb.factory(cf);\n")))))}b.isMDXComponent=!0},xCMr:function(e,r,t){"use strict";var a=t("Wbzz"),i=t("q1tI"),n=t.n(i),c=t("/94A"),o=t("+ejy");r.a=function(e){var r=Object(a.useStaticQuery)("1217743243").allMdx.nodes;return n.a.createElement(o.a,Object.assign({},e,{candidateMdxNodes:r,index:c,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-advanced-production-checklist-mdx-af3398b5f62027088af4.js.map