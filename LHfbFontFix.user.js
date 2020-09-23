// ==UserScript==
// @name         Facebook new theme font fix
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Fix lỗi tiếng Việt trên facebook giao diện mới
// @description:en  Fix lỗi tiếng Việt trên facebook giao diện mới
// @author       Le Hoang
// @match        https://*.facebook.com/
// ==/UserScript==
function addGlobalStyle(css) {
    var body, style;
    body = document.getElementsByTagName('body')[0];
    if (!body) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    body.appendChild(style);
}

addGlobalStyle(
    `* {font-family: "Segoe UI", Arial, sans-serif !important;
}
.rrkovp55 { font-family: "Segoe UI", Arial, sans-serif !important; }
`);
