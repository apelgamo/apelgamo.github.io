"use strict";(self.webpackChunkcrmtest=self.webpackChunkcrmtest||[]).push([[103],{5203:(e,n,t)=>{t.r(n),t.d(n,{default:()=>p});t(7294);var a=t(512),i=t(1944),s=t(5281),o=t(9460),l=t(1460),r=t(390),c=t(5999),d=t(2244),u=t(5893);function m(e){const{nextItem:n,prevItem:t}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,u.jsx)(d.Z,{...t,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),n&&(0,u.jsx)(d.Z,{...n,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function g(){const{assets:e,metadata:n}=(0,o.C)(),{title:t,description:a,date:s,tags:l,authors:r,frontMatter:c}=n,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(i.d,{title:t,description:a,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:s}),r.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:r.map((e=>e.url)).filter(Boolean).join(",")}),l.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:l.map((e=>e.label)).join(",")})]})}var h=t(9407),f=t(2212);function v(e){let{sidebar:n,children:t}=e;const{metadata:a,toc:i}=(0,o.C)(),{nextItem:s,prevItem:c,frontMatter:d,unlisted:g}=a,{hide_table_of_contents:v,toc_min_heading_level:p,toc_max_heading_level:x}=d;return(0,u.jsxs)(l.Z,{sidebar:n,toc:!v&&i.length>0?(0,u.jsx)(h.Z,{toc:i,minHeadingLevel:p,maxHeadingLevel:x}):void 0,children:[g&&(0,u.jsx)(f.Z,{}),(0,u.jsx)(r.Z,{children:t}),(s||c)&&(0,u.jsx)(m,{nextItem:s,prevItem:c})]})}function p(e){const n=e.content;return(0,u.jsx)(o.n,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(i.FG,{className:(0,a.Z)(s.k.wrapper.blogPages,s.k.page.blogPostPage),children:[(0,u.jsx)(g,{}),(0,u.jsx)(v,{sidebar:e.sidebar,children:(0,u.jsx)(n,{})})]})})}},3743:(e,n,t)=>{t.d(n,{Z:()=>f});var a=t(7294),i=t(6668);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):a.push(i)})),a}function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function r(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>l(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.L)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,a.useRef)(void 0),t=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:s,maxHeadingLevel:o}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let i=n;i<=t;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:s,maxHeadingLevel:o}),c=r(l,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var u=t(3692),m=t(5893);function g(e){let{toc:n,className:t,linkClassName:a,isChild:i}=e;return n.length?(0,m.jsx)("ul",{className:i?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(g,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)))}):null}const h=a.memo(g);function f(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...g}=e;const f=(0,i.L)(),v=c??f.tableOfContents.minHeadingLevel,p=u??f.tableOfContents.maxHeadingLevel,x=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return(0,a.useMemo)((()=>o({toc:s(n),minHeadingLevel:t,maxHeadingLevel:i})),[n,t,i])}({toc:n,minHeadingLevel:v,maxHeadingLevel:p});return d((0,a.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:v,maxHeadingLevel:p}}),[l,r,v,p])),(0,m.jsx)(h,{toc:x,className:t,linkClassName:l,...g})}},9407:(e,n,t)=>{t.d(n,{Z:()=>c});t(7294);var a=t(512),i=t(3743);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var o=t(5893);const l="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,o.jsx)("div",{className:(0,a.Z)(s.tableOfContents,"thin-scrollbar",n),children:(0,o.jsx)(i.Z,{...t,linkClassName:l,linkActiveClassName:r})})}},2212:(e,n,t)=>{t.d(n,{Z:()=>g});t(7294);var a=t(512),i=t(5999),s=t(5742),o=t(5893);function l(){return(0,o.jsx)(i.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,o.jsx)(i.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,o.jsx)(s.Z,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(5281),u=t(9047);function m(e){let{className:n}=e;return(0,o.jsx)(u.Z,{type:"caution",title:(0,o.jsx)(l,{}),className:(0,a.Z)(n,d.k.common.unlistedBanner),children:(0,o.jsx)(r,{})})}function g(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(m,{...e})]})}}}]);