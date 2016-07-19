// @flow

import assert from 'assert';
import { describe, it } from 'mocha';

import HexletHtmlBuilder from '../src/index';
import buildNode from '../src/buildNode';

describe('HtmlBuilder', () => {
  it('#parse', () => {
    const data = ['html', [
      ['meta', [
        ['title', 'hello, hexlet!'],
      ]],
      ['body', [
        ['h1', { class: 'header' }, 'html builder example'],
        ['div', [
          ['span', 'span text'],
          ['hr'],
        ]],
      ]],
    ]];

    const ast = HexletHtmlBuilder.parse(data);
    const expected = buildNode('html', {}, '', [
      buildNode('meta', {}, '', [
        buildNode('title', {}, 'hello, hexlet!'),
      ]),
      buildNode('body', {}, '', [
        buildNode('h1', { class: 'header' }, 'html builder example'),
        buildNode('div', {}, '', [
          buildNode('span', {}, 'span text'),
          buildNode('hr'),
        ]),
      ]),
    ]);

    assert.deepEqual(ast, expected);
  });

  it('#toString', () => {
    const data = ['html', [
      ['meta', [
        ['title', 'hello, hexlet!'],
      ]],
      ['body', [
        ['div', { class: 'separator' }],
        ['h1', { class: 'header' }, 'html builder example'],
        ['div', [
          ['img', { class: 'image', href: '#' }],
          ['span', 'span text2'],
        ]],
      ]],
    ]];

    const ast = HexletHtmlBuilder.parse(data);
    const expected = `<html><meta><title>hello, hexlet!</title></meta><body><div class="separator"></div><h1 class="header">html builder example</h1><div><img class="image" href="#"><span>span text2</span></div></body></html>`;
    assert.equal(ast.toString(), expected);
  });
});
