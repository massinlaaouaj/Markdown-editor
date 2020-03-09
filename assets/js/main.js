"use strict";

var marked = require('marked');

//console.log(marked('# Hola', { sanitize: true }));

const markdownview = document.querySelector('#markdown');
const htmlview = document.querySelector('#html');

const rendertomarkdown = (markdown) => {
    htmlview.innerHTML = marked(markdown, { sanitize: true });
}

markdownview.addEventListener('keyup', e => {
    const currentcontent = e.target.value;
    rendertomarkdown(currentcontent);
})


