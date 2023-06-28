import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { MenuProvider } from './components/controllers/MenuContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>   
  </React.StrictMode>
);


