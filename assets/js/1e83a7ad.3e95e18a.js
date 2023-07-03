"use strict";(self.webpackChunkarrow_website=self.webpackChunkarrow_website||[]).push([[334],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=i,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return t?a.createElement(k,o(o({ref:n},d),{},{components:t})):a.createElement(k,o({ref:n},d))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},73983:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const r={title:"Domain modeling",sidebar_position:1},o=void 0,l={unversionedId:"learn/design/domain-modeling",id:"learn/design/domain-modeling",title:"Domain modeling",description:"The goal of functional domain modeling is to describe your business domain as accurately as possible to achieve more type-safety, maximize the use of the compiler with our domain and, thus, prevent bugs and reduce unit testing. Additionally, it makes communicating about the domain easier since the domain is the touchpoint with the real world. Kotlin is a good fit for functional domain modeling. It offers us data class, sealed class, enum class, and value class. And we have Arrow, which provides some interesting generic data types such as Either and Ior.",source:"@site/content/docs/learn/design/domain-modeling.md",sourceDirName:"learn/design",slug:"/learn/design/domain-modeling",permalink:"/learn/design/domain-modeling",draft:!1,editUrl:"https://github.com/arrow-kt/arrow-website/edit/main/content/docs/learn/design/domain-modeling.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Domain modeling",sidebar_position:1},sidebar:"learnSidebar",previous:{title:"Design",permalink:"/learn/design/"},next:{title:"Effects and contexts",permalink:"/learn/design/effects-contexts"}},s={},p=[],d={toc:p},m="wrapper";function c(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://www.47deg.com/blog/functional-domain-modeling/"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"This article was originally published in the ",(0,i.kt)("a",{parentName:"mdxAdmonitionTitle",href:"https://www.47deg.com/blog/functional-domain-modeling/"},"47 Degrees blog"),".")),(0,i.kt)("p",null,"The goal of functional domain modeling is to describe your business domain as accurately as possible to achieve more type-safety, maximize the use of the compiler with our domain and, thus, prevent bugs and reduce unit testing. Additionally, it makes communicating about the domain easier since the domain is the touchpoint with the real world. Kotlin is a good fit for functional domain modeling. It offers us ",(0,i.kt)("inlineCode",{parentName:"p"},"data class"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"sealed class"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"enum class"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"value class"),". And we have Arrow, which provides some interesting generic data types such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Either")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Ior"),"."),(0,i.kt)("p",null,"In some codebases, you can find the following primitive type-based implementation of an ",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"data class Event(\n  val id: Long,\n  val title: String,\n  val organizer: String,\n  val description: String,\n  val date: LocalDate\n)\n")),(0,i.kt)("p",null,"The types used here have little or no meaning since ",(0,i.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"organizer"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," all share the same type. This makes our code prone to subtle bugs where we might rely on ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"description"),", and the compiler would not be able to help us. Let's look at an example where things go wrong without the compiler being able to help us."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'Event(\n  0L,\n  "Simon Vergauwen",\n  "In this blogpost we dive into functional DDD...",\n  "Functional Domain Modeling",\n  LocalDate.now()\n)\n')),(0,i.kt)("p",null,"Here, we have mixed up ",(0,i.kt)("inlineCode",{parentName:"p"},"organizer"),"and ",(0,i.kt)("inlineCode",{parentName:"p"},"description"),", but the compiler is happy and constructs the ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," object. There are more cases where you can fall into this trap; for example, when destructuring."),(0,i.kt)("p",null,"So how do we prevent this from happening, or how can we improve our domain model to be better typed? We use ",(0,i.kt)("inlineCode",{parentName:"p"},"value class"),", Kotlin's feature to disguise an already-existing type under a new name. Doing this causes no additional overhead since ",(0,i.kt)("inlineCode",{parentName:"p"},"value class")," is erased at runtime. At the moment of writing, every appearance of ",(0,i.kt)("inlineCode",{parentName:"p"},"value class")," requires a corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"@JvmInline")," annotation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@JvmInline value class EventId(val value: Long)\n@JvmInline value class Organizer(val value: String)\n@JvmInline value class Title(val value: String)\n@JvmInline value class Description(val value: String)\n\ndata class Event(\n  val id: EventId,\n  val title: Title,\n  val organizer: Organizer,\n  val description: Description,\n  val date: LocalDate\n)\n")),(0,i.kt)("p",null,"If we go back to our previous example, the compiler now fails to compile since we pass ",(0,i.kt)("inlineCode",{parentName:"p"},"Organizer ")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"Title")," is expected, ",(0,i.kt)("inlineCode",{parentName:"p"},"Description")," where ",(0,i.kt)("inlineCode",{parentName:"p"},"Organizer")," is expected, and so on."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'Event(\n  EventId(0L),\n  Organizer("Simon Vergauwen"),\n  Description("In this blogpost we dive into functional DDD..."),\n  Title("Functional Domain Modeling"),\n  LocalDate.now()\n)\n')),(0,i.kt)("p",null,"In functional programming, this type of data composition is also known as a ",(0,i.kt)("strong",{parentName:"p"},"product type")," or a ",(0,i.kt)("strong",{parentName:"p"},"record"),", which models an ",(0,i.kt)("em",{parentName:"p"},"and")," relationship.\nSo we can say that an ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," exists out of an ",(0,i.kt)("inlineCode",{parentName:"p"},"EventId")," ",(0,i.kt)("em",{parentName:"p"},"and")," a ",(0,i.kt)("inlineCode",{parentName:"p"},"Title")," ",(0,i.kt)("em",{parentName:"p"},"and")," an ",(0,i.kt)("inlineCode",{parentName:"p"},"Organizer")," ",(0,i.kt)("em",{parentName:"p"},"and")," a ",(0,i.kt)("inlineCode",{parentName:"p"},"Description")," ",(0,i.kt)("em",{parentName:"p"},"and")," a ",(0,i.kt)("inlineCode",{parentName:"p"},"LocalDate"),", which tells us much more than an ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," that exists out of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Long")," ",(0,i.kt)("em",{parentName:"p"},"and")," a ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," ",(0,i.kt)("em",{parentName:"p"},"and")," a ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," ",(0,i.kt)("em",{parentName:"p"},"and")," a ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," ",(0,i.kt)("em",{parentName:"p"},"and")," a ",(0,i.kt)("inlineCode",{parentName:"p"},"LocalDate"),"."),(0,i.kt)("p",null,"Let's say we must evolve our ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," model to keep track of any age restrictions. We could model this with ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," again, but that would only worsen our original problem. So let's say we follow the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Motion_Picture_Association_film_rating_system"},"MPAA film ratings"),", which is an enumeration of 5 different cases. Since we're clearly talking about a ",(0,i.kt)("em",{parentName:"p"},"fixed set")," of cases, or enumeration, we use an ",(0,i.kt)("inlineCode",{parentName:"p"},"enum class"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'enum class AgeRestriction(val description: String) {\n  General("All ages admitted. Nothing that would offend parents for viewing by children."),\n  PG("Some material may not be suitable for children. Parents urged to give \\"parental guidance\\""),\n  PG13("Some material may be inappropriate for children under 13. Parents are urged to be cautious."),\n  Restricted("Under 17 requires accompanying parent or adult guardian. Contains some adult material."),\n  NC17("No One 17 and Under Admitted. Clearly adult.")\n}\n')),(0,i.kt)("p",null,"Using an ",(0,i.kt)("inlineCode",{parentName:"p"},"enum class")," is much more powerful than ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," for reasons beyond the problems we already explained above. A ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," has infinite possible values, but now we only have five possible ones.\nSo it's much easier to reason about ",(0,i.kt)("inlineCode",{parentName:"p"},"AgeRestriction")," than to reason and work with ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),"."),(0,i.kt)("p",null,"In functional programming, this type of data composition is also known as a ",(0,i.kt)("strong",{parentName:"p"},"sum type"),", which models an ",(0,i.kt)("em",{parentName:"p"},"or")," relationship.\nSo we can say that an ",(0,i.kt)("inlineCode",{parentName:"p"},"AgeRestriction "),"is either ",(0,i.kt)("inlineCode",{parentName:"p"},"General")," ",(0,i.kt)("em",{parentName:"p"},"or")," ",(0,i.kt)("inlineCode",{parentName:"p"},"PG")," ",(0,i.kt)("em",{parentName:"p"},"or")," ",(0,i.kt)("inlineCode",{parentName:"p"},"PG13")," ",(0,i.kt)("em",{parentName:"p"},"or")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Restricted")," ",(0,i.kt)("em",{parentName:"p"},"or")," ",(0,i.kt)("inlineCode",{parentName:"p"},"NC17"),".\nThis tells us much more than if it was just a ",(0,i.kt)("inlineCode",{parentName:"p"},"String"),". A ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," would have infinite values, while ",(0,i.kt)("inlineCode",{parentName:"p"},"AgeRestriction")," modeled as an ",(0,i.kt)("inlineCode",{parentName:"p"},"enum class")," only has five different values.\nSo using sum types can drastically reduce the complexity of our types."),(0,i.kt)("p",null,"With online events on the rise, we have a different kind of event that doesn't occur at an ",(0,i.kt)("inlineCode",{parentName:"p"},"Address"),", but rather at a certain ",(0,i.kt)("inlineCode",{parentName:"p"},"Url"),". So, depending on what kind of ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," it is, the data inside will be slightly different. Naively we could implement this as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@JvmInline value class Url(val value: String)\n\n@JvmInline value  class City(val value: String)\n@JvmInline value  class Street(val value: String)\ndata class Address(val city: City, val street: Street)\n\ndata class Event(\n  val id: EventId,\n  val title: Title,\n  val organizer: Organizer,\n  val description: Description,\n  val date: LocalDate,\n  val ageRestriction: AgeRestriction,\n  val isOnline: Boolean,\n  val url: Url?,\n  val address: Address?\n)\n")),(0,i.kt)("p",null,"This is a common encoding, but it can be pretty problematic. If ",(0,i.kt)("inlineCode",{parentName:"p"},"isOnline")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," will be non-",(0,i.kt)("inlineCode",{parentName:"p"},"null")," and vice-versa for ",(0,i.kt)("inlineCode",{parentName:"p"},"address"),". However, after checking ",(0,i.kt)("inlineCode",{parentName:"p"},"isOnline"),", both ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"address")," is still null, so we'll end up with code like this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun printLocation(event: Event): Unit =\n  if(event.isOnline) {\n    event.url?.value?.let(::println)\n  } else {\n    event.address?.let(::println)\n  }\n")),(0,i.kt)("p",null,"But, even worse, we can also easily break the intended contract, like in the example below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'Event(\n    Id(0L),\n    Title("Functional Domain Modeling"),\n    Organizer("47 Degrees"),\n    Description("Building software with functional DDD..."),\n    LocalDate.now(),\n    AgeRestriction.General,\n    true,\n    null,\n    null\n)\n')),(0,i.kt)("p",null,"The compiler is happy with the below definition, even though our intended contract said that, if it's ",(0,i.kt)("inlineCode",{parentName:"p"},"isOnline"),", then ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," would be non-",(0,i.kt)("inlineCode",{parentName:"p"},"null"),".\nWe can prevent this issue by introducing a ",(0,i.kt)("inlineCode",{parentName:"p"},"sealed class")," to combine ",(0,i.kt)("inlineCode",{parentName:"p"},"Event.Online")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Event.AtAddress")," in a typed way."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"sealed class Event {\n  abstract val id: EventId\n  abstract val title: Title\n  abstract val organizer: Organizer\n  abstract val description: Description\n  abstract val ageRestriction: AgeRestriction\n  abstract val date: LocalDate\n\n  data class Online(\n    override val id: EventId,\n    override val title: Title,\n    override val organizer: Organizer,\n    override val description: Description,\n    override val ageRestriction: AgeRestriction,\n    override val date: LocalDate,\n    val url: Url\n  ) : Event()\n\n  data class AtAddress(\n    override val id: EventId,\n    override val title: Title,\n    override val organizer: Organizer,\n    override val description: Description,\n    override val ageRestriction: AgeRestriction,\n    override val date: LocalDate,\n    val address: Address\n  ) : Event()\n}\n")),(0,i.kt)("p",null,"This solves our previous issue, where we can instantiate an online ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," without an ",(0,i.kt)("inlineCode",{parentName:"p"},"Url"),", and offers a much nicer way of working with the data. Instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"if(event.isOnline)"),", we can now use an exhaustive ",(0,i.kt)("inlineCode",{parentName:"p"},"when")," to pattern match on ",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),", and due to Kotlin's smart casting, we can safely access ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," in the case that it's ",(0,i.kt)("inlineCode",{parentName:"p"},"Event.Online"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'fun printLocation(event: Event): Unit =\n  when(event) {\n    is Online -> println(event.url.value)\n    is AtAddress -> println("${event.address.city}: ${event.address.street}")\n  }\n')),(0,i.kt)("p",null,"This type of data composition is also known as a ",(0,i.kt)("strong",{parentName:"p"},"sum type"),", which models an ",(0,i.kt)("em",{parentName:"p"},"or")," relationship, but ",(0,i.kt)("inlineCode",{parentName:"p"},"sealed class")," offers us more powerful capabilities than ",(0,i.kt)("inlineCode",{parentName:"p"},"enum class"),".\nA ",(0,i.kt)("inlineCode",{parentName:"p"},"sealed class")," allows ",(0,i.kt)("em",{parentName:"p"},"cases")," to exist out of ",(0,i.kt)("inlineCode",{parentName:"p"},"object"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"data class"),", or even another ",(0,i.kt)("inlineCode",{parentName:"p"},"sealed class"),". An ",(0,i.kt)("inlineCode",{parentName:"p"},"enum class")," cannot extend another class, so it cannot be a ",(0,i.kt)("em",{parentName:"p"},"case")," of a ",(0,i.kt)("inlineCode",{parentName:"p"},"sealed class"),".\nHere, our ",(0,i.kt)("inlineCode",{parentName:"p"},"sealed class")," exists out of 2 ",(0,i.kt)("em",{parentName:"p"},"cases"),", an ",(0,i.kt)("inlineCode",{parentName:"p"},"Online")," ",(0,i.kt)("em",{parentName:"p"},"or")," ",(0,i.kt)("inlineCode",{parentName:"p"},"AtAddress")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"Online")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"AtAddress")," are ",(0,i.kt)("strong",{parentName:"p"},"product types")," of several other types.\nA rule of thumb in Kotlin is to use an ",(0,i.kt)("inlineCode",{parentName:"p"},"enum class")," when the ",(0,i.kt)("em",{parentName:"p"},"cases")," don't contain any data or, in other words, if all ",(0,i.kt)("em",{parentName:"p"},"cases")," can be modeled as ",(0,i.kt)("em",{parentName:"p"},"object"),"."),(0,i.kt)("p",null,"As we've already seen in the examples above, modeling your domain precisely has many benefits. It can eliminate specific bugs, such as instantiating data incorrectly. It makes our code/model easier to reason about by eliminating invalid values, and it can improve code relying on our models."),(0,i.kt)("p",null,"Let's look at how we can use Arrow's data types to clarify our code's domain problems further. Our program has some ",(0,i.kt)("inlineCode",{parentName:"p"},"EventService")," that can fetch an upcoming ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," based on an ",(0,i.kt)("inlineCode",{parentName:"p"},"EventId"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface EventService {\n  suspend fun fetchUpcomingEvent(id: EventId): Event\n}\n")),(0,i.kt)("p",null,"What is completely missing from our ",(0,i.kt)("inlineCode",{parentName:"p"},"EventService")," is the different kinds of error scenarios we could encounter. It's only modeled through ",(0,i.kt)("inlineCode",{parentName:"p"},"Throwable")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"suspend"),". So if we'd want to model the error domain explicitly, we could use any of the techniques we've already seen above."),(0,i.kt)("p",null,"Here, we model 2 different cases:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"An event is not found."),(0,i.kt)("li",{parentName:"ol"},"An event is no longer upcoming but has already happened.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"sealed class Error {\n  data class EventNotFound(val id: EventId): Error()\n  data class EventPassed(val event: Event): Error()\n}\n")),(0,i.kt)("p",null,"We can compose these separate domains, ",(0,i.kt)("inlineCode",{parentName:"p"},"Error")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),", using ",(0,i.kt)("inlineCode",{parentName:"p"},"Either")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"Arrow Core"),". This allows us to model an ",(0,i.kt)("em",{parentName:"p"},"or")," relationship, meaning that ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchUpcomingEvent")," ",(0,i.kt)("em",{parentName:"p"},"either")," returns an ",(0,i.kt)("inlineCode",{parentName:"p"},"Error")," ",(0,i.kt)("em",{parentName:"p"},"or")," an ",(0,i.kt)("inlineCode",{parentName:"p"},"Event"),", but never both. So ",(0,i.kt)("inlineCode",{parentName:"p"},"Either")," is a ",(0,i.kt)("strong",{parentName:"p"},"generic")," sum type, which allows us to generically compose two separate domains with each other in an ",(0,i.kt)("em",{parentName:"p"},"or")," relationship."),(0,i.kt)("p",null,"So, if we update our ",(0,i.kt)("inlineCode",{parentName:"p"},"EventService"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface EventService {\n  suspend fun fetchUpcomingEvent(id: EventId): Either<Error, Event>\n}\n")),(0,i.kt)("p",null,"Since ",(0,i.kt)("inlineCode",{parentName:"p"},"Either")," is defined as a ",(0,i.kt)("inlineCode",{parentName:"p"},"sealed class")," in ",(0,i.kt)("a",{parentName:"p",href:"https://apidocs.arrow-kt.io/arrow-core/index.html"},"Arrow Core"),", we can use the same technique we used above with ",(0,i.kt)("inlineCode",{parentName:"p"},"when")," to extract the ",(0,i.kt)("inlineCode",{parentName:"p"},"Error")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Event")," in a safe way."),(0,i.kt)("p",null,"In this article, we've seen how we can improve our domain by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Eliminating primitive types in our domain definition and using ",(0,i.kt)("inlineCode",{parentName:"li"},"value class")," to prevent runtime overhead."),(0,i.kt)("li",{parentName:"ul"},"Using ",(0,i.kt)("inlineCode",{parentName:"li"},"enum class")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"sealed class")," to model disjunctions in our domain, such as certain data being available depending on the type of ",(0,i.kt)("inlineCode",{parentName:"li"},"Event"),"."),(0,i.kt)("li",{parentName:"ul"},"Utilizing Arrow's ",(0,i.kt)("inlineCode",{parentName:"li"},"Either")," to compose two different domains with an ",(0,i.kt)("em",{parentName:"li"},"or")," relationship.")))}c.isMDXComponent=!0}}]);