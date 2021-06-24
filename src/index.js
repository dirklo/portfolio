import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MetaTags from 'react-meta-tags'

ReactDOM.render(
  <React.StrictMode>
    <MetaTags>
              <title>Rick Moore Portfolio</title>
              <meta name="description" content="Development Portfolio for Rick Moore" />
              <meta property="og:title" content="Rick Moore Portfolio" />
              <meta property="og:image" content="./img/logo.png" />
    </MetaTags>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);