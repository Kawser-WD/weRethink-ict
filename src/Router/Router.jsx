import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/LayOut/LayOut";
import Home from "../components/Home/Home";

export const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Layout></Layout>
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
