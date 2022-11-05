import * as React from 'react';
import * as ReactDom from 'react-dom/client';

import './style/index.css';
import 'virtual:uno.css';
import 'uno.css';

import App from './App';

const rootElement = document.getElementById('root')!;
ReactDom.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
