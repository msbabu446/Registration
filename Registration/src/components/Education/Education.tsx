import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  schoolName: Yup.string().min(2).max(40).required(),
  sscPassedYear: Yup.string()
    .min(4)
    .max(4)
    .matches(/^[0-9]/, "")
    .required(),
  sscPercentage: Yup.string()
    .matches(/^[0-9]/, "")
    .required(),
  interCollageName: Yup.string().min(2).max(40).required(),
  interPassedYear: Yup.string()
    .min(4)
    .max(4)
    .matches(/^[0-9]/, "")
    .required(),
  interPercentage: Yup.string()
    .matches(/^[0-9]/, "")
    .required(),
  gradCollageName: Yup.string().min(2).max(40).required(),
  gradPassedYear: Yup.string()
    .min(4)
    .max(4)
    .matches(/^[0-9]/, "")
    .required(),
  gradPercentage: Yup.string()
    .matches(/^[0-9]/, "")
    .required(),
  addlQualification: Yup.string().required(),
});

export type InitialValues = Yup.InferType<typeof validationSchema>;

import "./Education.scss";
import { useRegistration } from "../../context/registrationContext";

function EducationInfo() {
  const { formData, setEducationInfo, onNext, onPrev } = useRegistration();
  const initialValues: InitialValues = formData.educationInfo;
  const onSubmit = async (values: InitialValues) => {
    setEducationInfo(values as any);
    onNext(0);
    console.log(values);
  };

  return (
    <div className="educationInfoWrapper">
      <h1 className="title">Education Information</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="formGroup">
            <label htmlFor="schoolName">SSC</label>
            <div className="eduContainer">
              <div>
                <Field
                  name="schoolName"
                  className="formInput"
                  placeholder="Enter School name"
                  type="text"
                />
                <ErrorMessage name="schoolName">
                  {(msg) => <div className="error">{msg}</div>}
                </ErrorMessage>
              </div>
              <div>
                <Field
                  name="sscPassedYear"
                  className="formInput"
                  placeholder="Enter Passed out year"
                  type="number"
                />
                <ErrorMessage name="sscPassedYear">
                  {(msg) => <div className="error">{msg}</div>}
                </ErrorMessage>
              </div>
              <div>
                <Field
                  name="sscPercentage"
                  className="formInput"
                  placeholder="Enter marks percentage"
                  type="number"
                />
                <ErrorMessage name="sscPercentage">
                  {(msg) => <div className="error">{msg}</div>}
                </ErrorMessage>
              </div>
            </div>
          </div>
          <div className="formGroup">
            <label htmlFor="inter">Intermediate</label>
            <div className="eduContainer">
              <div>
                <Field
                  name="interCollageName"
                  className="formInput"
                  placeholder="Enter Collage name"
                  type="text"
                />
                <ErrorMessage name="interCollageName">
                  {(msg) => <div className="error">{msg}</div>}
                </ErrorMessage>
              </div>
              <div>
                <Field
                  name="interPassedYear"
                  className="formInput"
                  placeholder="Enter Passed out year"
                  type="number"
                />
                <ErrorMessage name="interPassedYear">
                  {(msg) => <div className="error">{msg}</div>}
                </ErrorMessage>
              </div>
              <div>
                <Field
                  name="interPercentage"
                  className="formInput"
                  placeholder="Enter marks percentage"
                  type="number"
                />
                <ErrorMessage name="interPercentage">
                  {(msg) => <div className="error">{msg}</div>}
                </ErrorMessage>
              </div>
            </div>
          </div>
          <div className="formGroup">
            <label htmlFor="graduation">Graduation</label>
            <div className="eduContainer">
              <div>
                <Field
                  name="gradCollageName"
                  className="formInput"
                  placeholder="Enter Collage name"
                  type="text"
                />
                <ErrorMessage name="gradCollageName">
                  {(msg) => <div className="error">{msg}</div>}
                </ErrorMessage>
              </div>
              <div>
                <Field
                  name="gradPassedYear"
                  className="formInput"
                  placeholder="Enter Passed out year"
                  type="number"
                />
                <ErrorMessage name="gradPassedYear">
                  {(msg) => <div className="error">{msg}</div>}
                </ErrorMessage>
              </div>
              <div>
                <Field
                  name="gradPercentage"
                  className="formInput"
                  placeholder="Enter marks percentage"
                  type="number"
                />
                <ErrorMessage name="gradPercentage">
                  {(msg) => <div className="error">{msg}</div>}
                </ErrorMessage>
              </div>
            </div>
          </div>
          <div className="formGroup">
            <label htmlFor="addlQualification">Additional Qualification</label>
            <Field name="addlQualification" className="formInput" />
            <ErrorMessage name="addlQualification">
              {(msg) => <div className="error">{msg}</div>}
            </ErrorMessage>
          </div>
          <div className="btnContainer">
            <button type="button" onClick={() => onPrev(0)}>
              Previous
            </button>
            <button type="submit">Save and Continue</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default EducationInfo;
