import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout"; // Make sure to import MainLayout

const Articles = lazy(() => import("./pages/Articles"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />, // Wrap the children with MainLayout
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Dashboard />
            </Suspense>
          ),
        },
        {
          path: "articles",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Articles />
            </Suspense>
          ),
        },
        {
          path: "about",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Contact />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
