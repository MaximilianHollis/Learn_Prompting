"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[350],{3905:(e,a,o)=>{o.d(a,{Zo:()=>p,kt:()=>b});var r=o(7294);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function t(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?t(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,r,n=function(e,a){if(null==e)return{};var o,r,n={},t=Object.keys(e);for(r=0;r<t.length;r++)o=t[r],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)o=t[r],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),d=function(e){var a=r.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},p=function(e){var a=d(e.components);return r.createElement(l.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var o=e.components,n=e.mdxType,t=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(o),m=n,b=u["".concat(l,".").concat(m)]||u[m]||c[m]||t;return o?r.createElement(b,i(i({ref:a},p),{},{components:o})):r.createElement(b,i({ref:a},p))}));function b(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var t=o.length,i=new Array(t);i[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<t;d++)i[d]=o[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},8942:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var r=o(7462),n=(o(7294),o(3905));const t={sidebar_position:2,locale:"en-us"},i="\ud83d\udfe2 Preguntas Multiple Choice",s={unversionedId:"applied_prompting/mc_tutorial",id:"applied_prompting/mc_tutorial",title:"\ud83d\udfe2 Preguntas Multiple Choice",description:"\xa1Vamos a utilizar GPT para resolver una pregunta de LSAT 1!",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/applied_prompting/mc_tutorial.md",sourceDirName:"applied_prompting",slug:"/applied_prompting/mc_tutorial",permalink:"/es/docs/applied_prompting/mc_tutorial",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/applied_prompting/mc_tutorial.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,locale:"en-us"},sidebar:"tutorialSidebar",previous:{title:"Introducci\xf3n",permalink:"/es/docs/applied_prompting/overview"},next:{title:"\ud83d\udfe2 preguntas de discusi\xf3n",permalink:"/es/docs/applied_prompting/short_response"}},l={},d=[{value:"La frase m\xe1gica",id:"la-frase-m\xe1gica",level:2},{value:"Mejoras",id:"mejoras",level:2},{value:"Reordenar los elementos de la pregunta",id:"reordenar-los-elementos-de-la-pregunta",level:3},{value:"Reformulaci\xf3n de la pregunta",id:"reformulaci\xf3n-de-la-pregunta",level:3},{value:"Agregar contexto adicional",id:"agregar-contexto-adicional",level:3}],p={toc:d},u="wrapper";function c(e){let{components:a,...o}=e;return(0,n.kt)(u,(0,r.Z)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-preguntas-multiple-choice"},"\ud83d\udfe2 Preguntas Multiple Choice"),(0,n.kt)("p",null,"\xa1Vamos a utilizar GPT para resolver una pregunta de LSAT 1!"),(0,n.kt)("p",null,'El LSAT (siglas de "Law School Admission Test" en ingles) es un examen estandarizado utilizado por las escuelas de derecho en los Estados Unidos para evaluar las habilidades de pensamiento cr\xedtico y razonamiento anal\xedtico de los estudiantes potenciales.'),(0,n.kt)("p",null,"A continuaci\xf3n se muestra un ejemplo de pregunta de LSAT. Considere c\xf3mo responder\xeda y su razonamiento."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-md"},"\x3c!-- highlight-start --\x3e\nJohn de Worcester, un monje ingl\xe9s, registr\xf3 la observaci\xf3n, el 8 de diciembre de 1128, de dos manchas solares inusualmente grandes. Cinco d\xedas despu\xe9s, se observ\xf3 una brillante aurora boreal en el sur de Corea. La actividad de las manchas solares suele ir seguida de la aparici\xf3n de una aurora boreal, despu\xe9s de un lapso de tiempo que promedia cinco d\xedas. Por lo tanto, la observaci\xf3n coreana ayuda a confirmar la observaci\xf3n de John de Worcester. \xbfCu\xe1l de las siguientes opciones, si es verdadera, refuerza m\xe1s el argumento?\n\x3c!-- highlight-end --\x3e\n\na) A veces puede producirse una aurora boreal incluso cuando no ha habido una actividad significativa de manchas solares en la semana anterior.\nb) Las fuentes chinas registraron la observaci\xf3n de manchas solares m\xe1s de 1000 a\xf1os antes que John de Worcester.\nc) Solo una actividad intensa de las manchas solares podr\xeda haber resultado en una aurora boreal visible en una latitud tan baja como la de Corea.\nd) Debido a que es imposible ver las manchas solares a simple vista en condiciones t\xedpicas de luz del d\xeda, la observaci\xf3n registrada por John de Worcester habr\xeda tenido lugar bajo condiciones clim\xe1ticas inusuales como la niebla o nubes delgadas.\ne) El relato de John de Worcester inclu\xeda un dibujo de las manchas solares, que podr\xeda ser la primera ilustraci\xf3n de la actividad de las manchas solares.\n")),(0,n.kt)("details",null,(0,n.kt)("summary",null,"La respuesta correcta es..."),"c) Solo una actividad intensa de las manchas solares podr\xeda haber resultado en una aurora boreal visible en una latitud tan baja como la de Corea."),(0,n.kt)("p",null,"Intente pegar el problema en el cuadro de la demostraci\xf3n a continuaci\xf3n:"),(0,n.kt)("iframe",{src:"http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIxIn0%3D",style:{width:"100%",height:"1250px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,n.kt)("p",null),(0,n.kt)("details",{scheme:"warning"},(0,n.kt)("summary",null,"\xbfPor qu\xe9 es diferente mi respuesta?"),"Tu respuesta podr\xeda ser diferente debido a:",(0,n.kt)("p",null,"1) Actualizaciones en el modelo subyacente, GPT-3\n2) Aleatoriedad en el proceso de generaci\xf3n de texto. Podemos hacer que la salida sea m\xe1s consistente configurando la ",(0,n.kt)("a",{href:"https://beta.openai.com/docs/api-reference/completions/create#completions/create-temperature"},"temperatura")," a 0.")),(0,n.kt)("p",null,"El modelo fall\xf3. \xbfSignifica eso que el modelo es incapaz de responder este tipo de pregunta? No necesariamente. Vamos a profundizar en t\xe9cnicas que podemos utilizar para mejorar los resultados del modelo."),(0,n.kt)("h2",{id:"la-frase-m\xe1gica"},"La frase m\xe1gica"),(0,n.kt)("p",null,'El prompt est\xe1ndar que usamos arriba da poca informaci\xf3n sobre el "razonamiento" de la salida de GPT. Podemos intentar agregar la frase "vamos a explicar paso a paso" as\xed:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-markdown"},"...\ne) La cuenta de John of Worcester inclu\xeda un dibujo de las manchas solares, que podr\xeda ser la ilustraci\xf3n m\xe1s antigua de la actividad de manchas solares.\n\npensamiento paso a paso\n")),(0,n.kt)("p",null,"Esta frase aumentar\xe1 la verbosidad del modelo. Podr\xedas obtener una salida como esta:"),(0,n.kt)("iframe",{src:"http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIxIn0%3D",style:{width:"100%",height:"1250px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,n.kt)("p",null),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Observe c\xf3mo el modelo razona a trav\xe9s del problema paso a paso."),(0,n.kt)("p",{parentName:"admonition"},'Este comportamiento se denomina "Cadena de Pensamiento"',(0,n.kt)("sup",{parentName:"p",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),' (CoT, siglas de "Chain of Thought" en ingles). El modelo genera declaraciones de manera secuencial para llegar a una respuesta. Este proceso es similar al concepto de pensamiento de Sistema 2 (del libro ',(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow"},"Thinking Fast and Slow"),"); El modelo se predispone a utilizar el pensamiento del sistema 1, pero puede encadenar el pensamiento del sistema 1 para llegar a una respuesta m\xe1s metodol\xf3gica.")),(0,n.kt)("h2",{id:"mejoras"},"Mejoras"),(0,n.kt)("p",null,"Aqu\xed hay algunas variaciones en nuestra plantilla b\xe1sica para preguntas de opci\xf3n m\xfaltiple:"),(0,n.kt)("h3",{id:"reordenar-los-elementos-de-la-pregunta"},"Reordenar los elementos de la pregunta"),(0,n.kt)("p",null,"Podemos reordenar los elementos de la pregunta"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"...\na) El informe de John of Worcester incluy\xf3 un dibujo de las manchas solares, lo que podr\xeda ser la primera ilustraci\xf3n de actividad de manchas solares.\nb) Debido a que es imposible ver manchas solares a simple vista en condiciones de luz del d\xeda t\xedpicas, el avistamiento registrado por John of Worcester habr\xeda tenido lugar bajo condiciones clim\xe1ticas inusuales como la niebla o las nubes delgadas.\n...\n")),(0,n.kt)("iframe",{src:"http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIxIn0%3D",style:{width:"100%",height:"1250px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,n.kt)("h3",{id:"reformulaci\xf3n-de-la-pregunta"},"Reformulaci\xf3n de la pregunta"),(0,n.kt)("p",null,"Recordemos que la pregunta original era esta:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\xbfCu\xe1l de las siguientes opciones, si es verdadera, refuerza m\xe1s el argumento?\n")),(0,n.kt)("p",null,"Podemos cambiar la pregunta a esta:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Identifique cada opci\xf3n como refuerza, debilita o no impacta el argumento.\n")),(0,n.kt)("p",null,"para obtener una mayor comprensi\xf3n de las opciones de respuesta. "),(0,n.kt)("iframe",{src:"http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIxIn0%3D",style:{width:"100%",height:"1250px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,n.kt)("h3",{id:"agregar-contexto-adicional"},"Agregar contexto adicional"),(0,n.kt)("p",null,"Aqu\xed hay un ejemplo de un problema que se puede resolver f\xe1cilmente usando el teorema de Bayes:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Considere dos pruebas m\xe9dicas, A y B, para un virus. La prueba A es 90% efectiva para reconocer el virus cuando est\xe1 presente, pero tiene una tasa de falsos positivos del 5% (lo que indica que el virus est\xe1 presente cuando no lo est\xe1). La prueba B es 95% efectiva para reconocer el virus, pero tiene una tasa de falsos positivos del 10%. Las dos pruebas utilizan m\xe9todos independientes para identificar el virus. El virus es transportado por el 2% de todas las personas.\n(a) Supongamos que una persona es sometida a la prueba del virus utilizando solo la Prueba A. \xbfCu\xe1l es la probabilidad de que la persona realmente est\xe9 infectada con el virus dado que la Prueba A dio positivo? (2 puntos)\n(b) Supongamos que una persona es sometida a la prueba del virus utilizando solo la Prueba B. \xbfCu\xe1l es la probabilidad de que la persona realmente est\xe9 infectada con el virus dado que la Prueba B dio positivo? (2 puntos)\n(c) Supongamos que una persona es sometida a la prueba del virus utilizando ambas pruebas. \xbfCu\xe1l es la probabilidad de que la persona realmente est\xe9 infectada con el virus dado que ambas pruebas dieron positivo? (2 puntos)\n")),(0,n.kt)("p",null,"Intentemos esto con GPT:"),(0,n.kt)("iframe",{src:"http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D",style:{width:"100%",height:"1250px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,n.kt)("p",null,"\xa1El resultado es ",(0,n.kt)("strong",{parentName:"p"},"incorrecto"),"!"),(0,n.kt)("p",null,"Si agregamos un poco de contexto, como por ejemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"...\nExplicaremos paso a paso. La f\xf3rmula para Bayes es\n")),(0,n.kt)("p",null,"El modelo utilizar\xe1 la f\xf3rmula correcta, Bayes."),(0,n.kt)("iframe",{src:"http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D",style:{width:"100%",height:"1250px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,n.kt)("p",null,"\xa1Lo cual es ",(0,n.kt)("strong",{parentName:"p"},"correcto"),"!"),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"El modelo GPT no realiza bien las operaciones aritm\xe9ticas. Es posible que notes que la expresi\xf3n escrita est\xe1 correcta, pero el n\xfamero calculado no lo es."),(0,n.kt)("p",{parentName:"admonition"},"Prueba agregar la frase: ",(0,n.kt)("inlineCode",{parentName:"p"},"Da la expresi\xf3n como respuesta, no un n\xfamero")," para evitar el c\xe1lculo."),(0,n.kt)("p",{parentName:"admonition"},"Tal vez te interese conocer ",(0,n.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/advanced_applications/mrkl"},"MRKL"),(0,n.kt)("sup",{parentName:"p",id:"fnref-2"},(0,n.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),", el paradigma que combina GPT con herramientas externas como calculadoras, para resolver este tipo de problema.")),(0,n.kt)("p",null,"Written by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Zeyuzhao"},"zeyuzhao"),"."),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1"},"Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain of Thought Prompting Elicits Reasoning in Large Language Models.\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-2"},"Karpas, E., Abend, O., Belinkov, Y., Lenz, B., Lieber, O., Ratner, N., Shoham, Y., Bata, H., Levine, Y., Leyton-Brown, K., Muhlgay, D., Rozen, N., Schwartz, E., Shachaf, G., Shalev-Shwartz, S., Shashua, A., & Tenenholtz, M. (2022).\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0}}]);