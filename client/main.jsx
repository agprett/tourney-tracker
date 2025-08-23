import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import './index.css'

import App from './App.jsx'
import Nav from './Components/Nav/Nav.jsx'
import NewTourney from './Components/Home/NewTourney.jsx';
import Tourney from './Components/Tourney/Tourney.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav/>,
    children :[
      {
        index: true,
        element: <App/>,
      },
      {
        path: "/tournament",
        element: <Tourney/>
      },
      {
        path: "/new-tournament",
        element: <NewTourney />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)