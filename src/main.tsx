import React from 'react';
import ReactDOM from 'react-dom/client';
import Admin from './components/admin';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Admin />
  </React.StrictMode>,
);
