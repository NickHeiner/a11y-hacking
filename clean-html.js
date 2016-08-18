#! /usr/bin/env node

const through = require('through'),
    cheerio = require('cheerio');

process.stdin
    .pipe(through(function(data) {
        this.queue(onInput(data.toString()));
    }))
    .pipe(process.stdout);

function onInput(html) {
    const $ = cheerio.load(html);

    $('[class!=""]').attr('class', null);

    return $.html();
}
