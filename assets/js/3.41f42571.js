(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{166:function(t,e,n){"use strict";var r=n(2),i=n(23),o=n(18),s=n(6),a=[].sort,u=[1,2,3];r(r.P+r.F*(s(function(){u.sort(void 0)})||!s(function(){u.sort(null)})||!n(19)(a)),"Array",{sort:function(t){return void 0===t?a.call(o(this)):a.call(o(this),i(t))}})},168:function(t,e,n){"use strict";n.r(e);n(24),n(166);var r={computed:{recentPosts:function(){return this.$site.pages.filter(function(t){return"main"!==t.frontmatter.categories}).sort(function(t,e){var n=new Date(t.frontmatter.date).getTime()-new Date(e.frontmatter.date).getTime();return n<0?-1:n>0?1:0}).reverse().slice(0,5)}}},i=n(0),o=Object(i.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),t._l(t.recentPosts,function(e){return n("div",{key:e.frontmatter.date},[n("router-link",{attrs:{to:e.path}},[n("ul",[n("li",[t._v(t._s(e.title)+" "+t._s(new Date(e.frontmatter.date).toLocaleDateString()))])])])],1)})],2)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",[this._v("Siste innlegg")])])}],!1,null,null,null);o.options.__file="BlogPosts.vue";e.default=o.exports}}]);