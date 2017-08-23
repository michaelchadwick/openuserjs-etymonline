// ==UserScript==
// @name         Etymonline
// @namespace    http://www.etymonline.com
// @version      1.0
// @description  Make Etymonline responsive
// @author       Michael Chadwick
// @match        http://www.etymonline.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    addGlobalStyle('#logo img { max-width: 100%; height: auto; }');
    addGlobalStyle('#search input[type="text"] { width: 100%; }');
    addGlobalStyle('@media (min-width: 480px) { #search input[type="text"] { width: 40%; }}');
    addGlobalStyle('#container { margin: 5px; }');
    addGlobalStyle('@media (min-width: 480px) { #container { margin: 1em; }}');
    addGlobalStyle('#browse ul { border: none; }');
    addGlobalStyle('@media (min-width: 768px) { #browse ul { border: 1px solid #000000; }}');
})();
