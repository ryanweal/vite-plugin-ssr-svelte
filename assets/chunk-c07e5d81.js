import{S as d,i as l,s as h,h as m,x as u,k as f,g as c,y as o,o as _,r}from"./chunk-d37d201f.js";function p(i){let t,e;return document.title=t=i[0],{c(){e=m("meta"),this.h()},l(a){const n=u("svelte-d06px6",document.head);e=f(n,"META",{name:!0,content:!0}),n.forEach(c),this.h()},h(){o(e,"name","description"),o(e,"content",i[1])},m(a,n){_(document.head,e)},p(a,[n]){n&1&&t!==(t=a[0])&&(document.title=t),n&2&&o(e,"content",a[1])},i:r,o:r,d(a){c(e)}}}function g(i,t,e){let{title:a}=t,{description:n}=t;return i.$$set=s=>{"title"in s&&e(0,a=s.title),"description"in s&&e(1,n=s.description)},[a,n]}class v extends d{constructor(t){super(),l(this,t,g,p,h,{title:0,description:1})}}export{v as M};
