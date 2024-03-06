import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MealDetail from './pages/mealDetail.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Filter from './pages/filter.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/mealDetail/:mealName",
    element: <MealDetail />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  }, 
  {
    path: "/filter/:category",
    element: <Filter />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
