import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/index";
import "./index.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="bottom-center" autoClose={5000} hideProgressBar={false} newestOnTop={true} />
  </StrictMode>
);
