(self.webpackChunkmark_williams_web_development=self.webpackChunkmark_williams_web_development||[]).push([[853],{862:function(e,t,n){var r=n(8).default;function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=a(t);if(n&&n.has(e))return n.get(e);var i={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var u=o?Object.getOwnPropertyDescriptor(e,c):null;u&&(u.get||u.set)?Object.defineProperty(i,c,u):i[c]=e[c]}return i.default=e,n&&n.set(e,i),i},e.exports.default=e.exports,e.exports.__esModule=!0},8:function(e){function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(n)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},637:function(e,t,n){"use strict";function r(e){for(var t="https://material-ui.com/production-error/?code="+e,n=1;n<arguments.length;n+=1)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified Material-UI error #"+e+"; visit "+t+" for the full message."}function a(e){if("string"!=typeof e)throw new Error(r(7));return e.charAt(0).toUpperCase()+e.slice(1)}function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return null==t?e:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),(function(){}))}n.r(t),n.d(t,{capitalize:function(){return a},createChainedFunction:function(){return i},createSvgIcon:function(){return ge},debounce:function(){return he},deprecatedPropType:function(){return ve},isMuiElement:function(){return be},ownerDocument:function(){return ye},ownerWindow:function(){return xe},requirePropFactory:function(){return we},setRef:function(){return Ee},unstable_useId:function(){return Oe},unsupportedProp:function(){return ke},useControlled:function(){return Ae},useEventCallback:function(){return Se},useForkRef:function(){return Ne},useIsFocusVisible:function(){return Be}});var o=n(7462),c=n(7294),u=n(5987),l=n(5505),f=n(1566),s=n(7643),d=["xs","sm","md","lg","xl"];function m(e){var t=e.values,n=void 0===t?{xs:0,sm:600,md:960,lg:1280,xl:1920}:t,r=e.unit,a=void 0===r?"px":r,i=e.step,c=void 0===i?5:i,l=(0,u.Z)(e,["values","unit","step"]);function f(e){var t="number"==typeof n[e]?n[e]:e;return"@media (min-width:".concat(t).concat(a,")")}function s(e,t){var r=d.indexOf(t);return r===d.length-1?f(e):"@media (min-width:".concat("number"==typeof n[e]?n[e]:e).concat(a,") and ")+"(max-width:".concat((-1!==r&&"number"==typeof n[d[r+1]]?n[d[r+1]]:t)-c/100).concat(a,")")}return(0,o.Z)({keys:d,values:n,up:f,down:function(e){var t=d.indexOf(e)+1,r=n[d[t]];return t===d.length?f("xs"):"@media (max-width:".concat(("number"==typeof r&&t>0?r:e)-c/100).concat(a,")")},between:s,only:function(e){return s(e,e)},width:function(e){return n[e]}},l)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t,n){var r;return(0,o.Z)({gutters:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return console.warn(["Material-UI: theme.mixins.gutters() is deprecated.","You can use the source of the mixin directly:","\n      paddingLeft: theme.spacing(2),\n      paddingRight: theme.spacing(2),\n      [theme.breakpoints.up('sm')]: {\n        paddingLeft: theme.spacing(3),\n        paddingRight: theme.spacing(3),\n      },\n      "].join("\n")),(0,o.Z)({paddingLeft:t(2),paddingRight:t(2)},n,p({},e.up("sm"),(0,o.Z)({paddingLeft:t(3),paddingRight:t(3)},n[e.up("sm")])))},toolbar:(r={minHeight:56},p(r,"".concat(e.up("xs")," and (orientation: landscape)"),{minHeight:48}),p(r,e.up("sm"),{minHeight:64}),r)},n)}var h={black:"#000",white:"#fff"},v={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#d5d5d5",A200:"#aaaaaa",A400:"#303030",A700:"#616161"},b={50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe"},y={50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162"},x={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},w={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},E={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},k={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"};function A(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.min(Math.max(t,e),n)}function M(e){if(e.type)return e;if("#"===e.charAt(0))return M(function(e){e=e.substr(1);var t=new RegExp(".{1,".concat(e.length>=6?2:1,"}"),"g"),n=e.match(t);return n&&1===n[0].length&&(n=n.map((function(e){return e+e}))),n?"rgb".concat(4===n.length?"a":"","(").concat(n.map((function(e,t){return t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3})).join(", "),")"):""}(e));var t=e.indexOf("("),n=e.substring(0,t);if(-1===["rgb","rgba","hsl","hsla"].indexOf(n))throw new Error(r(3,e));var a=e.substring(t+1,e.length-1).split(",");return{type:n,values:a=a.map((function(e){return parseFloat(e)}))}}function S(e){var t=e.type,n=e.values;return-1!==t.indexOf("rgb")?n=n.map((function(e,t){return t<3?parseInt(e,10):e})):-1!==t.indexOf("hsl")&&(n[1]="".concat(n[1],"%"),n[2]="".concat(n[2],"%")),"".concat(t,"(").concat(n.join(", "),")")}function N(e){var t="hsl"===(e=M(e)).type?M(function(e){var t=(e=M(e)).values,n=t[0],r=t[1]/100,a=t[2]/100,i=r*Math.min(a,1-a),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(e+n/30)%12;return a-i*Math.max(Math.min(t-3,9-t,1),-1)},c="rgb",u=[Math.round(255*o(0)),Math.round(255*o(8)),Math.round(255*o(4))];return"hsla"===e.type&&(c+="a",u.push(t[3])),S({type:c,values:u})}(e)).values:e.values;return t=t.map((function(e){return(e/=255)<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)})),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}function O(e,t){if(e=M(e),t=A(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb"))for(var n=0;n<3;n+=1)e.values[n]*=1-t;return S(e)}function L(e,t){if(e=M(e),t=A(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(var n=0;n<3;n+=1)e.values[n]+=(255-e.values[n])*t;return S(e)}var Z={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:h.white,default:v[50]},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},R={text:{primary:h.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",hint:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:v[800],default:"#303030"},action:{active:h.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function T(e,t,n,r){var a=r.light||r,i=r.dark||1.5*r;e[t]||(e.hasOwnProperty(n)?e[t]=e[n]:"light"===t?e.light=L(e.main,a):"dark"===t&&(e.dark=O(e.main,i)))}function C(e){var t=e.primary,n=void 0===t?{light:b[300],main:b[500],dark:b[700]}:t,a=e.secondary,i=void 0===a?{light:y.A200,main:y.A400,dark:y.A700}:a,c=e.error,l=void 0===c?{light:x[300],main:x[500],dark:x[700]}:c,f=e.warning,d=void 0===f?{light:w[300],main:w[500],dark:w[700]}:f,m=e.info,p=void 0===m?{light:E[300],main:E[500],dark:E[700]}:m,g=e.success,A=void 0===g?{light:k[300],main:k[500],dark:k[700]}:g,M=e.type,S=void 0===M?"light":M,O=e.contrastThreshold,L=void 0===O?3:O,C=e.tonalOffset,j=void 0===C?.2:C,z=(0,u.Z)(e,["primary","secondary","error","warning","info","success","type","contrastThreshold","tonalOffset"]);function _(e){return function(e,t){var n=N(e),r=N(t);return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}(e,R.text.primary)>=L?R.text.primary:Z.text.primary}var I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:300,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:700;if(!(e=(0,o.Z)({},e)).main&&e[t]&&(e.main=e[t]),!e.main)throw new Error(r(4,t));if("string"!=typeof e.main)throw new Error(r(5,JSON.stringify(e.main)));return T(e,"light",n,j),T(e,"dark",a,j),e.contrastText||(e.contrastText=_(e.main)),e},W={dark:R,light:Z};return(0,s.Z)((0,o.Z)({common:h,type:S,primary:I(n),secondary:I(i,"A400","A200","A700"),error:I(l),warning:I(d),info:I(p),success:I(A),grey:v,contrastThreshold:L,getContrastText:_,augmentColor:I,tonalOffset:j},W[S]),z)}function j(e){return Math.round(1e5*e)/1e5}function z(e){return j(e)}var _={textTransform:"uppercase"},I='"Roboto", "Helvetica", "Arial", sans-serif';function W(e,t){var n="function"==typeof t?t(e):t,r=n.fontFamily,a=void 0===r?I:r,i=n.fontSize,c=void 0===i?14:i,l=n.fontWeightLight,f=void 0===l?300:l,d=n.fontWeightRegular,m=void 0===d?400:d,p=n.fontWeightMedium,g=void 0===p?500:p,h=n.fontWeightBold,v=void 0===h?700:h,b=n.htmlFontSize,y=void 0===b?16:b,x=n.allVariants,w=n.pxToRem,E=(0,u.Z)(n,["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"]);var k=c/14,A=w||function(e){return"".concat(e/y*k,"rem")},M=function(e,t,n,r,i){return(0,o.Z)({fontFamily:a,fontWeight:e,fontSize:A(t),lineHeight:n},a===I?{letterSpacing:"".concat(j(r/t),"em")}:{},i,x)},S={h1:M(f,96,1.167,-1.5),h2:M(f,60,1.2,-.5),h3:M(m,48,1.167,0),h4:M(m,34,1.235,.25),h5:M(m,24,1.334,0),h6:M(g,20,1.6,.15),subtitle1:M(m,16,1.75,.15),subtitle2:M(g,14,1.57,.1),body1:M(m,16,1.5,.15),body2:M(m,14,1.43,.15),button:M(g,14,1.75,.4,_),caption:M(m,12,1.66,.4),overline:M(m,12,2.66,1,_)};return(0,s.Z)((0,o.Z)({htmlFontSize:y,pxToRem:A,round:z,fontFamily:a,fontSize:c,fontWeightLight:f,fontWeightRegular:m,fontWeightMedium:g,fontWeightBold:v},S),E,{clone:!1})}function B(){return["".concat(arguments.length<=0?void 0:arguments[0],"px ").concat(arguments.length<=1?void 0:arguments[1],"px ").concat(arguments.length<=2?void 0:arguments[2],"px ").concat(arguments.length<=3?void 0:arguments[3],"px rgba(0,0,0,").concat(.2,")"),"".concat(arguments.length<=4?void 0:arguments[4],"px ").concat(arguments.length<=5?void 0:arguments[5],"px ").concat(arguments.length<=6?void 0:arguments[6],"px ").concat(arguments.length<=7?void 0:arguments[7],"px rgba(0,0,0,").concat(.14,")"),"".concat(arguments.length<=8?void 0:arguments[8],"px ").concat(arguments.length<=9?void 0:arguments[9],"px ").concat(arguments.length<=10?void 0:arguments[10],"px ").concat(arguments.length<=11?void 0:arguments[11],"px rgba(0,0,0,").concat(.12,")")].join(",")}var F=["none",B(0,2,1,-1,0,1,1,0,0,1,3,0),B(0,3,1,-2,0,2,2,0,0,1,5,0),B(0,3,3,-2,0,3,4,0,0,1,8,0),B(0,2,4,-1,0,4,5,0,0,1,10,0),B(0,3,5,-1,0,5,8,0,0,1,14,0),B(0,3,5,-1,0,6,10,0,0,1,18,0),B(0,4,5,-2,0,7,10,1,0,2,16,1),B(0,5,5,-3,0,8,10,1,0,3,14,2),B(0,5,6,-3,0,9,12,1,0,3,16,2),B(0,6,6,-3,0,10,14,1,0,4,18,3),B(0,6,7,-4,0,11,15,1,0,4,20,3),B(0,7,8,-4,0,12,17,2,0,5,22,4),B(0,7,8,-4,0,13,19,2,0,5,24,4),B(0,7,9,-4,0,14,21,2,0,5,26,4),B(0,8,9,-5,0,15,22,2,0,6,28,5),B(0,8,10,-5,0,16,24,2,0,6,30,5),B(0,8,11,-5,0,17,26,2,0,6,32,5),B(0,9,11,-5,0,18,28,2,0,7,34,6),B(0,9,12,-6,0,19,29,2,0,7,36,6),B(0,10,13,-6,0,20,31,3,0,8,38,7),B(0,10,13,-6,0,21,33,3,0,8,40,7),B(0,10,14,-6,0,22,35,3,0,8,42,7),B(0,11,14,-7,0,23,36,3,0,9,44,8),B(0,11,15,-7,0,24,38,3,0,9,46,8)],D={borderRadius:4};var H=n(181);function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(u){c=!0,a=u}finally{try{o||null==n.return||n.return()}finally{if(c)throw a}}return i}}(e,t)||(0,H.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var G=n(1002),V=(n(5697),{xs:0,sm:600,md:960,lg:1280,xl:1920}),X={keys:["xs","sm","md","lg","xl"],up:function(e){return"@media (min-width:".concat(V[e],"px)")}};var U=function(e,t){return t?(0,s.Z)(e,t,{clone:!1}):e};var Y,K,J={m:"margin",p:"padding"},q={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Q={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},$=(Y=function(e){if(e.length>2){if(!Q[e])return[e];e=Q[e]}var t=P(e.split(""),2),n=t[0],r=t[1],a=J[n],i=q[r]||"";return Array.isArray(i)?i.map((function(e){return a+e})):[a+i]},K={},function(e){return void 0===K[e]&&(K[e]=Y(e)),K[e]}),ee=["m","mt","mr","mb","ml","mx","my","p","pt","pr","pb","pl","px","py","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY"];function te(e){var t=e.spacing||8;return"number"==typeof t?function(e){return t*e}:Array.isArray(t)?function(e){return t[e]}:"function"==typeof t?t:function(){}}function ne(e,t){return function(n){return e.reduce((function(e,r){return e[r]=function(e,t){if("string"==typeof t||null==t)return t;var n=e(Math.abs(t));return t>=0?n:"number"==typeof n?-n:"-".concat(n)}(t,n),e}),{})}}function re(e){var t=te(e.theme);return Object.keys(e).map((function(n){if(-1===ee.indexOf(n))return null;var r=ne($(n),t),a=e[n];return function(e,t,n){if(Array.isArray(t)){var r=e.theme.breakpoints||X;return t.reduce((function(e,a,i){return e[r.up(r.keys[i])]=n(t[i]),e}),{})}if("object"===(0,G.Z)(t)){var a=e.theme.breakpoints||X;return Object.keys(t).reduce((function(e,r){return e[a.up(r)]=n(t[r]),e}),{})}return n(t)}(e,a,r)})).reduce(U,{})}re.propTypes={},re.filterProps=ee;function ae(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;if(e.mui)return e;var t=te({spacing:e}),n=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return 0===n.length?t(1):1===n.length?t(n[0]):n.map((function(e){if("string"==typeof e)return e;var n=t(e);return"number"==typeof n?"".concat(n,"px"):n})).join(" ")};return Object.defineProperty(n,"unit",{get:function(){return e}}),n.mui=!0,n}var ie={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},oe={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function ce(e){return"".concat(Math.round(e),"ms")}var ue={easing:ie,duration:oe,create:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["all"],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.duration,r=void 0===n?oe.standard:n,a=t.easing,i=void 0===a?ie.easeInOut:a,o=t.delay,c=void 0===o?0:o;(0,u.Z)(t,["duration","easing","delay"]);return(Array.isArray(e)?e:[e]).map((function(e){return"".concat(e," ").concat("string"==typeof r?r:ce(r)," ").concat(i," ").concat("string"==typeof c?c:ce(c))})).join(",")},getAutoHeightDuration:function(e){if(!e)return 0;var t=e/36;return Math.round(10*(4+15*Math.pow(t,.25)+t/5))}},le={mobileStepper:1e3,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500};function fe(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.breakpoints,n=void 0===t?{}:t,r=e.mixins,a=void 0===r?{}:r,i=e.palette,o=void 0===i?{}:i,c=e.spacing,l=e.typography,f=void 0===l?{}:l,d=(0,u.Z)(e,["breakpoints","mixins","palette","spacing","typography"]),p=C(o),h=m(n),v=ae(c),b=(0,s.Z)({breakpoints:h,direction:"ltr",mixins:g(h,v,a),overrides:{},palette:p,props:{},shadows:F,typography:W(p,f),spacing:v,shape:D,transitions:ue,zIndex:le},d),y=arguments.length,x=new Array(y>1?y-1:0),w=1;w<y;w++)x[w-1]=arguments[w];return b=x.reduce((function(e,t){return(0,s.Z)(e,t)}),b)}var se=fe();var de=function(e,t){return(0,f.Z)(e,(0,o.Z)({defaultTheme:se},t))},me=c.forwardRef((function(e,t){var n=e.children,r=e.classes,i=e.className,f=e.color,s=void 0===f?"inherit":f,d=e.component,m=void 0===d?"svg":d,p=e.fontSize,g=void 0===p?"medium":p,h=e.htmlColor,v=e.titleAccess,b=e.viewBox,y=void 0===b?"0 0 24 24":b,x=(0,u.Z)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return c.createElement(m,(0,o.Z)({className:(0,l.Z)(r.root,i,"inherit"!==s&&r["color".concat(a(s))],"default"!==g&&"medium"!==g&&r["fontSize".concat(a(g))]),focusable:"false",viewBox:y,color:h,"aria-hidden":!v||void 0,role:v?"img":void 0,ref:t},x),n,v?c.createElement("title",null,v):null)}));me.muiName="SvgIcon";var pe=de((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(me);function ge(e,t){var n=function(t,n){return c.createElement(pe,(0,o.Z)({ref:n},t),e)};return n.muiName=pe.muiName,c.memo(c.forwardRef(n))}function he(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function r(){for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=this,c=function(){e.apply(o,a)};clearTimeout(t),t=setTimeout(c,n)}return r.clear=function(){clearTimeout(t)},r}function ve(e,t){return function(){return null}}function be(e,t){return c.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}function ye(e){return e&&e.ownerDocument||document}function xe(e){return ye(e).defaultView||window}function we(e){return function(){return null}}function Ee(e,t){"function"==typeof e?e(t):e&&(e.current=t)}function ke(e,t,n,r,a){return null}function Ae(e){var t=e.controlled,n=e.default,r=(e.name,e.state,c.useRef(void 0!==t).current),a=c.useState(n),i=a[0],o=a[1];return[r?t:i,c.useCallback((function(e){r||o(e)}),[])]}var Me="undefined"!=typeof window?c.useLayoutEffect:c.useEffect;function Se(e){var t=c.useRef(e);return Me((function(){t.current=e})),c.useCallback((function(){return t.current.apply(void 0,arguments)}),[])}function Ne(e,t){return c.useMemo((function(){return null==e&&null==t?null:function(n){Ee(e,n),Ee(t,n)}}),[e,t])}function Oe(e){var t=c.useState(e),n=t[0],r=t[1],a=e||n;return c.useEffect((function(){null==n&&r("mui-".concat(Math.round(1e5*Math.random())))}),[n]),a}var Le=n(3935),Ze=!0,Re=!1,Te=null,Ce={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function je(e){e.metaKey||e.altKey||e.ctrlKey||(Ze=!0)}function ze(){Ze=!1}function _e(){"hidden"===this.visibilityState&&Re&&(Ze=!0)}function Ie(e){var t,n,r,a=e.target;try{return a.matches(":focus-visible")}catch(i){}return Ze||(n=(t=a).type,!("INPUT"!==(r=t.tagName)||!Ce[n]||t.readOnly)||"TEXTAREA"===r&&!t.readOnly||!!t.isContentEditable)}function We(){Re=!0,window.clearTimeout(Te),Te=window.setTimeout((function(){Re=!1}),100)}function Be(){return{isFocusVisible:Ie,onBlurVisible:We,ref:c.useCallback((function(e){var t,n=Le.findDOMNode(e);null!=n&&((t=n.ownerDocument).addEventListener("keydown",je,!0),t.addEventListener("mousedown",ze,!0),t.addEventListener("pointerdown",ze,!0),t.addEventListener("touchstart",ze,!0),t.addEventListener("visibilitychange",_e,!0))}),[])}}},5601:function(e,t,n){"use strict";var r=n(5318),a=n(862);t.Z=void 0;var i=a(n(7294)),o=(0,r(n(8786)).default)(i.createElement("path",{d:"M11.71 15.29l2.59-2.59c.39-.39.39-1.02 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71z"}),"ArrowRightRounded");t.Z=o},8786:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(637)},8334:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.list,n=e.isHorizontal,a=void 0!==n&&n;return r.createElement("ul",null,t.map((function(e){return r.createElement("li",{key:e,className:"font-noto-serif "+(a?"mx-1":"")},e+" ")})))}},7543:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.title,n=e.body;return r.createElement("section",{className:"bg-secondary pt-4 pb-6 bg-opacity-70 backdrop-filter backdrop-blur-sm text-light"},t&&r.createElement("div",{className:"container flex flex-col justify-center items-center"},r.createElement("div",{className:"px-2"},r.createElement("h2",{className:"sm:text-3xl lg:text-4xl text-xl"},t))),r.createElement("div",{className:"px-3 text-lg tracking-wide font-serif font-thin"},n))}},4431:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7294),a=n(2359);var i=function(e){var t=e.children;return r.createElement("div",{className:"flex justify-center items-center"},t)},o=n(5444);var c=function(e){var t=e.children;return r.createElement("div",{className:"mx-1"},t)};var u=function(e){var t=e.content,n=e.href;return r.createElement(c,null,r.createElement(o.Link,{className:"hover:underline text-light",to:n,activeClassName:"underline font-bold"},t))};var l=function(e){var t=e.href,n=e.content;return r.createElement(c,null,r.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},n))},f=(0,r.memo)((function(){return r.createElement(a.S,{src:"../images/GitHub-Mark-Light-32px.png",alt:"GitHub Logo",width:32,height:32,__imageData:n(7035)})}));var s=function(){return r.createElement("div",{className:"bg-primary bg-opacity-90 backdrop-filter backdrop-blur-lg pt-6 pb-14"},r.createElement("div",{className:"container"},r.createElement("div",{className:"flex justify-center text-center px-3"},r.createElement("div",{className:"text-3xl md:text-4xl lg:text-5xl text-light"},r.createElement("h1",null,"Mark Williams Web Development")))),r.createElement("div",{className:"mb-3 absolute inset-x-0 bottom-0 sm:left-1/3"},r.createElement(i,null,r.createElement(u,{href:"/",content:"Home"}),r.createElement(u,{href:"/projects",content:"Projects"}),r.createElement(l,{href:"https://github.com/MarkWilliamsDev",content:r.createElement(f,null)}))))};var d=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(s,null),r.createElement("div",{className:"mt-14"},t))}},4132:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(7294),a=n(2359),i=n(5601),o=n(8334),c=function(e){var t=e.ListTitle,n=e.list,a=(0,r.useState)(!1),c=a[0],u=a[1],l=function(){u(!c)};return r.createElement(r.Fragment,null,r.createElement("div",{className:"flex justify-center pt-2",onClick:l,onKeyDown:l,"aria-expanded":c,role:"button",tabIndex:0},r.createElement("div",null,r.createElement("div",{className:"relative text-xl font-sans"},r.createElement("div",{className:"absolute -inset-x-8 -inset-y-1 flex"},r.createElement("div",{className:"toggle-arrow "+(c?"toggled-toggle-arrow":"")+" transform hover:scale-110"},r.createElement(i.Z,{fontSize:"large"}))),r.createElement("div",{className:"select-none"},t)))),r.createElement("div",{className:"flex justify-center md:pl-20"},c?r.createElement(o.Z,{list:n}):""))},u=n(7543),l=n(4431),f=["React","Next.js","Redux","MongoDB/Mongoose","Bootstrap","Vercel"],s=["Stripe","Auth0","Eventbrite"],d=["React","Next.js","MongoDB/Mongoose","MobX","Bootstrap"];var m=function(){return r.createElement(l.Z,null,r.createElement("div",{className:"flex flex-col space-y-32"},r.createElement(u.Z,{title:r.createElement("a",{href:"https://gigcreate.com/features-of-gig-create",className:"hover:underline",target:"_blank",rel:"noreferrer"},"GigCreate.com"),body:r.createElement(r.Fragment,null,r.createElement("div",{className:"flex justify-center"},r.createElement("div",{className:"mt-3 mb-2"},r.createElement("div",{className:"transform hover:scale-110"},r.createElement("a",{href:"https://gigcreate.com/features-of-gig-create",target:"_blank",rel:"noreferrer"},r.createElement(a.S,{className:"w-12 sm:w-16 ",src:"../images/gigCreateLogo.png",alt:"Logo for GigCreate.com",width:85,height:85,quality:100,__imageData:n(6144)}))))),r.createElement("div",{className:"md:mx-56 mt-2 space-y-3"},r.createElement("p",null,"A live music event planning web app using React with Next.js."),r.createElement("p",null,"Originally created using the MERN stack, this app was migrated to Next.js a few months prior to going into production.")),r.createElement("div",{className:"flex flex-col pt-2"},r.createElement(c,{ListTitle:"Technologies",list:[].concat(f,s)})))}),r.createElement(u.Z,{title:"GigCreate.com Support App",body:r.createElement(r.Fragment,null,r.createElement("div",{className:"flex items-center mt-2"},r.createElement("div",{className:"md:mx-56"},r.createElement("p",null,"Support app for general and direct communication with users. Demo version not yet available."))),r.createElement("div",{className:"flex flex-col pt-2"},r.createElement(c,{ListTitle:"Technologies",list:d})))})))}},7035:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/d56df49a807a9fd06eb1667a84d3810e/914ee/GitHub-Mark-Light-32px.png","srcSet":"/static/d56df49a807a9fd06eb1667a84d3810e/22867/GitHub-Mark-Light-32px.png 8w,\\n/static/d56df49a807a9fd06eb1667a84d3810e/fbc98/GitHub-Mark-Light-32px.png 16w,\\n/static/d56df49a807a9fd06eb1667a84d3810e/914ee/GitHub-Mark-Light-32px.png 32w","sizes":"(min-width: 32px) 32px, 100vw"},"sources":[{"srcSet":"/static/d56df49a807a9fd06eb1667a84d3810e/5d252/GitHub-Mark-Light-32px.webp 8w,\\n/static/d56df49a807a9fd06eb1667a84d3810e/e789a/GitHub-Mark-Light-32px.webp 16w,\\n/static/d56df49a807a9fd06eb1667a84d3810e/ef6ff/GitHub-Mark-Light-32px.webp 32w","type":"image/webp","sizes":"(min-width: 32px) 32px, 100vw"}]},"width":32,"height":32}')},6144:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/f587b8021aec704adf905c9d0b7b1f6f/817fd/gigCreateLogo.png","srcSet":"/static/f587b8021aec704adf905c9d0b7b1f6f/4f628/gigCreateLogo.png 21w,\\n/static/f587b8021aec704adf905c9d0b7b1f6f/219e8/gigCreateLogo.png 43w,\\n/static/f587b8021aec704adf905c9d0b7b1f6f/817fd/gigCreateLogo.png 85w,\\n/static/f587b8021aec704adf905c9d0b7b1f6f/ba84f/gigCreateLogo.png 170w","sizes":"(min-width: 85px) 85px, 100vw"},"sources":[{"srcSet":"/static/f587b8021aec704adf905c9d0b7b1f6f/c8ca4/gigCreateLogo.webp 21w,\\n/static/f587b8021aec704adf905c9d0b7b1f6f/03e91/gigCreateLogo.webp 43w,\\n/static/f587b8021aec704adf905c9d0b7b1f6f/0c6e7/gigCreateLogo.webp 85w,\\n/static/f587b8021aec704adf905c9d0b7b1f6f/85dcc/gigCreateLogo.webp 170w","type":"image/webp","sizes":"(min-width: 85px) 85px, 100vw"}]},"width":85,"height":85}')}}]);
//# sourceMappingURL=component---src-pages-projects-js-e59c5287de89177695f4.js.map