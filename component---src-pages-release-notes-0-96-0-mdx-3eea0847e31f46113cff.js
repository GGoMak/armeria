(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.9.2":"v1.9.2","/release-notes/1.9.1":"v1.9.1","/release-notes/1.9.0":"v1.9.0","/release-notes/1.8.0":"v1.8.0","/release-notes/1.7.2":"v1.7.2","/release-notes/1.7.1":"v1.7.1","/release-notes/1.7.0":"v1.7.0","/release-notes/1.6.0":"v1.6.0","/release-notes/1.5.0":"v1.5.0","/release-notes/1.4.0":"v1.4.0","/release-notes/1.3.0":"v1.3.0","/release-notes/1.2.0":"v1.2.0","/release-notes/1.1.0":"v1.1.0","/release-notes/1.0.0":"v1.0.0","/release-notes/0.99.9":"v0.99.9","/release-notes/0.99.8":"v0.99.8"}')},"1ym9":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return b}));var a,i=n("zLVn"),r=(n("q1tI"),n("7ljp")),c=n("JkCF"),p={},l=(a="ThankYou",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),s={_frontmatter:p},o=c.a;function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(o,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",{className:"date"},"23rd November 2019"),Object(r.b)("h2",{id:"-new-features",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#-new-features","aria-label":" new features permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🌟 New features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The type signature of clients and services has been greatly simplified. Note that this involves various breaking changes unfortunately. See the 'Breaking changes' section for the details. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2239"},"#2239")," ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2254"},"#2254")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},"// Before:\npublic class FooHttpService implements Service<HttpRequest, HttpResponse> { ... }\npublic class FooRpcService implements Service<RpcRequest, RpcResponse> { ... }\npublic class FooHttpClient implements Client<HttpRequest, HttpResponse> { ... }\npublic class FooRpcClient implements Client<RpcRequest, RpcResponse> { ... }\n\nService<HttpRequest, HttpResponse> foo(Service<HttpRequest, HttpResponse> bar) { ... }\n\nFunction<Service<HttpRequest, HttpResponse>,\n         ? extends Service<HttpRequest, HttpResponse>> httpServiceDecorator;\nFunction<Service<RpcRequest, RpcResponse>,\n         ? extends Service<RpcRequest, RpcResponse>> rpcServiceDecorator;\nFunction<Client<HttpRequest, HttpResponse>,\n         ? extends Client<HttpRequest, HttpResponse>> httpClientDecorator;\nFunction<Client<RpcRequest, RpcResponse>,\n         ? extends Client<RpcRequest, RpcResponse>> rpcClientDecorator;\n\n// After:\npublic class FooHttpService implements HttpService { ... }\npublic class FooRpcService implements RpcService { ... }\npublic class FooHttpClient implements HttpClient { ... }\npublic class FooRpcClient implements RpcClient { ... }\n\nHttpService foo(HttpService bar) { ... }\n\nFunction<? super HttpService, ? extends HttpService> httpServiceDecorator;\nFunction<? super RpcService, ? extends RpcService> rpcServiceDecorator;\nFunction<? super HttpClient, ? extends HttpClient> httpClientDecorator;\nFunction<? super RpcClient, ? extends RpcClient> rpcClientDecorator;\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can now specify service-level settings for annotated services, just like other service types. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2180"},"#2180")," ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2222"},"#2222")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},'Server server =\n    Server.builder()\n          .annotatedService().pathPrefix("/api")\n                             .requestTimeoutMillis(5000)\n                             .exceptionHandler((ctx, req, cause) -> ...)\n                             .build(new Object() { ... }))\n          .build();\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"RequestContext")," now has its own ",Object(r.b)("inlineCode",{parentName:"p"},"RequestId"),", which is a 64-bit random integer by default. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2001"},"#2001")," ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2174"},"#2174")," ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2203"},"#2203")," ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2224"},"#2224")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},'Server server =\n    Server.builder()\n          .service("/", (ctx, req) -> {\n              return HttpResponse.of("Request ID: %s", ctx.id().text());\n          })\n          .build();\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can now add a cause to an ",Object(r.b)("inlineCode",{parentName:"p"},"HttpStatusException"),". ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2253"},"#2253")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},"HttpService service = (ctx, req) -> {\n    try (FileInputStream in = new FileInputStream(...)) {\n        ...\n    } catch (FileNotFoundException e) {\n        throw HttpStatusException.of(HttpStatus.NOT_FOUND, e);\n    }\n};\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Armeria server now always has a fallback service which is matched when no routes match a request. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/1625"},"#1625")," ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2255"},"#2255")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"As a result, a route decorator bound at ",Object(r.b)("inlineCode",{parentName:"li"},"prefix:/")," can intercept any requests, even the requests not handled by any services:",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},'// CorsService will intercept any requests,\n// even the ones not handled by any services.\nServer server =\n    Server.builder()\n          .service("/foo", fooService)\n          .service("/bar", barService)\n          .routeDecorator().pathPrefix("/")\n                           .build(CorsService.newDecorator(...))\n          .build();\n'))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can now determine the log level of ",Object(r.b)("inlineCode",{parentName:"p"},"LoggingClient")," and ",Object(r.b)("inlineCode",{parentName:"p"},"LoggingService")," dynamically. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2250"},"#2250")," ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2258"},"#2258")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},"LoggingClient.builder()\n             .requestLogLevel(log -> ...)\n             .responseLogLevel(log -> {\n                 if (log.responseCause() == null ||\n                     log.responseCause() instanceof HarmlessException) {\n                     return LogLevel.INFO;\n                 } else {\n                     return LogLevel.WARN;\n                 }\n             });\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"ClientFactoryOptions")," has been added to allow programmatic access to the ",Object(r.b)("inlineCode",{parentName:"p"},"ClientFactory")," settings. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2230"},"#2230")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},"ClientFactory factory = ...;\nboolean pipelining = factory.options().useHttp1Pipelining();\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can now disable Armeria's Netty-based asynchronous DNS resolver by specifying ",Object(r.b)("inlineCode",{parentName:"p"},"-Dcom.linecorp.armeria.useJdkDnsResolver=true")," JVM option. Use it only when the default resolver does not work. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2261"},"#2261")))),Object(r.b)("h2",{id:"-improvements",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#-improvements","aria-label":" improvements permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"💪 Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Armeria client does not block a request anymore when DNS resolution takes long time. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2017"},"#2017")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2217"},"#2217")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2231"},"#2231")),Object(r.b)("li",{parentName:"ul"},"You do not have to prepend ",Object(r.b)("inlineCode",{parentName:"li"},"none+")," prefix to non-RPC URIs anymore. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2219"},"#2219")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2241"},"#2241"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},'// Before:\nClients.of("none+https://...", ...);\n// After:\nClients.of("https://...", ...);\n')),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"The behavior of ",Object(r.b)("inlineCode",{parentName:"li"},"Scheme.parse()")," and ",Object(r.b)("inlineCode",{parentName:"li"},"tryParse()")," has been improved in the same manner:",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},'// Scheme.parse() now uses SerializationFormat.NONE automatically:\nassert Scheme.parse("http") == Scheme.parse("none+http");\n')))))),Object(r.b)("h2",{id:"️-bug-fixes",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#%EF%B8%8F-bug-fixes","aria-label":"️ bug fixes permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🛠️ Bug fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Armeria Spring auto-configuration now works correctly even when only ",Object(r.b)("inlineCode",{parentName:"li"},"GrpcServiceRegistrationBean"),"s are given. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2234"},"#2234")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"RequestContext")," is not pushed more often than necessary anymore when notifying ",Object(r.b)("inlineCode",{parentName:"li"},"RequestLogListener"),"s. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2227"},"#2227")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"DynamicEndpointGroup")," now handles the case where an endpoint address does not change but only a weight. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2240"},"#2240")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"HttpStatusException")," now respects ",Object(r.b)("inlineCode",{parentName:"li"},"Flags.verboseExceptionSampler()"),". ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2253"},"#2253")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"AccessLogWriter")," does not fail with a ",Object(r.b)("inlineCode",{parentName:"li"},"ClassCastException")," anymore. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2259"},"#2259")),Object(r.b)("li",{parentName:"ul"},"Fixed a bug where a service receives an ",Object(r.b)("inlineCode",{parentName:"li"},"OPTIONS")," request even if the service did not opt-in for ",Object(r.b)("inlineCode",{parentName:"li"},"OPTIONS")," method. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2263"},"#2263"))),Object(r.b)("h2",{id:"️-deprecations",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#%EF%B8%8F-deprecations","aria-label":"️ deprecations permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🏚️ Deprecations"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ClientFactory.DEFAULT")," has been deprecated in favor of ",Object(r.b)("inlineCode",{parentName:"li"},"ClientFactory.ofDefault()"),"."),Object(r.b)("li",{parentName:"ul"},"The getters for host-level settings in ",Object(r.b)("inlineCode",{parentName:"li"},"ServerConfig")," have been deprecated. ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2244"},"#2244")," ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2246"},"#2246"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},'// Before:\nHttpService service = (ctx, req) -> {\n    return HttpResponse.of("maxRequestLength: %d",\n                           ctx.server().maxRequestLength());\n};\n// After:\nHttpService service = (ctx, req) -> {\n    return HttpResponse.of("maxRequestLength: %d",\n                           ctx.virtualHost().maxRequestLength());\n};\n'))),Object(r.b)("li",{parentName:"ul"},"Continuing the migration to static ",Object(r.b)("inlineCode",{parentName:"li"},"builder()")," factory methods, the following classes have switched from constructors to static ",Object(r.b)("inlineCode",{parentName:"li"},"builder()")," methods: ",Object(r.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2221"},"#2221"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ClientCacheControl")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ClientConnectionTimings")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ClientDecoration")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ClientFactory")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ClientOptions")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ClientRequestContext")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"EndpointInfo")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"FieldInfo")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"HttpClient")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LoggingClient")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LoggingService")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"RequestContextCurrentTraceContext")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"RetrofitMeterIdPrefixFunction")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ServerCacheControl")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ServiceRequestContext"))))),Object(r.b)("h2",{id:"️-breaking-changes",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#%EF%B8%8F-breaking-changes","aria-label":"️ breaking changes permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"☢️ Breaking changes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The signatures of ",Object(r.b)("inlineCode",{parentName:"p"},"RequestContext.newDerivedContext()")," have been changed so they always require ",Object(r.b)("inlineCode",{parentName:"p"},"RequestId"),", ",Object(r.b)("inlineCode",{parentName:"p"},"HttpRequest")," and ",Object(r.b)("inlineCode",{parentName:"p"},"RpcRequest")," for less ambiguity. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2209"},"#2209")," ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2224"},"#2224"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"Scheme.parse()")," and ",Object(r.b)("inlineCode",{parentName:"p"},"tryParse()")," do not fail anymore even if the scheme does not start with ",Object(r.b)("inlineCode",{parentName:"p"},"none+"),": ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2219"},"#2219")," ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2241"},"#2241")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},'// Scheme.parse() now uses SerializationFormat.NONE automatically:\nassert Scheme.parse("http") == Scheme.parse("none+http");\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"ClientBuilderParams.uri()")," does not return a URI with ",Object(r.b)("inlineCode",{parentName:"p"},"none+")," prefix anymore. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2219"},"#2219")," ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2241"},"#2241"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"HttpClient")," interface has been renamed to ",Object(r.b)("inlineCode",{parentName:"p"},"WebClient"),". ",Object(r.b)("inlineCode",{parentName:"p"},"HttpClient")," is now a different interface that extends ",Object(r.b)("inlineCode",{parentName:"p"},"Client<HttpRequest, HttpResponse>"),". ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2254"},"#2254")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},'// Doesn\'t work:\nHttpClient client = HttpClient.of("https://www.google.com/");\n// Good:\nWebClient client = WebClient.of("https://www.google.com/");\n'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Services must implement ",Object(r.b)("inlineCode",{parentName:"p"},"HttpService")," or ",Object(r.b)("inlineCode",{parentName:"p"},"RpcService")," and clients must implement ",Object(r.b)("inlineCode",{parentName:"p"},"HttpClient")," or ",Object(r.b)("inlineCode",{parentName:"p"},"RpcClient"),": ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2239"},"#2239")," ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2254"},"#2254")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},"// Before:\npublic class FooHttpService implements Service<HttpRequest, HttpResponse> { ... }\npublic class FooRpcService implements Service<RpcRequest, RpcResponse> { ... }\npublic class FooHttpClient implements Client<HttpRequest, HttpResponse> { ... }\npublic class FooRpcClient implements Client<RpcRequest, RpcResponse> { ... }\n// After:\npublic class FooHttpService implements HttpService { ... }\npublic class FooRpcService implements RpcService { ... }\npublic class FooHttpClient implements HttpClient { ... }\npublic class FooRpcClient implements RpcClient { ... }\n")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You'll have to change any ",Object(r.b)("inlineCode",{parentName:"p"},"Service<...>")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Client<...>")," usages in your code into ",Object(r.b)("inlineCode",{parentName:"p"},"HttpService"),", ",Object(r.b)("inlineCode",{parentName:"p"},"RpcService"),", ",Object(r.b)("inlineCode",{parentName:"p"},"HttpClient")," or ",Object(r.b)("inlineCode",{parentName:"p"},"RpcClient"),", unless you intended to express ",Object(r.b)("em",{parentName:"p"},"both")," HTTP- and RPC- level types."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},"// Before:\nService<HttpRequest, HttpResponse> foo(Service<HttpRequest, HttpResponse> bar) { ... }\n// After:\nHttpService foo(HttpService bar) { ... }\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Similarly, you must use ",Object(r.b)("inlineCode",{parentName:"p"},"SimpleDecoratingHttpClient")," or ",Object(r.b)("inlineCode",{parentName:"p"},"SimpleDecoratingRpcClient")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"SimpleDecoratingClient"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"SimpleDecoratingHttpService")," or ",Object(r.b)("inlineCode",{parentName:"p"},"SimpleDecoratingRpcService")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"SimpleDecoratingService"),"."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},"// Does not work:\nclass MyDecoratorService extends SimpleDecoratingService<HttpRequest, HttpResponse> {\n    MyDecoratorService(Service<HttpRequest, HttpResponse> delegate) {\n        super(delegate);\n    }\n    ...\n}\n// Good:\nclass MyDecoratorService extends SimpleDecoratingHttpService {\n    // Note the constructor parameter change.\n    MyDecoratorService(HttpService delegate) {\n        super(delegate);\n    }\n    ...\n}\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If you implemented your decorator without extending the ",Object(r.b)("inlineCode",{parentName:"p"},"SimpleDecorating{Http,Rpc}Service")," or ",Object(r.b)("inlineCode",{parentName:"p"},"SimpleDecorating{Http,Rpc}Client"),", then you must make sure that it implements ",Object(r.b)("inlineCode",{parentName:"p"},"HttpService"),", ",Object(r.b)("inlineCode",{parentName:"p"},"RpcRequest"),", ",Object(r.b)("inlineCode",{parentName:"p"},"HttpClient")," or ",Object(r.b)("inlineCode",{parentName:"p"},"RpcClient"),"."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},"// Does not work:\nclass MyDecoratorService implements Service<HttpRequest, HttpResponse> {\n\n    final Service<HttpRequest, HttpResponse> delegate;\n\n    MyDecoratorService(Service<HttpRequest, HttpResponse> delegate) {\n        this.delegate = delegate;\n    }\n    ...\n}\n// Good:\nclass MyDecoratorService implements HttpService {\n    // Note the type change.\n    final HttpService delegate;\n    // Note the constructor parameter change.\n    MyDecoratorService(HttpService delegate) {\n        this.delegate = delegate;\n    }\n    ...\n}\n"))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"Service.decorate()")," has been pushed down to ",Object(r.b)("inlineCode",{parentName:"p"},"HttpService")," and ",Object(r.b)("inlineCode",{parentName:"p"},"RpcService"),": ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2239"},"#2239")," ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2254"},"#2254")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},"// Does not work:\nService<HttpRequest, HttpResponse> service = (ctx, req) -> ...;\nservice.decorate(myDecorator); // No such method\n// Good:\nHttpService service (ctx, req) -> ...;\nservice.decorate(myDecorator); // OK!\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The type parameters of decorator ",Object(r.b)("inlineCode",{parentName:"p"},"Function"),"s have been changed. ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2239"},"#2239")," ",Object(r.b)("a",{parentName:"p",href:"https://github.com/line/armeria/issues/2254"},"#2254")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-java"},"// Before:\nFunction<Service<HttpRequest, HttpResponse>,\n         ? extends Service<HttpRequest, HttpResponse>> httpServiceDecorator;\nFunction<Service<RpcRequest, RpcResponse>,\n         ? extends Service<RpcRequest, RpcResponse>> rpcServiceDecorator;\nFunction<Client<HttpRequest, HttpResponse>,\n         ? extends Client<HttpRequest, HttpResponse>> httpClientDecorator;\nFunction<Client<RpcRequest, RpcResponse>,\n         ? extends Client<RpcRequest, RpcResponse>> rpcClientDecorator;\n// After:\nFunction<? super HttpService, ? extends HttpService> httpServiceDecorator;\nFunction<? super RpcService, ? extends RpcService> rpcServiceDecorator;\nFunction<? super HttpClient, ? extends HttpClient> httpClientDecorator;\nFunction<? super RpcClient, ? extends RpcClient> rpcClientDecorator;\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Some types, which could be used at both HTTP- and RPC- level, have been split into two different types. For example:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"DecoratingClientFunction")," has been split into ",Object(r.b)("inlineCode",{parentName:"li"},"DecoratingHttpClientFunction")," and ",Object(r.b)("inlineCode",{parentName:"li"},"DecoratingRpcClientFunction"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"DecoratingServiceFunction")," has been split into ",Object(r.b)("inlineCode",{parentName:"li"},"DecoratingHttpServiceFunction")," and ",Object(r.b)("inlineCode",{parentName:"li"},"DecoratingRpcServiceFunction"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LoggingClient")," has been split into ",Object(r.b)("inlineCode",{parentName:"li"},"LoggingClient")," and ",Object(r.b)("inlineCode",{parentName:"li"},"LoggingRpcClient"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ServiceWithRoutes")," has been split into ",Object(r.b)("inlineCode",{parentName:"li"},"HttpServiceWithRoutes")," and ",Object(r.b)("inlineCode",{parentName:"li"},"RpcServiceWithRoutes"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"TransientService")," has been split into ",Object(r.b)("inlineCode",{parentName:"li"},"TransientHttpService")," and ",Object(r.b)("inlineCode",{parentName:"li"},"TransientRpcService"),"."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The following services are now provided only at HTTP-level. Please let us know if you need an RPC-level version of them."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LoggingService")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"MetricCollectingService")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"StructuredLoggingService")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"KafkaStructuredLoggingService"))))),Object(r.b)("h2",{id:"-dependencies",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#-dependencies","aria-label":" dependencies permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"⛓ Dependencies"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Brave 5.8.0 -> 5.9.0"),Object(r.b)("li",{parentName:"ul"},"gRPC 1.24.1 -> 1.25.0"),Object(r.b)("li",{parentName:"ul"},"Jackson 2.10.0 -> 2.10.1"),Object(r.b)("li",{parentName:"ul"},"Micrometer 1.3.0 -> 1.3.1"),Object(r.b)("li",{parentName:"ul"},"Netty TCNative BoringSSL 2.0.26 -> 2.0.27"),Object(r.b)("li",{parentName:"ul"},"Protobuf 3.9.1 -> 3.10.0"),Object(r.b)("li",{parentName:"ul"},"RxJava 2.2.13 -> 2.2.14"),Object(r.b)("li",{parentName:"ul"},"SLF4J 1.7.28 -> 1.7.29"),Object(r.b)("li",{parentName:"ul"},"Spring Boot 2.1.9 -> 2.1.10")),Object(r.b)("h2",{id:"-thank-you",style:{position:"relative"}},Object(r.b)("a",{parentName:"h2",href:"#-thank-you","aria-label":" thank you permalink",className:"anchor before"},Object(r.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🙇 Thank you"),Object(r.b)(l,{usernames:["anuraaga","delegacy","eunchan-kim","heowc","hirakida","ikhoon","imasahiro","jrhee17","jyblue","matsumana","mauhiz","minwoox","rmohta","sivaalli","snaiper80","Stupremee","trustin","yanghun0070"],mdxType:"ThankYou"}))}b.isMDXComponent=!0},"2+3N":function(e){e.exports=JSON.parse('{"/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,t,n){"use strict";n("tU7J");var a=n("wFql"),i=n("q1tI"),r=n.n(i),c=n("2+3N"),p=n("1lec"),l=n("+ejy"),s=n("+9zj"),o=a.a.Title;t.a=function(e){var t={},n={},a={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":n};Object.entries(c).forEach((function(e){var n=e[0],a=e[1];t[a]=n})),Object.entries(p).forEach((function(e){var t=e[0],a=e[1];n[a]=t}));var i=Object(s.a)(e.location),b=e.version||i.substring(i.lastIndexOf("/")+1);return b.match(/^[0-9]/)||(b=void 0),r.a.createElement(l.a,Object.assign({},e,{candidateMdxNodes:[],index:a,prefix:"release-notes",pageTitle:b?b+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),b?r.a.createElement(o,{id:"release-notes",level:1},r.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},r.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},r.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),b," release notes"):"",e.children)}}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-96-0-mdx-3eea0847e31f46113cff.js.map