!function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=381)}({381:function(t,e,r){"use strict";var n;(n=jQuery)(function(){window.rankMathValidate={init:function(){this.extendLibrary(),this.watchFields()},extendLibrary:function(){n.validator.addMethod("regex",function(t,e,r){r="string"==typeof r?r:n(e).data("validate-pattern");var a=RegExp(r);return this.optional(e)||a.test(t)},rankMath.validationl10n.regexErrorDefault),n.extend(n.validator.messages,{required:rankMath.validationl10n.requiredErrorDefault,email:rankMath.validationl10n.emailErrorDefault,url:rankMath.validationl10n.urlErrorDefault}),n.extend(n.validator.defaults,{errorClass:"invalid"})},watchFields:function(){var t=this;n(".rank-math-validate-field").on("focus","input[type=text], input[type=password], input[type=url], input[type=email], input[type=number], textarea",function(){t.fieldValidation(n(this).closest("form"))})},fieldValidation:function(t){return"1"!==t.data("validated")&&(t.data("validated","1").validate(),!0)}},window.rankMathValidate.init()})}});