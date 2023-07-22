"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1024],{3759:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>m,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var t=o(7462),n=(o(7294),o(3905));const r=o.p+"assets/images/chain_of_thought_example-ad98abdca61405f66417751bdb3fba05.webp",i=o.p+"assets/images/prompted_palm-f378b4af8aff82ed8a0fdcd33e934b7b.webp";var s=o(9145);const l={sidebar_position:3,locale:"es-mx",style:"chicago"},d="\ud83d\udfe2 Cadena de pensamiento",p={unversionedId:"intermediate/chain_of_thought",id:"intermediate/chain_of_thought",title:"\ud83d\udfe2 Cadena de pensamiento",description:"El prompting Chain of Thought (CoT) (@wei2022chain) es un m\xe9todo de prompt recientemente desarrollado que alienta al LLM a explicar su razonamiento. La siguiente imagen (@wei2022chain) muestra un %%few shot standard prompt|prompt est\xe1ndar de pocos ejemplos%% (izquierda) en comparaci\xf3n con un prompt de Cadena de Pensamiento (derecha).",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/intermediate/chain_of_thought.md",sourceDirName:"intermediate",slug:"/intermediate/chain_of_thought",permalink:"/es/docs/intermediate/chain_of_thought",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intermediate/chain_of_thought.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,locale:"es-mx",style:"chicago"},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddd9\u200d\u2642\ufe0f Intermediate",permalink:"/es/docs/category/\ufe0f-intermediate"},next:{title:"\ud83d\udfe2 Zero Shot Chain of Thought",permalink:"/es/docs/intermediate/zero_shot_cot"}},m={},c=[{value:"Ejemplo",id:"ejemplo",level:2},{value:"Incorrecto",id:"incorrecto",level:4},{value:"Correcto",id:"correcto",level:4},{value:"Resultados",id:"resultados",level:2},{value:"Limitaciones",id:"limitaciones",level:2},{value:"Notas",id:"notas",level:2}],u=(h="LazyLoadImage",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var h;const f={toc:c},g="wrapper";function k(e){let{components:a,...o}=e;return(0,n.kt)(g,(0,t.Z)({},f,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"-cadena-de-pensamiento"},"\ud83d\udfe2 Cadena de pensamiento"),(0,n.kt)("p",null,"El prompting Chain of Thought (CoT)",(0,n.kt)("sup",{parentName:"p",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," es un m\xe9todo de prompt recientemente desarrollado que alienta al LLM a explicar su razonamiento. La siguiente imagen",(0,n.kt)("sup",{parentName:"p",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," muestra un ",(0,n.kt)("a",{parentName:"p",id:"prompt est\xe1ndar de pocos ejemplos_4_12_1690058683536","data-tooltip-html":"Los prompts est\xe1ndar que incluyen ejemplos. Los ejemplos son ejemplos de la tarea que el prompt intenta resolver, los cuales se incluyen en el propio prompt.","data-tooltip-place":"top"},"few shot standard prompt"),(0,n.kt)(s.u,{anchorId:"prompt est\xe1ndar de pocos ejemplos_4_12_1690058683536",clickable:!0,mdxType:"Tooltip"})," (izquierda) en comparaci\xf3n con un prompt de Cadena de Pensamiento (derecha)."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)("img",{src:r,style:{width:"750px"}})),(0,n.kt)("div",{style:{textAlign:"center"}},"Prompting regular vs. CoT (Wei et al.)"),(0,n.kt)("p",null,"La idea principal de CoT es que al mostrarle al LLM algunos ",(0,n.kt)("a",{parentName:"p",id:"ejemplos_0_60_1690058683536","data-tooltip-html":"Ejemplos de la tarea que el prompt intenta resolver, los cuales se incluyen en el propio prompt.","data-tooltip-place":"top"},"ejemplos"),(0,n.kt)(s.u,{anchorId:"ejemplos_0_60_1690058683536",clickable:!0,mdxType:"Tooltip"})," de few shots donde se explica el proceso de razonamiento, el LLM tambi\xe9n mostrar\xe1 el proceso de razonamiento al responder al prompt. Esta explicaci\xf3n del razonamiento a menudo conduce a resultados m\xe1s precisos."),(0,n.kt)("h2",{id:"ejemplo"},"Ejemplo"),(0,n.kt)("p",null,"Aqu\xed hay algunas demostraciones. La primera muestra a GPT-3 (davinci-003) fallando al resolver un problema de palabras simple. La segunda muestra a GPT-3 (davinci-003) resolviendo con \xe9xito el mismo problema, utilizando un prompt de CoT."),(0,n.kt)("h4",{id:"incorrecto"},"Incorrecto"),(0,n.kt)("iframe",{src:"http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D",style:{width:"100%",height:"1250px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,n.kt)("h4",{id:"correcto"},"Correcto"),(0,n.kt)("iframe",{src:"http://embed.learnprompting.org/embed?config=eyJib3hSb3dzIjoyNSwidG9wUCI6MSwidGVtcGVyYXR1cmUiOjAuNywibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IiIsIm1vZGVsIjoiZ3B0LTQiLCJ1bmRlZmluZWQiOiIwIn0%3D",style:{width:"100%",height:"1250px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,n.kt)("h2",{id:"resultados"},"Resultados"),(0,n.kt)("p",null,"Se ha demostrado que CoT es efectivo para mejorar los resultados en tareas como aritm\xe9tica, sentido com\xfan y tareas de razonamiento simb\xf3lico",(0,n.kt)("sup",{parentName:"p",id:"fnref-1"},(0,n.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". En particular, PaLM 540B con prompting",(0,n.kt)("sup",{parentName:"p",id:"fnref-2"},(0,n.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," logra una precisi\xf3n de tasa de resoluci\xf3n del 57% en GSM8K",(0,n.kt)("sup",{parentName:"p",id:"fnref-3"},(0,n.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," (SOTA en ese momento)."),(0,n.kt)("div",{style:{textAlign:"center"}},(0,n.kt)(u,{src:i,style:{width:"300px"},mdxType:"LazyLoadImage"})),(0,n.kt)("div",{style:{textAlign:"center"}},"Comparaci\xf3n de modelos en la prueba de referencia GSM8K (Wei et al.)"),(0,n.kt)("h2",{id:"limitaciones"},"Limitaciones"),(0,n.kt)("p",null,'Es importante destacar que, seg\xfan Wei et al., "CoT solo produce mejoras de rendimiento cuando se usa con modelos de alrededor de 100 mil millones de par\xe1metros". Los modelos m\xe1s peque\xf1os escribieron cadenas de pensamiento il\xf3gicas, lo que condujo a una precisi\xf3n peor que la del prompting est\xe1ndar. Los modelos suelen obtener mejoras de rendimiento del prompting CoT de manera proporcional al tama\xf1o del modelo.'),(0,n.kt)("h2",{id:"notas"},"Notas"),(0,n.kt)("p",null,"Ning\xfan modelo de lenguaje fue ",(0,n.kt)("del",{parentName:"p"},"da\xf1ado")," ajustado en el proceso de escribir este cap\xedtulo \ud83d\ude0a."),(0,n.kt)("div",{className:"footnotes"},(0,n.kt)("hr",{parentName:"div"}),(0,n.kt)("ol",{parentName:"div"},(0,n.kt)("li",{parentName:"ol",id:"fn-1"},"Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain of Thought Prompting Elicits Reasoning in Large Language Models.\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-2"},"Chowdhery, A., Narang, S., Devlin, J., Bosma, M., Mishra, G., Roberts, A., Barham, P., Chung, H. W., Sutton, C., Gehrmann, S., Schuh, P., Shi, K., Tsvyashchenko, S., Maynez, J., Rao, A., Barnes, P., Tay, Y., Shazeer, N., Prabhakaran, V., \u2026 Fiedel, N. (2022). PaLM: Scaling Language Modeling with Pathways.\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,n.kt)("li",{parentName:"ol",id:"fn-3"},"Cobbe, K., Kosaraju, V., Bavarian, M., Chen, M., Jun, H., Kaiser, L., Plappert, M., Tworek, J., Hilton, J., Nakano, R., Hesse, C., & Schulman, J. (2021). Training Verifiers to Solve Math Word Problems.\n",(0,n.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}k.isMDXComponent=!0}}]);