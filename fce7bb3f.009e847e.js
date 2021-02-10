(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{275:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return l}));var a=t(2),r=t(6),c=(t(0),t(280)),o={id:"rosetta-construction-combine",title:"Combine",keywords:["rosetta","middleware","exchanges","zilliqa","API","contruction","combine"],description:"Combine"},i={id:"exchanges/rosetta-construction-combine",isDocsHomePage:!1,title:"Combine",description:"Combine",source:"@site/docs/exchanges/rosetta-construction-combine.md",permalink:"/docs/exchanges/rosetta-construction-combine",editUrl:"https://github.com/Zilliqa/dev-portal/tree/master/docs/exchanges/rosetta-construction-combine.md",sidebar:"ExchangesSidebar",previous:{title:"Parse",permalink:"/docs/exchanges/rosetta-construction-parse"},next:{title:"Hash",permalink:"/docs/exchanges/rosetta-construction-hash"}},s=[{value:"Create Network Transaction from Signature",id:"create-network-transaction-from-signature",children:[]}],b={rightToc:s};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("hr",null),Object(c.b)("h2",{id:"create-network-transaction-from-signature"},"Create Network Transaction from Signature"),Object(c.b)("p",null,"Creates a Zilliqa payment transaction from an unsigned transaction and an array of provided signatures. The signed transaction returned from this method will thenbe sent to the ",Object(c.b)("inlineCode",{parentName:"p"},"/construction/submit")," endpoint by the caller."),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Before calling ",Object(c.b)("inlineCode",{parentName:"p"},"/combine"),", please call ",Object(c.b)("inlineCode",{parentName:"p"},"/payloads")," to have the ",Object(c.b)("inlineCode",{parentName:"p"},"unsigned_transaction"),". Next, use ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Zilliqa/gozilliqa-sdk"}),"goZilliqa SDK")," or other Zilliqa's SDKs to craft a transaction object and sign the transaction object; Print out the ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("em",{parentName:"strong"},"signature"))," and ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("em",{parentName:"strong"},"transaction object"))," in ",Object(c.b)("strong",{parentName:"p"},"hexadecimals")," format. "))),Object(c.b)("p",null,"Refer to the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Zilliqa/zilliqa-rosetta/blob/master/examples/signRosettaTransaction.js"}),Object(c.b)("inlineCode",{parentName:"a"},"signRosettaTransaction.js"))," for an example code on how to craft and sign a transaction object."),Object(c.b)("p",null,"Use them as request parameters as follows:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    ...,\n    "unsigned_transaction": ... // from /payloads\n    "signatures": [\n        {\n            "signing_payload": {\n                "address": "string", // sender account address\n                "hex_bytes": "string",  // signed transaction object in hexadecimals representation obtained after signing with goZilliqa SDK or other Zilliqa SDK\n                "signature_type": "ecdsa"\n            },\n            "public_key": {\n                "hex_bytes": "string", // sender public key\n                "curve_type": "secp256k1"\n            },\n            "signature_type": "ecdsa",\n            "hex_bytes": "string" // signature of the signed transaction object \n        }\n    ]\n}\n\n')),Object(c.b)("p",null,"Request:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "network_identifier": {\n        "blockchain": "zilliqa",\n        "network": "testnet"\n    },\n    "unsigned_transaction": "{\\"amount\\":2000000000000,\\"code\\":\\"\\",\\"data\\":\\"\\",\\"gasLimit\\":1,\\"gasPrice\\":2000000000,\\"nonce\\":187,\\"pubKey\\":\\"02e44ef2c5c2031386faa6cafdf5f67318cc661871b0112a27458e65f37a35655e\\",\\"senderAddr\\":\\"zil1n8uafq4thhzlq5nj50p55al9jvamr3s45hm49r\\",\\"toAddr\\":\\"zil1f9uqwhwkq7fnzgh5x4djyzg4a7j3apx8dsnnc0\\",\\"version\\":21823489}",\n    "signatures": [\n        {\n            "signing_payload": {\n                "account_identifier": {\n                    "address": "zil1n8uafq4thhzlq5nj50p55al9jvamr3s45hm49r",\n                    "metadata": {\n                        "base16": "99f9d482abbdC5F05272A3C34a77E5933Bb1c615"\n                    }\n                },\n                "hex_bytes": "088180b40a10bb011a144978075dd607933122f4355b220915efa51e84c722230a2102e44ef2c5c2031386faa6cafdf5f67318cc661871b0112a27458e65f37a35655e2a120a100000000000000000000001d1a94a200032120a10000000000000000000000000773594003801",\n                "signature_type": "schnorr_1"\n            },\n            "public_key": {\n                "hex_bytes": "02e44ef2c5c2031386faa6cafdf5f67318cc661871b0112a27458e65f37a35655e",\n                "curve_type": "secp256k1"\n            },\n            "signature_type": "schnorr_1",\n            "hex_bytes": "fcb93583d963a7c11f52f04b1ecbd129aa3df896e618b47ff163dc18c53b59afc4289851fd2d5a50eaa7d7ae0763eb912797b0b34e1cf1e6d3865a218e1066b7"\n        }\n    ]\n}\n')),Object(c.b)("p",null,"Response:"),Object(c.b)("p",null,"Sample"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "signed_transaction": "{\\"amount\\":2000000000000,\\"code\\":\\"\\",\\"data\\":\\"\\",\\"gasLimit\\":1,\\"gasPrice\\":2000000000,\\"nonce\\":187,\\"pubKey\\":\\"02e44ef2c5c2031386faa6cafdf5f67318cc661871b0112a27458e65f37a35655e\\",\\"senderAddr\\":\\"zil1n8uafq4thhzlq5nj50p55al9jvamr3s45hm49r\\",\\"signature\\":\\"fcb93583d963a7c11f52f04b1ecbd129aa3df896e618b47ff163dc18c53b59afc4289851fd2d5a50eaa7d7ae0763eb912797b0b34e1cf1e6d3865a218e1066b7\\",\\"toAddr\\":\\"zil1f9uqwhwkq7fnzgh5x4djyzg4a7j3apx8dsnnc0\\",\\"version\\":21823489}"\n}\n')))}l.isMDXComponent=!0},280:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),l=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=a,f=d["".concat(o,".").concat(u)]||d[u]||p[u]||c;return t?r.a.createElement(f,i(i({ref:n},b),{},{components:t})):r.a.createElement(f,i({ref:n},b))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<c;b++)o[b]=t[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);