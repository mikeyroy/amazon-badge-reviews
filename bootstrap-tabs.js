/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=bd2cf8dacaf13a4e1519)
 * Config saved to config.json and https://gist.github.com/bd2cf8dacaf13a4e1519
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";function a(a){return this.each(function(){var n=t(this),i=n.data("bs.tab");i||n.data("bs.tab",i=new e(this)),"string"==typeof a&&i[a]()})}var e=function(a){this.element=t(a)};e.VERSION="3.2.0",e.prototype.show=function(){var a=this.element,e=a.closest("ul:not(.dropdown-menu)"),n=a.data("target");if(n||(n=a.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,"")),!a.parent("li").hasClass("active")){var i=e.find(".active:last a")[0],s=t.Event("show.bs.tab",{relatedTarget:i});if(a.trigger(s),!s.isDefaultPrevented()){var r=t(n);this.activate(a.closest("li"),e),this.activate(r,r.parent(),function(){a.trigger({type:"shown.bs.tab",relatedTarget:i})})}}},e.prototype.activate=function(a,e,n){function i(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),a.addClass("active"),r?(a[0].offsetWidth,a.addClass("in")):a.removeClass("fade"),a.parent(".dropdown-menu")&&a.closest("li.dropdown").addClass("active"),n&&n()}var s=e.find("> .active"),r=n&&t.support.transition&&s.hasClass("fade");r?s.one("bsTransitionEnd",i).emulateTransitionEnd(150):i(),s.removeClass("in")};var n=t.fn.tab;t.fn.tab=a,t.fn.tab.Constructor=e,t.fn.tab.noConflict=function(){return t.fn.tab=n,this},t(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault(),a.call(t(this),"show")})}(jQuery);