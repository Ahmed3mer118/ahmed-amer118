import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Projects from "./Component/Projects";
import About from "./Component/About";
import Quiz from "./Projects/Quiz";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./Component/Contact";

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/projects?/:id", element: <Projects /> },
      { path: "/about", element: <About /> },
      { path: "/quiz", element: <Quiz /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
