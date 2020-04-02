# js-html-builder

[![github action status](https://github.com/hexlet-components/js-html-builder/workflows/Node%20CI/badge.svg)](https://github.com/hexlet-components/js-html-builder/actions)

## Install

```sh
npm install @hexlet/async
```

## Usage example

```javascript
import parse from '@hexlet/html-builder';

const data = ['html', [
  ['head', [
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

const ast = parse(data);
ast.toString();

// '<html>
// <head><title>hello, hexlet!</title></head>
// <body><div class="separator"></div>
// <h1 class="header">html builder example</h1>
// <div><img class="image" href="#"><span>span text2</span>
// </div></body></html>'
```

For more information, see the [Full Documentation](https://github.com/hexlet-components/js-html-builder/tree/master/docs)

[![Hexlet Ltd. logo](https://raw.githubusercontent.com/Hexlet/hexletguides.github.io/master/images/hexlet_logo128.png)](https://ru.hexlet.io/pages/about?utm_source=github&utm_medium=link&utm_campaign=js-html-builder)

This repository is created and maintained by the team and the community of Hexlet, an educational project. [Read more about Hexlet (in Russian)](https://ru.hexlet.io/pages/about?utm_source=github&utm_medium=link&utm_campaign=js-html-builder).
