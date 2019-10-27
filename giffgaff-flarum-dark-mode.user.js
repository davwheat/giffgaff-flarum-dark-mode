// ==UserScript==
// @name           giffgaff Flarum Dark Mode
// @description    Adds a dark mode to giffgaff's community forum.
// @author         David Wheatley <davidwheatley03@gmail.com> (https://github.com/davwheat/giffgaff-flarum-dark-mode)
// @namespace      https://github.com/davwheat/giffgaff-flarum-dark-mode
// @version        1.1
// @icon           https://github.com/davwheat/giffgaff-flarum-better-post-dates/blob/master/icon.png?raw=true
// @match          *://community.giffgaff.com/*
// @grant          none
// @run-at         document-end
// ==/UserScript==

$(() => {
  $.get(
    "https://raw.githubusercontent.com/davwheat/giffgaff-flarum-dark-mode/master/dark.min.css"
  ).done(data => {
    $("head").append("<style>" + data + "</style>");

    console.log("Applied dark theme!");
  });
  
  $("body").addClass("dark");
});
