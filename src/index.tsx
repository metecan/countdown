import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './lib/style/globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
