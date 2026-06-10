import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Orders from "./pages/Order";
import Products from "./pages/Products";
import Settings from "./pages/Settings";
import AdminLayout from "./layouts/AdminLayout";
import Analytics from "./pages/Anylatics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/users", element: <Users /> },
      { path: "/orders", element: <Orders /> },
      { path: "/products", element: <Products /> },
      { path: "/analytics", element: <Analytics /> },
      { path: "/settings", element: <Settings /> },
    ],
  },
]);