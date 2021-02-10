(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{209:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var i=n(2),l=n(6),a=(n(0),n(280)),r={id:"core-blacklist",title:"Blacklist",keywords:["core","blacklist"],description:"Core protocol design - blacklisting."},o={id:"contributors/core-blacklist",isDocsHomePage:!1,title:"Blacklist",description:"Core protocol design - blacklisting.",source:"@site/docs/contributors/core-blacklist.md",permalink:"/docs/contributors/core-blacklist",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/contributors/core-blacklist.md",sidebar:"ContributorsSidebar",previous:{title:"Broadcasting",permalink:"/docs/contributors/core-broadcasting"},next:{title:"Messaging Limits",permalink:"/docs/contributors/core-messaging-limits"}},c=[{value:"Blacklisting Conditions",id:"blacklisting-conditions",children:[]},{value:"Blacklist Checking",id:"blacklist-checking",children:[]},{value:"Blacklist Exemptions",id:"blacklist-exemptions",children:[]},{value:"Blacklist Removal and Clearing",id:"blacklist-removal-and-clearing",children:[]},{value:"Blacklist Enabling",id:"blacklist-enabling",children:[]},{value:"Relaxed Blacklist",id:"relaxed-blacklist",children:[]}],b={rightToc:c};function s(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("hr",null),Object(a.b)("p",null,"Zilliqa has a blacklisting feature implemented in ",Object(a.b)("inlineCode",{parentName:"p"},"libNetwork"),". The idea is to keep track of IP addresses of peers that, for conditions listed below, can potentially disrupt the operation of the node. Once blacklisted, the peer is effectively excluded from further interactions with the node."),Object(a.b)("h2",{id:"blacklisting-conditions"},"Blacklisting Conditions"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Socket write failure (according to ",Object(a.b)("inlineCode",{parentName:"li"},"P2PComm::IsHostHavingNetworkIssue"),")"),Object(a.b)("li",{parentName:"ul"},"Socket connect failure (according to ",Object(a.b)("inlineCode",{parentName:"li"},"P2PComm::IsHostHavingNetworkIssue"),")"),Object(a.b)("li",{parentName:"ul"},"Gossip message from peer exceeds ",Object(a.b)("inlineCode",{parentName:"li"},"MAX_GOSSIP_MSG_SIZE_IN_BYTES")),Object(a.b)("li",{parentName:"ul"},"Bytes read from peer exceeds ",Object(a.b)("inlineCode",{parentName:"li"},"MAX_READ_WATERMARK_IN_BYTES"))),Object(a.b)("h2",{id:"blacklist-checking"},"Blacklist Checking"),Object(a.b)("p",null,"Outgoing"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Lookup::SendMessageToRandomSeedNode")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"P2PComm::SendMessageNoQueue")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"SendJob::SendMessageCore")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"SendJobPeer::DoSend")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"SendJobPeers<T>::DoSend"))),Object(a.b)("p",null,"Incoming"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"P2PComm::AcceptConnectionCallback"))),Object(a.b)("h2",{id:"blacklist-exemptions"},"Blacklist Exemptions"),Object(a.b)("p",null,"Adding exclusion privilege"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"DS guards",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"When ",Object(a.b)("inlineCode",{parentName:"li"},"NEWDSGUARDNETWORKINFO")," is received (new IP)"),Object(a.b)("li",{parentName:"ul"},"Whenever DS committee is updated"))),Object(a.b)("li",{parentName:"ol"},"Lookup nodes",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Every time a message is sent out"))),Object(a.b)("li",{parentName:"ol"},"Manual addition of an IP using ",Object(a.b)("inlineCode",{parentName:"li"},"miner_info.py whitelist_add"))),Object(a.b)("p",null,"Removing exclusion privilege"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"DS guards",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"When ",Object(a.b)("inlineCode",{parentName:"li"},"NEWDSGUARDNETWORKINFO")," is received (old IP)"))),Object(a.b)("li",{parentName:"ol"},"Manual removal of an IP using ",Object(a.b)("inlineCode",{parentName:"li"},"miner_info.py whitelist_remove"))),Object(a.b)("h2",{id:"blacklist-removal-and-clearing"},"Blacklist Removal and Clearing"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Non-lookup nodes remove ",Object(a.b)("inlineCode",{parentName:"li"},"BLACKLIST_NUM_TO_POP")," number of peers from the blacklist at the start of the DS epoch"),Object(a.b)("li",{parentName:"ul"},"Non-lookup nodes also remove all blacklisted seed nodes from the blacklist at the start of the DS epoch"),Object(a.b)("li",{parentName:"ul"},"Lookup nodes clear the entire blacklist upon receiving the DS Block")),Object(a.b)("h2",{id:"blacklist-enabling"},"Blacklist Enabling"),Object(a.b)("p",null,"Blacklist is enabled by default, and is only temporarily disabled when doing node recovery (",Object(a.b)("inlineCode",{parentName:"p"},"RECOVERY_ALL_SYNC"),"). In that situation, the blacklist is re-enabled once the Tx block is processed."),Object(a.b)("h2",{id:"relaxed-blacklist"},"Relaxed Blacklist"),Object(a.b)("p",null,"A peer can become unreachable if it temporarily goes down. In this case, socket connections to that peer would usually return ",Object(a.b)("inlineCode",{parentName:"p"},"EHOSTDOWN")," or ",Object(a.b)("inlineCode",{parentName:"p"},"ECONNREFUSED"),' as the error message. When this occurs, we avoid blacklisting the peer in the "strict" sense as in the previously listed ',Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"#blacklisting-conditions"}),"conditions"),'. Instead, we blacklist the peer in the "relaxed" category.'),Object(a.b)("p",null,"While all incoming and outgoing messages from/to a peer that is strictly blacklisted are blocked, only outgoing messages to the peer are blocked for a peer that is in the relaxed blacklist. This allows the peer to have itself be removed from everyone's blacklist by sending the request for removal once it has come back online. Such a request will be accepted if the peer is found to be in the relaxed blacklist."))}s.isMDXComponent=!0},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var i=n(0),l=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b=l.a.createContext({}),s=function(e){var t=l.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return l.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,m=d["".concat(r,".").concat(u)]||d[u]||p[u]||a;return n?l.a.createElement(m,o(o({ref:t},b),{},{components:n})):l.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var b=2;b<a;b++)r[b]=n[b];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);