// @flow

// { type: tagsList, body: [ { type: tag, name: <>, body: string, options: {}, children: [] ] }
// const data = [
//   ['meta', [
//     ['title', 'hello, hexlet!'],
//   ]],
//   ['body', [
//     ['h1', 'html builder example', { class: 'header' }],
//   ]],
// ];

declare type Ast = {
  type: 'tagsList' | 'tag',
  name: string,
  options: {},
  body: string,
  children: [Ast]
};

const iterAst = (ast: Ast) => {
  switch (ast.type) {
    case 'tagsList':
      return `${ast.children.map(iterAst).join('')}`;
    case 'tag':
      const attrsLine = Object.keys(ast.options).reduce((acc, key) =>
        `${acc} ${key}="${ast.options[key]}"`, '');
      const value = ast.children.length > 0 ? ast.children.map(iterAst).join('') : ast.body;
      return `<${ast.name}${attrsLine}>${value}</${ast.name}>`;
    default:
      // nothing
  }
};

const iter = (data: [any]) => {
  if (data[0] instanceof Array) {
    return { type: 'tagsList', name: '', options: {}, body: '', children: data.map(iter) };
  }

  let value;
  let options = {};
  if (data.length === 3) {
    value = data[2];
    options = data[1];
  } else if (data.length === 2) {
    value = data[1];
  } else {
    value = '';
  }

  let body = '';
  let children;
  if (value instanceof Array) {
    children = value.map(iter);
  } else {
    body = value;
    children = [];
  }

  return { type: 'tag', name: data[0], body, options, children };
};

export default {
  build(data: [any]) {
    const result = iter(data);

    // const pry = require('pryjs');
    // eval(pry.it);

    return iterAst(result);
  },
};
