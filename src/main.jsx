import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/anton'; // Optional: '@fontsource/anton/400.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <App /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
