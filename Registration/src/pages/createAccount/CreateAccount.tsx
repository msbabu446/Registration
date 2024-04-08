import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { PASSWORD_VALIDATION_REG_EX } from "../../utils/constants";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      PASSWORD_VALIDATION_REG_EX.password,
      "Must contain at least 8 Characters, 1 Uppercase, 1 Lowercase, 1 Special Character, and 1 Number"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords do not match")
    .required("Confirm Password is required"),
});

export type InitialValues = Yup.InferType<typeof validationSchema>;

const initialValues: InitialValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

// styles
import "./CreateAccount.scss";

function CreateAccount() {
  const navigate = useNavigate();
  const onSubmit = (values: InitialValues) => {
    console.log(values);
    navigate("/register");
  };
  return (
    <div className="signinContainer">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <h1 className="title">Create Account</h1>
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
          <div className="formGroup">
            <label htmlFor="confirmPassword" className="label">
              Confirm Password
            </label>
            <Field
              name="confirmPassword"
              className="formInput"
              type="password"
            />
            <ErrorMessage name="confirmPassword">
              {(msg) => <div className="error">{msg}</div>}
            </ErrorMessage>
          </div>
          <button type="submit" className="signInBtn">
            Create Account
          </button>
        </Form>
      </Formik>
      <div className="links">
        <p>
          Already have an account? <Link to="/">Sign In</Link>
        </p>
        <div>
          <Link to="/forgot-password">Forgot your password?</Link>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
