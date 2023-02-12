import React from 'react';
import ReactDOM from 'react-dom/client';
import './sd.js'

import {
  RouterProvider,
} from "react-router-dom";

import router from './pages/Router'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <h1>hola mundo</h1> */}
      <RouterProvider router={router} />

  </React.StrictMode>
);
