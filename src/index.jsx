import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import App from './components';

injectGlobal`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    color: black;
  }
`;

ReactDOM.render(<App />, document.getElementById('app'));
