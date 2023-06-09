import { Main } from "./components/Introduction/Main";
import { SignUp } from "./components/AccountActionPage/SignUp/SignUp";
import { Login } from "./components/AccountActionPage/Login/Login";
import { Dashboard } from "./components/Dashboard/Dashboard";

const AppRoutes = [
  {
    index: true,
    element: <Main />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path:'/dashboard',
    element: <Dashboard />
  }
];

export default AppRoutes;
