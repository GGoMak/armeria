(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{"0fve":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return p}));var r,i=a("zLVn"),n=(a("q1tI"),a("7ljp")),o=a("JkCF"),l={},c=(r="ThankYou",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),s={_frontmatter:l},m=o.a;function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)(m,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",{className:"date"},"7th July 2020"),Object(n.b)("h2",{id:"-new-features",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#-new-features","aria-label":" new features permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🌟 New features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"You can now use ",Object(n.b)("a",{parentName:"li",href:"type://ClientRequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientRequestContext.html"},"type://ClientRequestContext")," to build a complex ",Object(n.b)("a",{parentName:"li",href:"type://RetryRule:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryRule.html"},"type://RetryRule")," and\n",Object(n.b)("a",{parentName:"li",href:"type://CircuitBreakerRule:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerRule.html"},"type://CircuitBreakerRule"),". ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2851"},"#2851"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},"RetryRuleWithContent.<RpcResponse>builder()\n                    .onServerErrorStatus()\n                     // Now it's the BiPredicate that takes ctx as well.\n                    .onException((ctx, ex) -> {\n                        RpcRequest request = ctx.rpcRequest();\n                        if (request != null &&\n                            !safeMethods.contains(request.method())) {\n                            return isRetryableException(throwable);\n                        } else {\n                            return false;\n                        }\n                    })\n                    .thenBackoff(backoff);\n"))),Object(n.b)("li",{parentName:"ul"},"You can now run the gRPC server/client stubs generated by ScalaPB with Armeria. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2719"},"#2719"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Please refer to the fully working ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/tree/master/examples/grpc-scala"},"example"),"."))),Object(n.b)("li",{parentName:"ul"},"You can now parse a response trailers from a response body for gRPC-Web using\n",Object(n.b)("a",{parentName:"li",href:"type://GrpcWebUtil#parseTrailers(HttpData)"},"type://GrpcWebUtil#parseTrailers(HttpData)"),". ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2848"},"#2848"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},"Clients.builder(...)\n       .decorator(RetryingClient.newDecorator(\n               RetryRuleWithContent.onResponse(response -> {\n                   return response.aggregate().thenApply(aggregated -> {\n                      HttpHeaders trailers =\n                              GrpcWebUtil.parseTrailers(aggregated.content());\n                      // Retry if the 'grpc-status' is not equal to 0.\n                      return trailers != null &&\n                             trailers.getInt(GrpcHeaderNames.GRPC_STATUS) != 0;\n                  });\n              })))\n      .build(MyGrpcStub.class);\n"))),Object(n.b)("li",{parentName:"ul"},"You can now access the metadata of ",Object(n.b)("a",{parentName:"li",href:"type://HttpFile:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/file/HttpFile.html"},"type://HttpFile")," and ",Object(n.b)("a",{parentName:"li",href:"type://FileService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/file/FileService.html"},"type://FileService")," asynchronously. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1668"},"#1668")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2845"},"#2845"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},"HttpFile httpFile = HttpFile.of(...);\nCompletableFuture<HttpFileAttributes> attrs =\n        httpFile.readAttributes(CommonPools.blockingTaskExecutor());\nCompletableFuture<ResponseHeaders> headers =\n        httpFile.readHeaders(CommonPools.blockingTaskExecutor());\n"))),Object(n.b)("li",{parentName:"ul"},"You can now easily customize ",Object(n.b)("a",{parentName:"li",href:"type://MeterIdPrefixFunction:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/metric/MeterIdPrefixFunction.html"},"type://MeterIdPrefixFunction")," using\n",Object(n.b)("a",{parentName:"li",href:"type://MeterIdPrefixFunction#andThen(MeterIdPrefixFunctionCustomizer):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/metric/MeterIdPrefixFunction.html#andThen(com.linecorp.armeria.common.metric.MeterIdPrefixFunctionCustomizer)"},"type://MeterIdPrefixFunction#andThen(MeterIdPrefixFunctionCustomizer)"),". ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2839"},"#2839"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},'MeterIdPrefixFunction\n        .ofDefault("hoge")\n        .andThen((registry, log, id) -> id.withTags(\n                "grpc-status", log.responseTrailers().get("grpc-status")));\n'))),Object(n.b)("li",{parentName:"ul"},"Both synchronous and asynchronous APIs to select an ",Object(n.b)("a",{parentName:"li",href:"type://Endpoint:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/Endpoint.html"},"type://Endpoint")," are added to\n",Object(n.b)("a",{parentName:"li",href:"type://EndpointSelector:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/endpoint/EndpointSelector.html"},"type://EndpointSelector")," and thus ",Object(n.b)("a",{parentName:"li",href:"type://EndpointGroup:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/endpoint/EndpointGroup.html"},"type://EndpointGroup")," which is a sub-interface. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1910"},"#1910")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2837"},"#2837"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-java"},"ClientRequestContext ctx = ...\nEndpointGroup group = ...\n// synchronous selection!\nEndpoint endpoint = group.selectNow(ctx);\n// asynchronous selection!\nCompletableFuture<Endpoint> future =\n        group.select(ctx, ctx.eventLoop(), 1000 /* timeout */ );\n")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Thanks to this change, you can now avoid the ",Object(n.b)("a",{parentName:"li",href:"type://EmptyEndpointGroupException:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/endpoint/EmptyEndpointGroupException.html"},"type://EmptyEndpointGroupException")," at least\nfor the case where the ",Object(n.b)("a",{parentName:"li",href:"typeplural://Endpoint:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/Endpoint.html"},"typeplural://Endpoint")," disappear temporarily."))),Object(n.b)("li",{parentName:"ul"},"You can now get the snapshot status of circuit breakers from monitoring system. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2841"},"#2841"))),Object(n.b)("h2",{id:"-improvements",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#-improvements","aria-label":" improvements permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"📈 Improvements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"You can now schedule a request timeout in nanoseconds. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2864"},"#2864"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://ServiceRequestContext#setRequestTimeout(TimeoutMode,Duration):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServiceRequestContext.html#setRequestTimeout(com.linecorp.armeria.common.util.TimeoutMode,java.time.Duration)"},"type://ServiceRequestContext#setRequestTimeout(TimeoutMode,Duration)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://ClientRequestContext#setResponseTimeout(TimeoutMode,Duration):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientRequestContext.html#setResponseTimeout(com.linecorp.armeria.common.util.TimeoutMode,java.time.Duration)"},"type://ClientRequestContext#setResponseTimeout(TimeoutMode,Duration)")))),Object(n.b)("li",{parentName:"ul"},"You can now see the error message by ",Object(n.b)("inlineCode",{parentName:"li"},"ResourceLeakDetector")," if the ",Object(n.b)("inlineCode",{parentName:"li"},"DefaultClientFactory")," is not closed\nproperly. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2847"},"#2847")),Object(n.b)("li",{parentName:"ul"},"The initial connection latency is lowered by giving up hopeless HTTP/1.1 connection early when\nHTTP/2 upgrade request fails. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2852"},"#2852"))),Object(n.b)("h2",{id:"️-bug-fixes",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#%EF%B8%8F-bug-fixes","aria-label":"️ bug fixes permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🛠️ Bug fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Armeria server does not convert the ",Object(n.b)("inlineCode",{parentName:"li"},"Host")," header to ",Object(n.b)("inlineCode",{parentName:"li"},":authority")," header anymore. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2846"},"#2846")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2850"},"#2850"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://RequestHeaders#authority():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestHeaders.html#authority()"},"type://RequestHeaders#authority()")," looks into ",Object(n.b)("inlineCode",{parentName:"li"},"Host")," header if ",Object(n.b)("inlineCode",{parentName:"li"},":authority")," header is missing."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://FileService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/file/FileService.html"},"type://FileService")," is not blocked by ",Object(n.b)("inlineCode",{parentName:"li"},"ClassLoader")," lock anymore. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1668"},"#1668")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2845"},"#2845")),Object(n.b)("li",{parentName:"ul"},"You can retry when ",Object(n.b)("a",{parentName:"li",href:"type://DnsTimeoutException:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/DnsTimeoutException.html"},"type://DnsTimeoutException")," is raised using ",Object(n.b)("a",{parentName:"li",href:"type://RetryRule#onUnprocessed():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryRule.html#onUnprocessed()"},"type://RetryRule#onUnprocessed()"),". ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2836"},"#2836")),Object(n.b)("li",{parentName:"ul"},"You no longer see ",Object(n.b)("inlineCode",{parentName:"li"},"Http2Exception: failed to consume a HEADERS frame")," error. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2832"},"#2832")),Object(n.b)("li",{parentName:"ul"},"You no longer see ",Object(n.b)("inlineCode",{parentName:"li"},"You tried to set the content preview twice")," warning unless\nyou really did apply content previewing decorator twice. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2830"},"#2830")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2832"},"#2832")),Object(n.b)("li",{parentName:"ul"},"A non-base ",Object(n.b)("a",{parentName:"li",href:"type://WebClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/WebClient.html"},"type://WebClient")," respects the user defined scheme correctly. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2835"},"#2835")),Object(n.b)("li",{parentName:"ul"},"The specified port when building ",Object(n.b)("a",{parentName:"li",href:"type://EurekaUpdatingListener:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/eureka/EurekaUpdatingListener.html"},"type://EurekaUpdatingListener")," and ",Object(n.b)("a",{parentName:"li",href:"type://ZooKeeperUpdatingListener:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/zookeeper/ZooKeeperUpdatingListener.html"},"type://ZooKeeperUpdatingListener"),"\nis used in the registration information of an Armeria server. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2826"},"#2826"))),Object(n.b)("h2",{id:"️-deprecations",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#%EF%B8%8F-deprecations","aria-label":"️ deprecations permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🏚️ Deprecations"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"All Spring registration beans are deprecated. Use ",Object(n.b)("a",{parentName:"li",href:"type://ArmeriaServerConfigurator:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/spring/ArmeriaServerConfigurator.html"},"type://ArmeriaServerConfigurator")," and\n",Object(n.b)("a",{parentName:"li",href:"type://DocServiceConfigurator:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/spring/DocServiceConfigurator.html"},"type://DocServiceConfigurator")," instead. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2787"},"#2787")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2838"},"#2838"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Deprecated beans: ",Object(n.b)("inlineCode",{parentName:"li"},"HttpServiceRegistrationBean"),", ",Object(n.b)("inlineCode",{parentName:"li"},"AnnotatedServiceRegistrationBean"),",\n",Object(n.b)("inlineCode",{parentName:"li"},"GrpcServiceRegistrationBean")," and ",Object(n.b)("inlineCode",{parentName:"li"},"ThriftServiceRegistrationBean")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"MeterIdPrefixFunctionFactory")," has been deprecated in favor of ",Object(n.b)("a",{parentName:"li",href:"type://RequestLog#serviceName()"},"type://RequestLog#serviceName()"),". ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2780"},"#2780")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2820"},"#2820")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"executor()"),", ",Object(n.b)("inlineCode",{parentName:"li"},"contextAwareExecutor()")," and ",Object(n.b)("inlineCode",{parentName:"li"},"contextAwareEventLoop()")," methods in\n",Object(n.b)("a",{parentName:"li",href:"type://RequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContext.html"},"type://RequestContext")," are deprecated. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2834"},"#2834")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"on*(Predicate)")," methods in the followings classes are deprecated. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2851"},"#2851"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://RetryRule:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryRule.html"},"type://RetryRule")," and ",Object(n.b)("a",{parentName:"li",href:"type://RetryRuleBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryRuleBuilder.html"},"type://RetryRuleBuilder")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://RetryRuleWithContent:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryRuleWithContent.html"},"type://RetryRuleWithContent")," and ",Object(n.b)("a",{parentName:"li",href:"type://RetryRuleWithContentBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/retry/RetryRuleWithContentBuilder.html"},"type://RetryRuleWithContentBuilder")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://CircuitBreakerRule:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerRule.html"},"type://CircuitBreakerRule")," and ",Object(n.b)("a",{parentName:"li",href:"type://CircuitBreakerRuleBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerRuleBuilder.html"},"type://CircuitBreakerRuleBuilder")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://CircuitBreakerRuleWithContent:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerRuleWithContent.html"},"type://CircuitBreakerRuleWithContent")," and ",Object(n.b)("a",{parentName:"li",href:"type://CircuitBreakerRuleWithContentBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/circuitbreaker/CircuitBreakerRuleWithContentBuilder.html"},"type://CircuitBreakerRuleWithContentBuilder")),Object(n.b)("li",{parentName:"ul"},"Use ",Object(n.b)("inlineCode",{parentName:"li"},"on*(BiPredicate)")," methods instead."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"RequestLogBuilder.defer*Content*()")," and ",Object(n.b)("inlineCode",{parentName:"li"},"isDefer*Content*Set()")," have been deprecated in favor of\n",Object(n.b)("inlineCode",{parentName:"li"},"defer(RequestLogProperty)")," and ",Object(n.b)("inlineCode",{parentName:"li"},"isDeferred(RequestLogProperty)"),". ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2832"},"#2832")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"MeterIdPrefixFunction.andThen(BiFunction<MeterRegistry, MeterIdPrefix, MeterIdPrefix>")," is deprecated. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2839"},"#2839")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"UnprocessedRequestException(Throwable)")," constructor is deprecated.\nUse ",Object(n.b)("a",{parentName:"li",href:"type://UnprocessedRequestException#of(Throwable):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/UnprocessedRequestException.html#of(java.lang.Throwable)"},"type://UnprocessedRequestException#of(Throwable)")," instead. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2836"},"#2836"))),Object(n.b)("h2",{id:"️-breaking-changes",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#%EF%B8%8F-breaking-changes","aria-label":"️ breaking changes permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"☢️ Breaking changes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The names of various artifacts are changed. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2676"},"#2676")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2677"},"#2677")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2829"},"#2829")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2843"},"#2843"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"armeria-dropwizard")," is now ",Object(n.b)("inlineCode",{parentName:"li"},"armeria-dropwizard2"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"armeria-jetty")," is now ",Object(n.b)("inlineCode",{parentName:"li"},"armeria-jetty9"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"armeria-rxjava")," is now ",Object(n.b)("inlineCode",{parentName:"li"},"armeria-rxjava3"),".",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"rxjava")," package is renamed to ",Object(n.b)("inlineCode",{parentName:"li"},"rxjava3"),"."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"armeria-spring-boot-actuator-autoconfigure")," is now ",Object(n.b)("inlineCode",{parentName:"li"},"armeria-spring-boot2-actuator-autoconfigure"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"armeria-spring-boot-actuator-starter")," is now ",Object(n.b)("inlineCode",{parentName:"li"},"armeria-spring-boot2-actuator-starter"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"armeria-spring-boot-autoconfigure")," is now ",Object(n.b)("inlineCode",{parentName:"li"},"armeria-spring-boot2-autoconfigure"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"armeria-spring-boot-starter")," is now ",Object(n.b)("inlineCode",{parentName:"li"},"armeria-spring-boot2-starter"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"armeria-spring-boot-webflux-autoconfigure")," is now ",Object(n.b)("inlineCode",{parentName:"li"},"armeria-spring-boot2-webflux-autoconfigure"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"armeria-spring-boot-webflux-starter")," is now ",Object(n.b)("inlineCode",{parentName:"li"},"armeria-spring-boot2-webflux-starter"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"armeria-testing-common")," has been removed."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"armeria-testing-junit4")," is now ",Object(n.b)("inlineCode",{parentName:"li"},"armeria-junit4"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"armeria-testing-junit")," is now ",Object(n.b)("inlineCode",{parentName:"li"},"armeria-junit5"),".",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"junit")," package is renamed to ",Object(n.b)("inlineCode",{parentName:"li"},"junit5"),"."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"armeria-thrift")," is now ",Object(n.b)("inlineCode",{parentName:"li"},"armeria-thrift0.13"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"armeria-tomcat")," is now ",Object(n.b)("inlineCode",{parentName:"li"},"armeria-tomcat9"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"armeria-zookeeper")," is now ",Object(n.b)("inlineCode",{parentName:"li"},"armeria-zookeeper3"),"."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://RequestContext#eventLoop():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContext.html#eventLoop()"},"type://RequestContext#eventLoop()")," now returns ",Object(n.b)("a",{parentName:"li",href:"type://ContextAwareEventLoop:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/ContextAwareEventLoop.html"},"type://ContextAwareEventLoop")," which always set the\n",Object(n.b)("a",{parentName:"li",href:"type://RequestContext:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/RequestContext.html"},"type://RequestContext")," before executing any submitted tasks. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2629"},"#2629")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2834"},"#2834")),Object(n.b)("li",{parentName:"ul"},"The default logging level for successful requests and response has been changed. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2696"},"#2696")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2855"},"#2855"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"INFO")," to ",Object(n.b)("inlineCode",{parentName:"li"},"DEBUG")," for ",Object(n.b)("inlineCode",{parentName:"li"},"Logging{Client,Service}.newDecorator()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"TRACE")," to ",Object(n.b)("inlineCode",{parentName:"li"},"DEBUG")," for ",Object(n.b)("inlineCode",{parentName:"li"},"Logging{Client,Service}Builder")))),Object(n.b)("li",{parentName:"ul"},"The APIs of ",Object(n.b)("a",{parentName:"li",href:"type://HttpFile:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/file/HttpFile.html"},"type://HttpFile")," and ",Object(n.b)("a",{parentName:"li",href:"type://HttpVfs:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/file/HttpVfs.html"},"type://HttpVfs")," have been changed. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1668"},"#1668")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2845"},"#2845")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2861"},"#2861")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://AggregatedHttpFile:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/file/AggregatedHttpFile.html"},"type://AggregatedHttpFile")," does not extend ",Object(n.b)("a",{parentName:"li",href:"type://HttpFile:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/file/HttpFile.html"},"type://HttpFile")," anymore. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2861"},"#2861")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://AbstractHttpFile#headers()"},"type://AbstractHttpFile#headers()")," is now ",Object(n.b)("a",{parentName:"li",href:"type://AbstractHttpFile#additionalHeaders():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/file/AbstractHttpFile.html#additionalHeaders()"},"type://AbstractHttpFile#additionalHeaders()"),". ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2861"},"#2861")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://EndpointSelector:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/endpoint/EndpointSelector.html"},"type://EndpointSelector")," API has been changed. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2837"},"#2837"),"  ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/1910"},"#1910"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"It is not a functional interface anymore."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"select()")," has been renamed to ",Object(n.b)("a",{parentName:"li",href:"type://EndpointSelector#selectNow(ClientRequestContext):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/endpoint/EndpointSelector.html#selectNow(com.linecorp.armeria.client.ClientRequestContext)"},"type://EndpointSelector#selectNow(ClientRequestContext)"),"."),Object(n.b)("li",{parentName:"ul"},"An asynchronous ",Object(n.b)("a",{parentName:"li",href:"type://EndpointSelector#select(ClientRequestContext,ScheduledExecutorService,long):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/endpoint/EndpointSelector.html#select(com.linecorp.armeria.client.ClientRequestContext,java.util.concurrent.ScheduledExecutorService,long)"},"type://EndpointSelector#select(ClientRequestContext,ScheduledExecutorService,long)"),"\nhas been added."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"type://UserClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/UserClient.html"},"type://UserClient")," API has been changed. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2837"},"#2837"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Its constructor requires more parameters."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"execute()")," requires less parameters."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"StreamMessage.drainAll()")," and its variants have been removed. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2782"},"#2782")," ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2827"},"#2827"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"They are only used for unit tests and you can use ",Object(n.b)("inlineCode",{parentName:"li"},"reactor.test.StepVerifier")," instead."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"UnprocessedRequestException(String, Throwable)")," constructor has been removed without replacement. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2836"},"#2836")),Object(n.b)("li",{parentName:"ul"},"Deprecated timeout APIs in ",Object(n.b)("inlineCode",{parentName:"li"},"{Service,Client}RequestContext")," have been removed. ",Object(n.b)("a",{parentName:"li",href:"https://github.com/line/armeria/issues/2864"},"#2864"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"extend{Request,Response}TimeoutMillis(long)")," and ",Object(n.b)("inlineCode",{parentName:"li"},"extend{Request,Response}Timeout(Duration)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"set{Request,Response}TimeoutAfterMillis(long)")," and ",Object(n.b)("inlineCode",{parentName:"li"},"set{Request,Response}TimeoutAfter(Duration)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"set{Request,Response}TimeoutAtMillis(long)")," and ",Object(n.b)("inlineCode",{parentName:"li"},"set{Request,Response}TimeoutAt(Duration)"))))),Object(n.b)("h2",{id:"-dependencies",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#-dependencies","aria-label":" dependencies permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"⛓ Dependencies"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"gRPC-Java 1.30.1 → 1.30.2"),Object(n.b)("li",{parentName:"ul"},"Jackson 2.11.0 → 2.11.1"),Object(n.b)("li",{parentName:"ul"},"Kafka 1.1.1 → 2.5.0"),Object(n.b)("li",{parentName:"ul"},"Micrometer 1.5.1 → 1.5.2"),Object(n.b)("li",{parentName:"ul"},"Reactor 3.3.6 → 3.3.7"),Object(n.b)("li",{parentName:"ul"},"Shaded dependencies",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Caffeine 2.8.4 → 2.8.5"))),Object(n.b)("li",{parentName:"ul"},"Examples:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Dagger 2.28 → 2.28.1"),Object(n.b)("li",{parentName:"ul"},"monix_reactive 3.2.2"),Object(n.b)("li",{parentName:"ul"},"ScalaPB 0.10.6"))),Object(n.b)("li",{parentName:"ul"},"Build:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Checkstyle 8.33 → 8.34"),Object(n.b)("li",{parentName:"ul"},"Eureka 1.9.23 → 1.9.25"),Object(n.b)("li",{parentName:"ul"},"Finagle ServerSets 20.5.0 → 20.6.0"),Object(n.b)("li",{parentName:"ul"},"Gradle 6.5 → 6.5.1"),Object(n.b)("li",{parentName:"ul"},"gRPC-Kotlin 0.1.3 → 0.1.4")))),Object(n.b)("h2",{id:"-thank-you",style:{position:"relative"}},Object(n.b)("a",{parentName:"h2",href:"#-thank-you","aria-label":" thank you permalink",className:"anchor before"},Object(n.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"🙇 Thank you"),Object(n.b)(c,{usernames:["anuraaga","gary-lo","heowc","hexoul","ikhoon","jongmin92","minwoox","okue","tobias-","trustin"],mdxType:"ThankYou"}))}p.isMDXComponent=!0},"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.9.2":"v1.9.2","/release-notes/1.9.1":"v1.9.1","/release-notes/1.9.0":"v1.9.0","/release-notes/1.8.0":"v1.8.0","/release-notes/1.7.2":"v1.7.2","/release-notes/1.7.1":"v1.7.1","/release-notes/1.7.0":"v1.7.0","/release-notes/1.6.0":"v1.6.0","/release-notes/1.5.0":"v1.5.0","/release-notes/1.4.0":"v1.4.0","/release-notes/1.3.0":"v1.3.0","/release-notes/1.2.0":"v1.2.0","/release-notes/1.1.0":"v1.1.0","/release-notes/1.0.0":"v1.0.0","/release-notes/0.99.9":"v0.99.9","/release-notes/0.99.8":"v0.99.8"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,t,a){"use strict";a("tU7J");var r=a("wFql"),i=a("q1tI"),n=a.n(i),o=a("2+3N"),l=a("1lec"),c=a("+ejy"),s=a("+9zj"),m=r.a.Title;t.a=function(e){var t={},a={},r={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":a};Object.entries(o).forEach((function(e){var a=e[0],r=e[1];t[r]=a})),Object.entries(l).forEach((function(e){var t=e[0],r=e[1];a[r]=t}));var i=Object(s.a)(e.location),p=e.version||i.substring(i.lastIndexOf("/")+1);return p.match(/^[0-9]/)||(p=void 0),n.a.createElement(c.a,Object.assign({},e,{candidateMdxNodes:[],index:r,prefix:"release-notes",pageTitle:p?p+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),p?n.a.createElement(m,{id:"release-notes",level:1},n.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},n.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},n.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),p," release notes"):"",e.children)}}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-99-8-mdx-cc6eaa95c39fb9ab259d.js.map