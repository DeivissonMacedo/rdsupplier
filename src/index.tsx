import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


//---react router teste config
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from "./routes/Home/Home";
import { MainSearch } from './routes/MainSearch/MainSearch';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "search_result",
        element: <MainSearch />
      }

    ]
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    

      <RouterProvider router={router} />
    
  </React.StrictMode>
);



