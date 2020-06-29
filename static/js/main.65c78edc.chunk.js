(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{259:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(36),i=a.n(c),l=(a(44),a(45),a(2)),o=(a(46),a(47),a(3)),s=a(4),m=Object(n.createContext)(),u=function(e){var t=Object(n.useState)("BinarySearch"),a=Object(l.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)(1e3),s=Object(l.a)(o,2),u=s[0],d=s[1];return r.a.createElement(m.Provider,{value:{selectedComponent:c,setSelectedComponent:i,speed:u,setSpeed:d}},e.children)},d=function(){var e=Object(n.useContext)(m),t=e.speed,a=e.setSpeed,c=Object(n.useContext)(m).setSelectedComponent,i=Object(n.useState)([{name:"Backtracking",subCategories:[{name:"N Queens Placement",value:"NQueensPlacement"}]},{name:"Branch and Bound",subCategories:[{name:"Binary Search",value:"BinarySearch"}]},{name:"Dynamic Programming",subCategories:[{name:"Fibonacci",value:"Fibonacci"}]},{name:"Searching",subCategories:[{name:"Linear Search",value:"LinearSearch"}]}]),u=Object(l.a)(i,2),d=u[0],f=(u[1],Object(n.useState)(-1)),b=Object(l.a)(f,2),v=b[0],E=b[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"title"},"Algorithm Visualizer"),r.a.createElement("div",{className:"trademark"},"Made with ",r.a.createElement(o.a,{icon:s.d})," by"," ",r.a.createElement("a",{href:"https://linkedin.com/in/saranrajshri",target:"_blank",className:"profile-link"},"Shri Saran Raj"))),r.a.createElement("div",{className:"settings",style:{paddingTop:3}},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"left-content"},r.a.createElement("span",{className:"font-weight-bold cursor-pointer menu-item"},r.a.createElement(o.a,{icon:s.c})," Github"),r.a.createElement("span",{className:"font-weight-bold cursor-pointer menu-item"},r.a.createElement(o.a,{icon:s.f})," Star"),r.a.createElement("span",{className:"font-weight-bold cursor-pointer menu-item"},r.a.createElement(o.a,{icon:s.h})," Speed"),r.a.createElement("span",null,r.a.createElement("input",{id:"range",type:"range",value:t,min:"1",max:"5",step:"1",onChange:function(e){a(e.target.value)},className:"slider"}))))),r.a.createElement("div",{className:"sidenav"},r.a.createElement("div",{className:"menu"},d.map((function(e,t){return r.a.createElement("div",{className:"menu-title",key:t,onClick:function(){return function(e){E(e)}(t)}},r.a.createElement("span",null,e.name," "),t===v?r.a.createElement(o.a,{icon:s.a,className:"chevron"}):r.a.createElement(o.a,{icon:s.b,className:"chevron"}),r.a.createElement("div",{className:"options"},t===v?e.subCategories.map((function(e,t){return r.a.createElement("div",{className:"sub-menu-title",onClick:function(){return c(e.value)},key:t},e.name)})):null))})))))},f=(a(57),a(9)),b=a.n(f),v=a(6),E=a(15),p=(a(59),function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(-1),u=Object(l.a)(i,2),d=u[0],f=u[1],p=Object(n.useState)(""),h=Object(l.a)(p,2),g=h[0],N=h[1],j=Object(n.useState)([]),O=Object(l.a)(j,2),S=O[0],k=O[1],y=Object(n.useContext)(m).speed,x=function(){f(-1),k([]),N("");for(var e=[],t=0;t<15;t++){var a=Math.floor(100*Math.random()+1);e.push(a)}c(e)};Object(n.useEffect)((function(){x()}),[]);var C=function(e){return new Promise((function(t){return setTimeout(t,e)}))},w=function(){var e=Object(E.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===g.trim()){e.next=17;break}t=0;case 2:if(!(t<a.length)){e.next=15;break}return f(t),e.next=6,C(1e3*(6-y));case 6:if(f(t+1),k((function(e){return[].concat(Object(v.a)(e),["Checking at index ".concat(t,". Value at index ").concat(t," is ").concat(a[t])])})),a[t]!==parseInt(g)){e.next=12;break}return k((function(e){return[].concat(Object(v.a)(e),["Element Found at index ".concat(t)])})),f(t),e.abrupt("break",15);case 12:t++,e.next=2;break;case 15:e.next=18;break;case 17:alert("Enter the element to find");case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"settings"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"left-content"},r.a.createElement("span",{className:"font-weight-bold cursor-pointer menu-item",onClick:x},r.a.createElement(o.a,{icon:s.g})," Generate array"),r.a.createElement("input",{type:"text",focus:!0,placeholder:"Element to be found",className:"inputField",onChange:function(e){N(e.target.value)},value:g}),r.a.createElement("span",{className:"font-weight-bold cursor-pointer menu-item",onClick:w},r.a.createElement(o.a,{icon:s.e})," Play")))),r.a.createElement("div",{className:"mainContent"},r.a.createElement("div",{className:"node-wrapper"},a.map((function(e,t){return r.a.createElement("div",{key:t,className:t===d?"node currentNode":"node"},e)}))),r.a.createElement("div",{className:"log-tracer"},r.a.createElement("div",{className:"label"},"Log Tracer"),r.a.createElement("div",{className:"content"},S.map((function(e){return r.a.createElement("p",null,e)}))))))}),h=(a(60),function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(-1),m=Object(l.a)(i,2),u=m[0],d=m[1],f=Object(n.useState)(-1),p=Object(l.a)(f,2),h=p[0],g=p[1],N=Object(n.useState)(-1),j=Object(l.a)(N,2),O=j[0],S=j[1],k=Object(n.useState)(""),y=Object(l.a)(k,2),x=y[0],C=y[1],w=Object(n.useState)([]),B=Object(l.a)(w,2),M=B[0],P=B[1],L=function(){d(-1),g(-1),S(-1),C("");for(var e=[],t=Math.floor(80*Math.random()+1),a=t;a<t+15;a++)e.push(a);c(e)};Object(n.useEffect)((function(){L()}),[]);var F=function(e){return new Promise((function(t){return setTimeout(t,e)}))},T=function(){var e=Object(E.a)(b.a.mark((function e(){var t,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===x.trim()){e.next=31;break}g(t=0),n=a.length,S(n);case 5:if(!(t<=n)){e.next=29;break}if(r=Math.floor(t+(n-t)/2),P((function(e){return[].concat(Object(v.a)(e),["Middle Index : ".concat(r)])})),d(r),a[r]!==parseInt(x)){e.next=14;break}return P((function(e){return[].concat(Object(v.a)(e),["Element found at index ".concat(r)])})),e.abrupt("break",29);case 14:if(!(a[r]<x)){e.next=22;break}return g(t=r+1),P((function(e){return[].concat(Object(v.a)(e),["Moving the left pointer to the index ".concat(r+1)])})),e.next=20,F(1e3);case 20:e.next=27;break;case 22:return S(n=r-1),P((function(e){return[].concat(Object(v.a)(e),["Moving the right pointer to the index ".concat(r-1)])})),e.next=27,F(1e3);case 27:e.next=5;break;case 29:e.next=32;break;case 31:alert("Enter the element to find");case 32:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"settings"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"left-content"},r.a.createElement("span",{className:"font-weight-bold cursor-pointer menu-item",onClick:L},r.a.createElement(o.a,{icon:s.g})," Generate array"),r.a.createElement("input",{type:"text",focus:!0,placeholder:"Element to be found",className:"inputField",value:x,onChange:function(e){C(e.target.value)}}),r.a.createElement("span",{className:"font-weight-bold cursor-pointer menu-item",onClick:T},r.a.createElement(o.a,{icon:s.e})," Play")))),r.a.createElement("div",{className:"mainContent"},r.a.createElement("div",{className:"node-wrapper"},a.map((function(e,t){return r.a.createElement("div",{key:t,className:t===u?"node currentNode":t>=h&&t<=O?"node rangeNode":"node"},e)})))),r.a.createElement("div",{className:"log-tracer"},r.a.createElement("div",{className:"label"},"Log Tracer"),r.a.createElement("div",{className:"content"},M.map((function(e){return r.a.createElement("p",null,e)})))))}),g=a(263),N=a(262),j=function(){var e=Object(n.useContext)(m).selectedComponent,t={LinearSearch:p,BinarySearch:h}[e],a={LinearSearch:"\n#include<bits/stdc++.h>\nusing namespace std;\n\nvector<int> array = {45, 22, 68, 99, 100 ,120}\nint target = 45;\n\nint linearSearch(vector<int> array, int target){\n    for(int i = 0; i < n; i++){\n        if(array[i] == target) return i;\n    }\n    return -1;\n}\n\nint main(){\n    cout << linearSearch(array, target) << endl;\n    return 0;\n}\n",BinarySearch:"\n#include<bits/stdc++.h>\nusing namespace std;\n\nvector<int> array = {1, 2, 3, 4, 5, 6, 7, 8}\nint target = 7;\n\nint binarySearch(vector<int> array, int target){\n    int left = 0;\n    int right = array.size() - 1;\n\n    while(left < right){\n        int mid = left + (right - left) / 2;\n        if(array[mid] == target) return mid;\n        else if (array[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n}\n\nint main(){\n    cout << binarySearch(array, target) << endl;\n    return 0;\n}\n\n"}[e];return r.a.createElement("div",{className:"root"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column",id:"main-content-column"},r.a.createElement("div",{className:"main-content"},r.a.createElement("div",null,r.a.createElement(t,null)))),r.a.createElement("div",{className:"column",id:"code"},r.a.createElement("div",{className:"code"},r.a.createElement("div",{className:"label"},r.a.createElement("span",null,"Code")),r.a.createElement(g.a,{language:"cpp",style:N.a,customStyle:{fontSize:12}},a)))))},O=function(){return r.a.createElement("div",null,r.a.createElement(u,null,r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(j,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},39:function(e,t,a){e.exports=a(259)},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){}},[[39,1,2]]]);
//# sourceMappingURL=main.65c78edc.chunk.js.map