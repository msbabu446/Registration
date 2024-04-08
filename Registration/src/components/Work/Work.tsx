import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  companyName: Yup.string().min(2).max(40).required(),
  jobTitle: Yup.string().required(),
  location: Yup.string().required(),
  startDate: Yup.string().required(),
  endDate: Yup.string().required(),
});

export type InitialValues = Yup.InferType<typeof validationSchema>;

import "./Work.scss";
import { useRegistration } from "../../context/registrationContext";

function WorkExperienceInfo() {
  const { formData, onNext, onPrev, setWorkExperienceInfo } = useRegistration();
  const initialValues: InitialValues = formData.workExperience;
  const onSubmit = async (values: InitialValues) => {
    setWorkExperienceInfo(values as any);
    onNext(0);
    console.log(values);
  };

  return (
    <div className="workInfoWrapper">
      <h1 className="title">Work Experience Information</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="formGroup">
            <label htmlFor="companyName">Work Experience</label>
            <div className="expContainer">
              <div className="formGroup">
                <Field
                  name="companyName"
                  className="formInput"
                  placeholder="Enter Company name"
                  type="text"
                />
                <ErrorMessage name="companyName">
                  {(msg) => <div className="error">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="formGroup">
                <Field
                  name="jobTitle"
                  className="formInput"
                  placeholder="Enter Job Title"
                  type="text"
                />
                <ErrorMessage name="jobTitle">
                  {(msg) => <div className="error">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="formGroup">
                <Field
                  name="location"
                  className="formInput"
                  placeholder="Enter work location"
                  type="text"
                />
                <ErrorMessage name="location">
                  {(msg) => <div className="error">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="dateContainer">
                <div className="formGroup">
                  <Field
                    name="startDate"
                    className="formInput"
                    placeholder="Enter join date"
                    type="text"
                  />
                  <ErrorMessage name="startDate">
                    {(msg) => <div className="error">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="formGroup">
                  <Field
                    name="endDate"
                    className="formInput"
                    placeholder="Enter company left date"
                    type="text"
                  />
                  <ErrorMessage name="endDate">
                    {(msg) => <div className="error">{msg}</div>}
                  </ErrorMessage>
                </div>
              </div>
            </div>
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

export default WorkExperienceInfo;
