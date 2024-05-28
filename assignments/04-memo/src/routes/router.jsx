import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage/";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/detail/:id",
        element: <DetailPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />
      }
    ],
  },
]);

export default router;
