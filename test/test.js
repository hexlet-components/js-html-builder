// @flow

import assert from 'assert';
import { describe, it } from 'mocha';

import HexletHtmlBuilder from '../src/index';

// { type: tagsList, body: [ { type: tag, name: <>, body: <>, options: {} ] }

describe('HtmlBuilder', () => {
  it('#build', () => {
    const data = [
      ['meta', [
        ['title', 'hello, hexlet!'],
      ]],
      ['body', [
        ['h1', { class: 'header' }, 'html builder example'],
        ['div', [
          ['span', 'span text'],
          ['span', 'span text2'],
        ]],
      ]],
    ];

    const result = HexletHtmlBuilder.build(data);
    const expected = `<meta><title>hello, hexlet!</title></meta><body><h1 class="header">html builder example</h1><div><span>span text</span><span>span text2</span></div></body>`;

    assert.equal(result, expected);
  });
});
