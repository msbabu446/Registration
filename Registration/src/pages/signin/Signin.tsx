import { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../../components/Alert/Alert";
import verifyUser from "../../services";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export type InitialValues = Yup.InferType<typeof validationSchema>;

const initialValues: InitialValues = {
  email: "",
  password: "",
};

// styles
import "./Signin.scss";

function Signin() {
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);
  const onSubmit = async (values: InitialValues) => {
    setShowError(false);
    try {
      const res = await verifyUser(values);
      if (res) navigate("/dashboard");
    } catch (error) {
      console.log(error);
      if (!error) setShowError(true);
    }
  };
  return (
    <div className="signinContainer">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <h1 className="title">Sign In</h1>
          {showError && (
            <Alert message="Invalid Username and Password" type="error" />
          )}
          <div className="formGroup">
            <label htmlFor="email" className="label">
              Email Address
            </label>
            <Field name="email" className="formInput" type="email" />
            <ErrorMessage name="email">
              {(msg) => <div className="error">{msg}</div>}
            </ErrorMessage>
          </div>
          <div className="formGroup passwordGroup">
            <label htmlFor="password" className="label">
              Password
            </label>
            <Field name="password" className="formInput" type="password" />
            <ErrorMessage name="password">
              {(msg) => <div className="error">{msg}</div>}
            </ErrorMessage>
          </div>
          <button type="submit" className="signInBtn">
            Sign In
          </button>
        </Form>
      </Formik>
      <div className="links">
        <p>
          Don't have an account yet?{" "}
          <Link to="/create-account">Create Account</Link>
        </p>
        <div>
          <Link to="/forgot-password">Forgot your password?</Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
