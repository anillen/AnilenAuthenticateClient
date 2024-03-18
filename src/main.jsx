import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./pages/routes.jsx";
import AuthenticateContextProvider from "./store/AuthenticateContext/AuthenticateContextProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter(routes);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthenticateContextProvider>
        <RouterProvider router={router} />
      </AuthenticateContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
