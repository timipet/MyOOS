!function(t){var e={};function a(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=329)}({329:function(t,e,a){"use strict";var n;(n=jQuery)(function(){window.rankMathOptions={init:function(){this.misc(),this.preview(),this.scCache(),rankMathAdmin.variableInserter(),this.searchEngine.init(),this.addressFormat()},searchEngine:{init:function(){this.form=n(".rank-math-search-options"),this.wrap=this.form.closest(".rank-math-wrap-settings"),this.input=this.form.find("input"),this.select=this.form.find("select"),this.tabs=this.wrap.find(".rank-math-tabs"),this.panels=this.wrap.find(".rank-math-tab"),this.indexes={},this.buildIndex(),this.events()},events:function(){var t=this,e=!0,a=t.tabs.find(">.rank-math-tabs-navigation"),r=n('<div class="rank-math-search-dropdown"></div>');t.tabs.find(">.rank-math-tabs-content").prepend('<div class="rank-math-setting-search-empty hidden">No results found.</div>'),t.form.append(r),t.select.val(rankMath.optionPage),r.hide().empty();var o=_.debounce(function(e){t.wrap.addClass("searching"),t.panels.show(),t.searchOptions(e,t.wrap)},300),i=_.debounce(function(e){t.wrap.addClass("searching"),t.searchIndexes(e,r)},300);t.form.on("click",".clear-search",function(e){e.preventDefault(),t.input.val(""),t.clearSearch(a)}),t.select.on("change",function(){e=t.select.val()===rankMath.optionPage,r.hide().empty(),e||(t.clearSearch(a),r.append(t.indexes[t.select.val()])),t.input.trigger("input")}),t.input.on("input",function(){if(""===t.input.val())return t.clearSearch(a,!e&&r),!1;e?o(t.input.val().toLowerCase()):i(t.input.val().toLowerCase())}),r.on("click",".cmb-row",function(){var e=n(this);window.location=location.pathname+"?page=rank-math-options-"+t.select.val()+"#"+e.closest(".dropdown-tab").attr("id")});var s=n(".rank-math-search-options, .rank-math-search-options *, .rank-math-search-dropdown, .rank-math-search-dropdown *");n("body").on("click",function(t){n(t.target).is(s)||r.hide()})},searchIndexes:function(t,e){if(t.trim().length>=1){var a=0;e.find(".cmb-row").hide().each(function(){var e=n(this);e.text().trim().toLowerCase().includes(t)&&(e.show(),++a)}),e.show(),e.toggleClass("empty",0===a)}},searchOptions:function(t,e){if(t.trim().length>=1){n(".cmb-row").hide().each(function(){var e=n(this);e.hasClass("cmb-type-title")?e.hide():e.text().trim().toLowerCase().includes(t)&&e.show()});var a=n(".cmb-row:visible");0===a.length?e.addClass("search-no-results"):(e.removeClass("search-no-results"),a.each(function(){n(this).find("input, select").each(function(){n('span[data-field="'+n(this).attr("name")+'"]').each(function(){rankMathAdmin.loopDependencies(n(this).closest(".rank-math-cmb-dependency"))})})}))}},clearSearch:function(t,e){e=e||!1,this.wrap.removeClass("searching search-no-results"),n(">a.active",t).trigger("click"),e?e.hide():(n(".cmb-row").show(),n(".rank-math-cmb-dependency",".cmb-form, .rank-math-metabox-wrap").each(function(){rankMathAdmin.loopDependencies(n(this))}))},buildIndex:function(){var t=localStorage.getItem("rank-math-option-search-index"),e=localStorage.getItem("rank-math-option-search-premium"),a=void 0===t||rankMath;a=void 0===e||e!==rankMath.hasPremium,["general","titles","sitemap"].forEach(function(t){this.getIndex(t,a)},this),a&&(localStorage.setItem("rank-math-option-search-index",rankMath.version),localStorage.setItem("rank-math-option-search-premium",rankMath.hasPremium))},getIndex:function(t,e){var a=this;e?n("<div/>").load(rankMath.adminurl+"?page=rank-math-options-"+t,function(e,r){if("error"!==r){var o=n(e).find(".rank-math-tabs-content");o.find(".rank-math-tab").removeClass().addClass("dropdown-tab"),o.find(".cmb-row").each(function(){var t=n(this);(t.hasClass("cmb-type-title")||t.hasClass("cmb-type-notice"))&&t.remove(),t.find(".cmb-td").children(":not(.cmb2-metabox-description)").remove(),t.find("label,.cmb2-metabox-description").unwrap(),t.removeAttr("data-fieldtype")}),o=o.html().replace(/(\r\n\t|\n|\r\t)/gm,""),a.indexes[t]=n(o),localStorage.setItem("rank-math-option-"+t+"-index",o)}}):a.indexes[t]=n(localStorage.getItem("rank-math-option-"+t+"-index"))}},scCache:function(){n(".console-cache-delete").on("click",function(t){t.preventDefault();var e=n(this),a=e.data("days");window.confirm((-1===a?"You are about to delete your whole Cache. Every dataset older than 90 days is lost forever!":"You are about to delete your 90 days Cache?")+" Are you sure you want to continue?")&&(e.prop("disabled",!0),rankMathAdmin.ajax("search_console_delete_cache",{days:a},"GET").always(function(){e.prop("disabled",!1)}).done(function(t){t&&t.success&&(rankMathAdmin.addNotice("Cache deleted.","success",n("h1",".rank-math-wrap-settings")),n(".rank-math-console-db-info").remove(),n("#console-updating-manually-progress").before(t.message))}))}),n(".console-cache-update-manually").on("click",function(t){t.preventDefault();var e=n(this),a=n("#console_caching_control").val();e.prop("disabled",!0),rankMathAdmin.ajax("search_console_get_cache",{days:a},"GET").done(function(t){t&&t.success?rankMathAdmin.addNotice(t.message,"success",n("h1.page-title")):rankMathAdmin.addNotice("Unable to update cache due to: "+t.error,"error",n("h1.page-title"))})})},addressFormat:function(){var t=n("body"),e=n("input[type=text], textarea",".rank-math-address-format");if(e.length){e.attr("autocomplete","off"),e.wrap('<div class="rank-math-variables-wrap"/>');var a=e.parent(".rank-math-variables-wrap");a.append('<a href="#" class="rank-math-variables-button button button-secondary button-address"><span class="dashicons dashicons-arrow-down-alt2"></span></a>');var r=n("<ul/>"),o=n('<div class="rank-math-variables-dropdown"></div>');n.each({"{address} {locality}, {region} {postalcode}":"(New York, NY 12345)","{address} {postalcode}, {locality} {region}":"(New York 12345, NY)","{address} {locality} {postalcode}":"(New York NY 12345)","{postalcode} {region} {locality} {address}":"(12345 NY New York)","{address} {locality}":"(New York NY)"},function(t,e){r.append('<li data-var="'+e+'"><strong>'+t+"</strong></li>")}),o.append(r),n("rank-math-variables-wrap:eq(0)").append(o);var i=n(".rank-math-variables-button, .rank-math-variables-button *, .rank-math-variables-dropdown, .rank-math-variables-dropdown *");n(t).on("click",function(t){n(t.target).is(i)||o.hide()});var s=o.find("input"),c=o.find("li");n(a).on("click",".rank-math-variables-button",function(t){t.preventDefault(),n(this).after(o),c.show(),o.show(),s.val("").focus()}),o.on("click","li",function(t){t.preventDefault();var e=n(this);e.closest(".rank-math-variables-wrap").find("textarea").val(e.find("strong").text())})}},misc:function(){void 0!==jQuery.fn.select2&&n("[data-s2-pages]").select2({ajax:{url:rankMath.ajaxurl+"?action=rank_math_search_pages",dataType:"json",delay:250},width:"100%",minimumInputLength:3}),n("#htaccess_accept_changes").on("change",function(){this.checked?n("#htaccess_content").prop("readonly",!1):n("#htaccess_content").prop("readonly",!0)}),n(".reset-options").on("click",function(){return!!confirm("Are you sure? You want to reset settings.")&&(n(window).off("beforeunload"),!0)});var t=n(".rank-math-tabs");setTimeout(function(){localStorage.removeItem(t.attr("id"))},1e3),n(".save-options").on("click",function(){var e=n("> .rank-math-tabs-navigation > a.active",t);return localStorage.setItem(t.attr("id"),e.attr("href")),n(window).off("beforeunload"),!0});var e=!1;n(window).on("load",function(){n(".cmb-form").on("change","input, textarea, select",function(){e=!0})}),n(window).on("beforeunload",function(){if(e)return"Are you sure? You didn't finish the form!"}),n(".custom-sep").on("keyup",function(){var t=n(this),e=t.text();t.closest("li").find("input.cmb2-option").val(e).trigger("change")})},preview:function(){n("[data-preview]").on("change",function(){var t=n(this),e=null,a="";if(t.is(":radio")&&(e=t.closest(".cmb-td")),null!==e)if(e.hasClass("done"))t.is(":checked")&&(a=e.find("h5")).text(a.data("title").format(t.val()));else if(e.addClass("done"),"title"===t.data("preview")){var r="";r+='<div class="rank-math-preview-title" data-title="Preview"><div>',r+='<h5 data-title="'+rankMath.postTitle+" {0} "+rankMath.blogName+'"></h5>',r+="<span>"+rankMath.postUri+"</span>",e.append(r+="</div></div>"),(a=e.find("h5")).text(a.data("title").format(t.val()))}}).trigger("change")}},window.rankMathOptions.init()})}});