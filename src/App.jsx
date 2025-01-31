import { useState } from "react";
import "./App.css";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "./views/Signup";

const routes = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
