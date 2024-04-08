import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
});

export type InitialValues = Yup.InferType<typeof validationSchema>;

const initialValues: InitialValues = {
  email: "",
};

// styles
import { useState } from "react";
import "./ForgotPassword.scss";
import Alert from "../../components/Alert/Alert";

function ForgotPassword() {
  const [showInfo, setShowInfo] = useState(false);
  const onSubmit = (values: InitialValues) => {
    console.log(values);
    setInterval(() => setShowInfo(true), 2000);
  };
  return (
    <div className="signinContainer">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <h1 className="title">Forgot Password</h1>
          {showInfo && (
            <Alert
              message="Reset password link sent to your registered email, please check in a while... "
              type="info"
            />
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
          <button type="submit" className="resetBtn">
            Reset Password
          </button>
        </Form>
      </Formik>
      <div className="links">
        <p>
          Already have an account? <Link to="/">Sign In</Link>
        </p>
        <p>
          Don't have an account yet?{" "}
          <Link to="/create-account">Create Account</Link>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;
