import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Error from "../components/error/Error";
import HomePage from "../home/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
