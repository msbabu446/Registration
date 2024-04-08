import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { STATES } from "../../utils/states";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().min(2).max(40).required(),
  laststName: Yup.string().min(2).max(40).required(),
  address: Yup.string().required(),
  state: Yup.string().required(),
  city: Yup.string().required(),
  postalCode: Yup.string()
    .matches(/^[0-9]/, "Must be only digits")
    .min(6)
    .max(6)
    .required(),
});

export type InitialValues = Yup.InferType<typeof validationSchema>;

import "./PersonalInfo.scss";
import { useRegistration } from "../../context/registrationContext";

function PersonalInfo() {
  const { currentStep, onNext, formData, setpersonalInfo } = useRegistration();
  const onSubmit = async (values: InitialValues) => {
    setpersonalInfo(values as any);
    onNext(0);
  };

  const initialValues: InitialValues = formData.personalInfo;

  return (
    <div className="personalInfoWrapper">
      <h1 className="title">Personal Information</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          const { values } = formik;
          return (
            <Form>
              <div className="formGroup">
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" className="formInput" type="text" />
                <ErrorMessage name="firstName">
                  {(msg) => <div className="error">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="formGroup">
                <label htmlFor="laststName">Last Name</label>
                <Field name="laststName" className="formInput" />
                <ErrorMessage name="laststName">
                  {(msg) => <div className="error">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="formGroup">
                <label htmlFor="address">Address</label>
                <Field name="address" className="formInput" />
                <ErrorMessage name="address">
                  {(msg) => <div className="error">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="formGroup">
                <label htmlFor="state">State</label>
                <Field name="state" className="formInput" as="select">
                  {Object.keys(STATES).map((state: string) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="state">
                  {(msg) => <div className="error">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="formGroup">
                <label htmlFor="city">City</label>
                <Field name="city" as="select" className="formInput">
                  {STATES[values.state as keyof typeof STATES].map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="city">
                  {(msg) => <div className="error">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="formGroup">
                <label htmlFor="postalCode">Postal Code</label>
                <Field name="postalCode" className="formInput" />
                <ErrorMessage name="postalCode">
                  {(msg) => <div className="error">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="btnContainer">
                {currentStep !== 0 && <button type="button">Previous</button>}
                <button type="submit">Save and Continue</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default PersonalInfo;
