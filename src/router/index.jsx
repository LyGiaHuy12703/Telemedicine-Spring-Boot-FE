import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import HomePage from "../pages/HomeScreen";
import FileNotFound from "../pages/exception/FileNotFound";
import MyPage from "../pages/MyPage";
import Register from "../pages/register/Register";
import BookingPage from "../pages/booking/BookingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <FileNotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/mypage",
    element: <MyPage />,
  },
  {
    path: "/dat-lich",
    element: <BookingPage />,
  },
]);

export default router;
