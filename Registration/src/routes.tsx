import { createBrowserRouter } from "react-router-dom";

// pages
import Signin from "./pages/signin/Signin";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import CreateAccount from "./pages/createAccount/CreateAccount";
import Register from "./pages/registration/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Review from "./components/Review/Review";

import RegistrationProvider from "./context/registrationContext";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/review",
    element: (
      <RegistrationProvider>
        <Review />
      </RegistrationProvider>
    ),
  },
  {
    path: "/register",
    element: (
      <RegistrationProvider>
        <Register />
      </RegistrationProvider>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occured.</p>
      </>
    ),
  },
]);

export default routes;
