/* eslint-disable no-undef */

const rootElem = document.querySelector('#root');

const greetingElem = React.createElement(
  'div',
  { className: 'greeting' },
  'Hello, React!'
);

ReactDOM.render(greetingElem, rootElem);
