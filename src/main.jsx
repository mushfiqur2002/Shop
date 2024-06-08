import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./main/Main";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ContactForm from "./pages/ContactForm";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/shop',
        element: <Shop></Shop>
      },
      {
        path:'/contact',
        element:<ContactForm></ContactForm>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-screen-xl w-full relative">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);