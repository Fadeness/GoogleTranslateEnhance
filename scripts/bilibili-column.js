// ==UserScript==
// @name         bilibili专栏正文选择
// @namespace    https://github.com/Fadeness/Tamper-Monkey-Scripts
// @version      0.1
// @description  使bilibili专栏正文能够被选择
// @author       Fadeness
// @match        https://www.bilibili.com/read/*
// @grant        none
// @require      https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    const text = $('.article-holder p');

    text.css("user-select", "text");
})();