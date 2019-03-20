// ==UserScript==
// @name         GoogleTranslateEnhance
// @namespace    https://github.com/Fadeness/GoogleTranslateEnhance
// @version      0.1
// @description  enhance the user experience of Google Translate
// @author       Fadeness
// @match        https://translate.google.cn/*
// @match        https://translate.google.com/*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    const source = $("#source");

    source.on("mouseenter", function() {
        $(this).select();
    })
})();
