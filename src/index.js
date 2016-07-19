// @flow

// { type: tagsList, body: [ { type: tag, name: <>, body: string, attributes: {}, children: [] ] }
// const data = [
//   ['meta', [
//     ['title', 'hello, hexlet!'],
//   ]],
//   ['body', [
//     ['h1', 'html builder example', { class: 'header' }],
//   ]],
// ];

import buildNode from './buildNode';

// declare type Ast = {
//   type: 'tagsList' | 'tag',
//   name: string,
//   attributes: {},
//   body: string,
//   children: [Ast]
// };

// const iterAst = (ast: Node) => {
//   switch (ast.type) {
//     case 'tagsList':
//       return `${ast.children.map(iterAst).join('')}`;
//     case 'tag': {
//       const attrsLine = Object.keys(ast.attributes).reduce((acc, key) =>
//         `${acc} ${key}="${ast.attributes[key]}"`, '');
//       const value = ast.children.length > 0 ? ast.children.map(iterAst).join('') : ast.body;
//       return `<${ast.name}${attrsLine}>${value}</${ast.name}>`;
//     }
//     default:
//       // nothing
//   }
// };

const iter = (data: [any]) => {
  let value;
  let attributes = {};
  if (data.length === 3) {
    value = data[2];
    attributes = data[1];
  } else if (data.length === 2) {
    if (data[1] instanceof Array || (typeof data[1] === 'string')) {
      value = data[1];
    } else {
      value = '';
      attributes = data[1];
    }
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

  return buildNode(data[0], attributes, body, children);
};

export default {
  parse(data: [any]) {
    return iter(data);
  },
};
