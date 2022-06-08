# js-html-builder

[![github action status](https://github.com/hexlet-components/js-html-builder/workflows/Node%20CI/badge.svg)](../../actions)

## Install

```sh
npm install @hexlet/html-builder
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

For more information, see the [Full Documentation](docs)

---

[![Hexlet Ltd. logo](https://raw.githubusercontent.com/Hexlet/assets/master/images/hexlet_logo128.png)](https://hexlet.io?utm_source=github&utm_medium=link&utm_campaign=js-html-builder)

This repository is created and maintained by the team and the community of Hexlet, an educational project. [Read more about Hexlet](https://hexlet.io?utm_source=github&utm_medium=link&utm_campaign=js-html-builder).

See most active contributers on [hexlet-friends](https://friends.hexlet.io/).
