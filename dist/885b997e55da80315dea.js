(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{370:function(e,t,r){},371:function(e,t,r){},372:function(e,t,r){},404:function(e,t,r){"use strict";var n=r(370);r.n(n).a},405:function(e,t,r){"use strict";var n=r(371);r.n(n).a},406:function(e,t,r){"use strict";var n=r(372);r.n(n).a},409:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page-reviews page"},[t("div",{staticClass:"page-container"},[t("h2",{staticClass:"page-title"},[this._v("Блок «Отзывы»")]),this.editorVisible?t("review-form",{attrs:{selectedReview:this.currentReview}}):this._e(),t("review-list",{attrs:{reviewsList:this.reviews}})],1)])};n._withStripped=!0;var i=r(136),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"add-review",attrs:{method:"POST"},on:{submit:function(t){return t.preventDefault(),e.postReview(t)}}},[r("div",{staticClass:"form__title"},[e._v("Добавить отзыв")]),r("hr"),r("div",{staticClass:"form__col"},[r("div",{staticClass:"left__col"},[r("div",{staticClass:"reviews-editor__avatar eror__wrapper",on:{drop:function(t){return t.preventDefault(),e.photoChanged(t)}}},[e.renderedPhoto.length>0?r("div",{staticClass:"avatar__wrapper"},[e.renderedPhoto.length>0?r("img",{staticClass:"file-drop__background-pi",attrs:{src:e.renderedPhoto}}):e._e()]):r("div",{staticClass:"avatar__wrapper"},[r("div",{staticClass:"avatar__man"})]),r("a",{staticClass:"reviews-editor__avatar-btn",attrs:{type:"button"},on:{click:function(t){return e.$refs.file.click()}}},[e._v("Добавить фото"),r("input",{ref:"file",staticClass:"reviews-editor__input",attrs:{type:"file",accept:"image/png, image/jpeg"},on:{change:function(t){return e.photoChanged(t)}}})])])]),r("div",{staticClass:"right__col"},[r("div",{staticClass:"form__row form__row-up"},[r("label",{staticClass:"form__label--review form__label--up",attrs:{for:"name-user"}},[e._v("Имя автора"),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.selectedReview.author,expression:"selectedReview.author",modifiers:{trim:!0}}],staticClass:"reviews-input",attrs:{type:"text",name:"name-user",required:""},domProps:{value:e.selectedReview.author},on:{input:function(t){t.target.composing||e.$set(e.selectedReview,"author",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("label",{staticClass:"form__label--review form__label--up"},[e._v("Титул автора"),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.selectedReview.occ,expression:"selectedReview.occ",modifiers:{trim:!0}}],staticClass:"reviews-input",attrs:{type:"text",required:""},domProps:{value:e.selectedReview.occ},on:{input:function(t){t.target.composing||e.$set(e.selectedReview,"occ",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"form__row"},[r("label",{staticClass:"form__label--review form__label--message"},[e._v("Отзыв"),r("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:e.selectedReview.text,expression:"selectedReview.text",modifiers:{trim:!0}}],staticClass:"message",attrs:{rows:"3"},domProps:{value:e.selectedReview.text},on:{input:function(t){t.target.composing||e.$set(e.selectedReview,"text",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])]),r("div",{staticClass:"btn-reviews"},[r("button",{staticClass:"btn-cancel",attrs:{type:"reset"},on:{click:e.cancelEditor}},[e._v("Отмена")]),r("button",{staticClass:"btn-save",attrs:{disabled:"PENDING"===e.submitStatus}},[e._v("Сохранить")])])])])])};function a(e,t,r,n,i,s,a){try{var o=e[s](a),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(n,i)}function o(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var s=e.apply(t,r);function o(e){a(s,n,i,o,c,"next",e)}function c(e){a(s,n,i,o,c,"throw",e)}o(void 0)})}}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}s._withStripped=!0;var u={data:function(){return{submitStatus:null,renderedPhoto:""}},computed:{editorTitle:function(){return this.selectedReview.id<0?"Добавление Отзыва":"Редактирование Отзыва"}},props:{selectedReview:{type:Object,default:function(){},required:!0}},mounted:function(){this.renderedPhoto=this.selectedReview.photo.length>0?"https://webdev-api.loftschool.com/"+this.selectedReview.photo:""},methods:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){c(e,t,r[t])})}return e}({},Object(i.b)("reviews",["upsertReview","closeReviewInEditor"]),{postReview:function(){var e=o(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.upsertReview(this.selectedReview);case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:return e.prev=7,this.submitStatus="OK",e.finish(7);case 10:case"end":return e.stop()}},e,this,[[0,5,7,10]])}));return function(){return e.apply(this,arguments)}}(),cancelEditor:function(){var e=o(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.closeReviewInEditor();case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}},e,this,[[0,5]])}));return function(){return e.apply(this,arguments)}}(),photoChanged:function(){var e=event.target.files||event.dataTransfer.files;e.length&&(this.selectedReview.photo=e[0],this.renderImageFile(e[0]))},renderImageFile:function(e){var t=this,r=new FileReader;try{r.readAsDataURL(e),r.onloadend=function(){t.renderedPhoto=r.result}}catch(e){throw new Errow("Ошибка при чтении файла")}}})},l=(r(404),r(51)),v=Object(l.a)(u,s,[],!1,null,"4a18c47a",null);v.options.__file="src/admin/components/review-form/review-form.vue";var f=v.exports,p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"new-reviews"},[r("ul",{staticClass:"reviews__list"},[r("li",{staticClass:"reviews__item"},[r("a",{staticClass:"reviews-list__add-wrapper",on:{click:function(t){return t.preventDefault(),e.newReview(t)}}},[r("div",{staticClass:"reviews-list__add-btn"}),r("div",{staticClass:"reviews-list__add-text"},[e._v("Добавить отзыв")])])]),e._l(e.reviewsList,function(e){return r("li",{key:e.id,staticClass:"reviews__item"},[r("review",{attrs:{review:e}})],1)})],2)])};p._withStripped=!0;var d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"review"},[r("div",{staticClass:"user-info"},[r("div",{staticClass:"user-avatar__wrapper"},[r("img",{attrs:{src:"https://webdev-api.loftschool.com/"+e.review.photo}})]),r("div",{staticClass:"user"},[r("div",{staticClass:"user-name"},[e._v(e._s(e.review.author))]),r("div",{staticClass:"user-position"},[e._v(e._s(e.review.occ))])])]),r("hr"),r("div",{staticClass:"review-text"},[e._v(e._s(e.review.text))]),r("div",{staticClass:"review-btns"},[r("button",{staticClass:"btn-edit",on:{click:function(t){return t.preventDefault(),e.correctReview(t)}}}),r("button",{staticClass:"btn-del",on:{click:function(t){return t.preventDefault(),e.removeReview(t)}}})])])};function w(e,t,r,n,i,s,a){try{var o=e[s](a),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(n,i)}function m(e){return function(){var t=this,r=arguments;return new Promise(function(n,i){var s=e.apply(t,r);function a(e){w(s,n,i,a,o,"next",e)}function o(e){w(s,n,i,a,o,"throw",e)}a(void 0)})}}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}d._withStripped=!0;var b={data:function(){return{}},props:{review:{type:Object,default:function(){},required:!0}},methods:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){h(e,t,r[t])})}return e}({},Object(i.b)("reviews",["deleteReview","openReviewInEditor"]),{removeReview:function(){var e=m(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.deleteReview(this.review);case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}},e,this,[[0,5]])}));return function(){return e.apply(this,arguments)}}(),correctReview:function(){var e=m(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.openReviewInEditor(this.review);case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}},e,this,[[0,5]])}));return function(){return e.apply(this,arguments)}}()})},_=Object(l.a)(b,d,[],!1,null,null,null);function g(e,t,r,n,i,s,a){try{var o=e[s](a),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(n,i)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}_.options.__file="src/admin/components/review/review.vue";var R={data:function(){return{submitStatus:null}},components:{review:_.exports},props:{reviewsList:{type:Array,default:function(){return[]},required:!0}},methods:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){y(e,t,r[t])})}return e}({},Object(i.b)("reviews",["openNewReviewInEditor"]),{newReview:function(){var e,t=(e=regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.openNewReviewInEditor();case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}},e,this,[[0,5]])}),function(){var t=this,r=arguments;return new Promise(function(n,i){var s=e.apply(t,r);function a(e){g(s,n,i,a,o,"next",e)}function o(e){g(s,n,i,a,o,"throw",e)}a(void 0)})});return function(){return t.apply(this,arguments)}}()})},O=(r(405),Object(l.a)(R,p,[],!1,null,"b81f1712",null));function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){j(e,t,r[t])})}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}O.options.__file="src/admin/components/review-list/review-list.vue";var x={components:{reviewForm:f,reviewList:O.exports},data:function(){return{}},computed:C({},Object(i.c)("reviews",{reviews:function(e){return e.reviews},currentReview:function(e){return e.currentReview},editorVisible:function(e){return e.editorVisible}})),created:function(){this.fetchReviews()},methods:C({},Object(i.b)("reviews",["fetchReviews"]))},P=(r(406),Object(l.a)(x,n,[],!1,null,null,null));P.options.__file="src/admin/pages/reviews.vue";t.default=P.exports}}]);