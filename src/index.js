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

import buildNode from './buildNode';

const iter = (data: [any]) => {
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

  return buildNode(data[0], options, body, children);
};

export default {
  parse(data: [any]) {
    return iter(data);
  },
};
