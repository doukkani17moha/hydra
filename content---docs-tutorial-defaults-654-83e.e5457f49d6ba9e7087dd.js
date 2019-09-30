(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{74:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return u}));t(0);var a=t(86);function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l={id:"defaults",title:"Defaults",sidebar_label:"Defaults"},i=[{value:"Config group defaults",id:"config-group-defaults",children:[{value:"Overriding a config group default",id:"overriding-a-config-group-default",children:[]}]},{value:"Non-config group defaults",id:"non-config-group-defaults",children:[]}],p={rightToc:i},c="wrapper";function u(e){var n=e.components,t=o(e,["components"]);return Object(a.b)(c,r({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"After office politics, you decide that you want to use MySQL by default.\nYou no longer want to type ",Object(a.b)("inlineCode",{parentName:"p"},"db=mysql")," every time you run your application."),Object(a.b)("p",null,"You can add a ",Object(a.b)("inlineCode",{parentName:"p"},"defaults")," list into your config file."),Object(a.b)("h2",{id:"config-group-defaults"},"Config group defaults"),Object(a.b)("p",null,"Configuration file: ",Object(a.b)("inlineCode",{parentName:"p"},"config.yaml")),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"defaults:\n    - db: mysql\n")),Object(a.b)("p",null,"Remember to specify ",Object(a.b)("inlineCode",{parentName:"p"},"config.yaml")," as the ",Object(a.b)("inlineCode",{parentName:"p"},"config_path"),"."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-python"}),"@hydra.main(config_path='conf/config.yaml')\ndef my_app(cfg):\n    print(cfg.pretty())\n")),Object(a.b)("p",null,"When you run the updated application, MySQL is loaded by default."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\n")),Object(a.b)("h3",{id:"overriding-a-config-group-default"},"Overriding a config group default"),Object(a.b)("p",null,"You can still load PostgreSQL, and override individual values."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py db=postgresql db.timeout=20\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 20\n  user: postgre_user\n")),Object(a.b)("p",null,"You can prevent a default from being loaded by assigning ",Object(a.b)("inlineCode",{parentName:"p"},"null")," to it in the command line:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py db=null\n{}\n")),Object(a.b)("h2",{id:"non-config-group-defaults"},"Non-config group defaults"),Object(a.b)("p",null,"Sometimes a config file you want to merge does not belong in any config group.\nThe following will load ",Object(a.b)("inlineCode",{parentName:"p"},"some_file.yaml")," from your config directory:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-yaml"}),"defaults:\n    - some_file\n")),Object(a.b)("p",null,"Config files that not a part of a ",Object(a.b)("inlineCode",{parentName:"p"},"config group")," like ",Object(a.b)("inlineCode",{parentName:"p"},"db")," cannot be overridden."))}u.isMDXComponent=!0},86:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a),o=r.a.createContext({}),l=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},i=function(e){var n=l(e.components);return r.a.createElement(o.Provider,{value:n},e.children)};var p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,f=u[i+"."+d]||u[d]||c[d]||o;return t?r.a.createElement(f,Object.assign({},{ref:n},p,{components:t})):r.a.createElement(f,Object.assign({},{ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=t[d];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);