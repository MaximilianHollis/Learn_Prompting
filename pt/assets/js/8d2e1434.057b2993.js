"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[596],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>f});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=m(o),d=a,f=c["".concat(p,".").concat(d)]||c[d]||u[d]||n;return o?r.createElement(f,s(s({ref:t},l),{},{components:o})):r.createElement(f,s({ref:t},l))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,s=new Array(n);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var m=2;m<n;m++)s[m]=o[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5689:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>m});var r=o(7462),a=(o(7294),o(3905));const n={sidebar_position:2},s="\ud83d\udfe2 Dando Instru\xe7\xf5es",i={unversionedId:"basics/instructions",id:"basics/instructions",title:"\ud83d\udfe2 Dando Instru\xe7\xf5es",description:"Um dos m\xe9todos de prompting mais simples \xe9 apenas dar instru\xe7\xf5es. N\xf3s j\xe1 vimos uma instru\xe7\xe3o simples na se\xe7\xe3o anterior (um outro exemplo seria)",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/basics/instructions.md",sourceDirName:"basics",slug:"/basics/instructions",permalink:"/pt/docs/basics/instructions",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/basics/instructions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 *Prompting*",permalink:"/pt/docs/basics/prompting"},next:{title:"\ud83d\udfe2 *Prompting* de Atua\xe7\xe3o (*Role Prompting*)",permalink:"/pt/docs/basics/roles"}},p={},m=[{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Notes",id:"notes",level:2}],l={toc:m},c="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-dando-instru\xe7\xf5es"},"\ud83d\udfe2 Dando Instru\xe7\xf5es"),(0,a.kt)("p",null,"Um dos m\xe9todos de ",(0,a.kt)("em",{parentName:"p"},"prompting")," mais simples \xe9 apenas dar instru\xe7\xf5es. N\xf3s j\xe1 vimos uma instru\xe7\xe3o simples na se\xe7\xe3o anterior (um outro exemplo seria: ",(0,a.kt)("inlineCode",{parentName:"p"},"Quanto \xe9 1.000.000 * 9.000? Tenha certeza de colocar a quantidade certa de zeros, mesmo que sejam muitos:"),")"),(0,a.kt)("p",null,"Abaixo, tem-se um exemplo interativo com o ",(0,a.kt)("a",{parentName:"p",href:"https://trydyno.com/"},(0,a.kt)("em",{parentName:"a"},"toolkit")," Dyno"),". Se n\xe3o estiver vendo, certifique-se de habilitar Javascript no seu navegador. Como \xe9 uma demonstra\xe7\xe3o interativa, voc\xea pode editar o texto e clicar em ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"em"},"Generate"))," para receber um novo retorno da IA."),(0,a.kt)("h4",{id:"exemplo-1"},"Exemplo 1"),(0,a.kt)("iframe",{src:"http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D",style:{width:"100%",height:"1250px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,a.kt)("br",null),(0,a.kt)("p",null,"A IA \xe9 capaz de facilmente resolver este problema. Usando instru\xe7\xf5es de ",(0,a.kt)("em",{parentName:"p"},"prompting"),", ela pode resolver muitos outros problemas, sejam simples ou mais complexos."),(0,a.kt)("h4",{id:"exemplo-2"},"Exemplo 2"),(0,a.kt)("p",null,"Aqui est\xe1 um exemplo mais complicado",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Leia o seguinte e-mail de venda e remova todas as informa\xe7\xf5es de identifica\xe7\xe3o pessoal, \nsubstituindo-as com o espa\xe7o reservado apropriado. Por exemplo, substitua o nome "Jonh Doe" \npor "[NOME]" e garanta que todas informa\xe7\xf5es pessoais foram substitu\xeddas apropriadamente.\n\nOl\xe1, Jonh!\n\nEu estou escrevendo porque percebi que voc\xea comprou um novo carro recentemente. \nEu sou o vendedor de uma concession\xe1ria local (Cheap Dealz) e gostaria que voc\xea soubesse \nque n\xf3s temos uma \xf3tima oferta em um carro novo. Se voc\xea tiver interesse, por favor, avise-me.\n\nAtenciosamente,\n\nJimmy Smith\n\nTelefone: 410-805-2345\nE-mail: jimmysmith@cheapdealz.com\n')),(0,a.kt)("p",null,"Aqui est\xe1 a ",(0,a.kt)("a",{parentName:"p",href:"https://platform.openai.com/playground/p/6fy8vbdvGelrMlF190tLEE5n?model=text-davinci-003"},"resposta da IA")," (por se tratar de um modelo probabil\xedstico, podem ocorrer varia\xe7\xf5es na resposta):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"// highlight-start\nOl\xe1, [NOME]!\n\nEu estou escrevendo porque percebi que voc\xea comprou um novo carro recentemente. \nEu sou o vendedor de uma concession\xe1ria local (Cheap Dealz) e gostaria que voc\xea soubesse \nque n\xf3s temos uma \xf3tima oferta em um carro novo. Se voc\xea tiver interesse, por favor, avise-me.\n\nAtenciosamente,\n\n[NOME]\n\nTelefone: [N\xdaMERO DE TELEFONE]\nE-mail: [ENDERE\xc7O DE E-MAIL]\n// highlight-end\n")),(0,a.kt)("p",null,"\xc9 bem legal perceber como o modelo pode ir al\xe9m das instru\xe7\xf5es. N\xe3o h\xe1 uma indica\xe7\xe3o expl\xedcita de como deve ser a mudan\xe7a para o e-mail e telefone, mas ocorre a substitui\xe7\xe3o de maneira adequada",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"."),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("p",null,"\ud83d\udea7 Esta p\xe1gina precisa de cita\xe7\xf5es \ud83d\udea7"),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Solicitar para a IA remover informa\xe7\xf5es de identifica\xe7\xe3o pessoal \xe9 uma abordagem promissora, contudo, deve ser usada com extrema precau\xe7\xe3o, visto que erros podem acontecer.",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Comparando-se com o ",(0,a.kt)("a",{parentName:"li",href:"https://learnprompting.org/docs/basics/instructions"},(0,a.kt)("em",{parentName:"a"},"prompt")," original"),", em ingl\xeas, nota-se que o ",(0,a.kt)("em",{parentName:"li"},"prompt")," em portugu\xeas apresentou um resultado inferior.",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);