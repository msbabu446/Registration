import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  skillInfo: Yup.array().of(
    Yup.object().shape({
      skillName: Yup.string().required("Skill name required"),
      skillLevel: Yup.string().required("Skill level required"),
    })
  ),
});

export type InitialValues = Yup.InferType<typeof validationSchema>;

import "./Skill.scss";
import { useRegistration } from "../../context/registrationContext";
import { useNavigate } from "react-router-dom";

function SkillInfo() {
  const navigate = useNavigate();
  const { formData, onPrev, setSkillInfo } = useRegistration();
  const initialValues: InitialValues = formData.skillInfo;

  const onSubmit = async (values: InitialValues) => {
    setSkillInfo(values as any);
    navigate("/review");
    console.log(values);
  };

  return (
    <div className="skillInfoWrapper">
      <h1 className="title">Skill Information</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="formGroup">
            <label htmlFor="skillName">Skill details</label>
            <FieldArray name="skillInfo">
              {(fieldArrayProps) => {
                const { push, remove, form } = fieldArrayProps;
                const { values } = form;
                const { skillInfo } = values;
                return (
                  <div>
                    {skillInfo.map((skill: any, ind: number) => (
                      <div key={ind} className="skillInfoFormContainer">
                        <div className="fields formGroup">
                          <div>
                            <Field
                              name={`skillInfo.${ind}.skillName`}
                              className="formInput"
                              placeholder="Enter Skill"
                              type="text"
                            />
                            <ErrorMessage name={`skillInfo.${ind}.skillName`}>
                              {(msg) => <div className="error">{msg}</div>}
                            </ErrorMessage>
                          </div>
                          <div>
                            <Field
                              name={`skillInfo.${ind}.skillLevel`}
                              className="formInput"
                              placeholder="Enter skill level (ex: proficient, excellent, good)"
                              type="text"
                            />
                            <ErrorMessage name={`skillInfo.${ind}.skillLevel`}>
                              {(msg) => <div className="error">{msg}</div>}
                            </ErrorMessage>
                          </div>
                        </div>
                        <div className="skillBtnContainer formGroup">
                          {ind > 0 && (
                            <button type="button" onClick={() => remove(ind)}>
                              Remove
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={() =>
                              push({ skillName: "", skillLevel: "" })
                            }
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }}
            </FieldArray>
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

export default SkillInfo;
