(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),i=n(6),o=(n(0),n(280)),r={id:"rosetta-setting-up-no-seed-node",title:"Setting up Zilliqa Rosetta connecting to public API endpoint",keywords:["rosetta","middleware","exchanges","zilliqa","rosetta","setup","public","api","endpoint","standalone"],description:"Setting up Zilliqa Rosetta connecting to public API endpoint"},l={id:"exchanges/rosetta-setting-up-no-seed-node",isDocsHomePage:!1,title:"Setting up Zilliqa Rosetta connecting to public API endpoint",description:"Setting up Zilliqa Rosetta connecting to public API endpoint",source:"@site/docs/exchanges/rosetta-setting-up-no-seed-node.md",permalink:"/docs/exchanges/rosetta-setting-up-no-seed-node",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/exchanges/rosetta-setting-up-no-seed-node.md",sidebar:"ExchangesSidebar",previous:{title:"Setting up Zilliqa Rosetta with Seed node",permalink:"/docs/exchanges/rosetta-setting-up-seed-node"},next:{title:"List",permalink:"/docs/exchanges/rosetta-data-network-list"}},c=[{value:"Setup",id:"setup",children:[{value:"Step 1: Download <code>Zilliqa-rosetta</code> latest release from https://github.com/Zilliqa/zilliqa-rosetta/releases.",id:"step-1-download-zilliqa-rosetta-latest-release-from-httpsgithubcomzilliqazilliqa-rosettareleases",children:[]},{value:"Step 2: Build <code>Zilliqa-rosetta standalone</code> Docker image",id:"step-2-build-zilliqa-rosetta-standalone-docker-image",children:[]},{value:"Step 3: Configuring <code>Zilliqa-rosetta</code> (optional)",id:"step-3-configuring-zilliqa-rosetta-optional",children:[]},{value:"Step 4: Running <code>Zilliqa-rosetta</code>",id:"step-4-running-zilliqa-rosetta",children:[]}]},{value:"Maintainance",id:"maintainance",children:[{value:"Restarting Zilliqa Rosetta",id:"restarting-zilliqa-rosetta",children:[]}]}],s={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("hr",null),Object(o.b)("p",null,"Zilliqa rosetta standalone provide the option of connecting to public seed node service such ",Object(o.b)("inlineCode",{parentName:"p"},"api.zilliqa.com")," and ",Object(o.b)("inlineCode",{parentName:"p"},"dev-api.zilliqa.com")," instead of running seed node on your end. "),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("h3",{id:"step-1-download-zilliqa-rosetta-latest-release-from-httpsgithubcomzilliqazilliqa-rosettareleases"},"Step 1: Download ",Object(o.b)("inlineCode",{parentName:"h3"},"Zilliqa-rosetta")," latest release from ",Object(o.b)("a",Object(a.a)({parentName:"h3"},{href:"https://github.com/Zilliqa/zilliqa-rosetta/releases"}),"https://github.com/Zilliqa/zilliqa-rosetta/releases"),"."),Object(o.b)("h3",{id:"step-2-build-zilliqa-rosetta-standalone-docker-image"},"Step 2: Build ",Object(o.b)("inlineCode",{parentName:"h3"},"Zilliqa-rosetta standalone")," Docker image"),Object(o.b)("h4",{id:"running-with-the-latest-release-of-zilliqa-rosetta"},"Running with the latest release of Zilliqa rosetta"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd rosetta_standalone\nsh ./build_standalone.sh .sh\n")),Object(o.b)("h4",{id:"running-with-a-specific-release-of-zilliqa-rosetta"},"Running with a specific release of Zilliqa rosetta"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker build \\\n--build-arg ROSETTA_COMMIT_OR_TAG=<ROSETTA_TAG> \\\n-f rosetta_standalone/Dockerfile_standalone\n-t rosetta_standalone:1.0 .\n")),Object(o.b)("h3",{id:"step-3-configuring-zilliqa-rosetta-optional"},"Step 3: Configuring ",Object(o.b)("inlineCode",{parentName:"h3"},"Zilliqa-rosetta")," (optional)"),Object(o.b)("p",null,"By default, Zilliqa-rosetta standalone will connect to public endpoint of Zilliqa testnet and mainnet."),Object(o.b)("p",null,"If you need to connect to other Zilliqa endpoints, you can mdoify ",Object(o.b)("inlineCode",{parentName:"p"},"Zilliqa-rosetta")," configurations yaml. The format is as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"* rosetta:\n  * host: rosetta restful api host\n  * port: resetta restful api port\n  * version: rosetta sdk version\n  * middleware_version: middleware version\n* networks:\n  * <network_name>:\n    * api: api endpoint of mainnet\n    * chain_id: chain id of mainnet\n    * node_version: zilliqa node verion\n  * <network_name>:\n    * api: api endpoint of mainnet\n    * chain_id: chain id of mainnet\n    * node_version: zilliqa node verion\n")),Object(o.b)("p",null,"Default configuration files for Zilliqa testnet and mainnet combined has been included in Rosetta root directory."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Network"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Config file"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Testnet, Mainnet"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"config.local.yaml"))))),Object(o.b)("h3",{id:"step-4-running-zilliqa-rosetta"},"Step 4: Running ",Object(o.b)("inlineCode",{parentName:"h3"},"Zilliqa-rosetta")),Object(o.b)("h4",{id:"running-zilliqa-rosetta-standalone-with-default-configuration"},"Running Zilliqa rosetta standalone with default configuration"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"run_standalone.sh\n")),Object(o.b)("h4",{id:"running-zilliqa-rosetta-standalone-with-custom-configuration"},"Running Zilliqa rosetta standalone with custom configuration"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker run -d -p 8080:8080 -v <absolute directory of config.local.yaml>:/rosetta/config.local.yaml --name rosetta_standalone rosetta_standalone:1.0\n")),Object(o.b)("h2",{id:"maintainance"},"Maintainance"),Object(o.b)("h3",{id:"restarting-zilliqa-rosetta"},"Restarting Zilliqa Rosetta"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"docker stop <container name>\ndocker start <container name>\n")))}d.isMDXComponent=!0},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(r,".").concat(u)]||p[u]||b[u]||o;return n?i.a.createElement(m,l(l({ref:t},s),{},{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);