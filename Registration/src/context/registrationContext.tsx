import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import INITIAL_FORM_DATA, { STEPS_DATA, stepsDataProps } from "./data";

type ProviderType = {
  children: ReactNode;
};

type ContextType = {
  steps: stepsDataProps[];
  currentStep: number;
  onPrev: Dispatch<SetStateAction<number>>;
  onNext: Dispatch<SetStateAction<number>>;
  formData: typeof INITIAL_FORM_DATA;
  setFormData: Dispatch<SetStateAction<typeof INITIAL_FORM_DATA>>;
  setpersonalInfo: Dispatch<SetStateAction<typeof INITIAL_FORM_DATA>>;
  setEducationInfo: Dispatch<SetStateAction<typeof INITIAL_FORM_DATA>>;
  setWorkExperienceInfo: Dispatch<SetStateAction<typeof INITIAL_FORM_DATA>>;
  setSkillInfo: Dispatch<SetStateAction<typeof INITIAL_FORM_DATA>>;
};

const RegistrationContext = createContext<ContextType>({
  steps: [],
  currentStep: 0,
  onPrev: () => {},
  onNext: () => {},
  formData: INITIAL_FORM_DATA,
  setFormData: () => {},
  setpersonalInfo: () => {},
  setEducationInfo: () => {},
  setWorkExperienceInfo: () => {},
  setSkillInfo: () => {},
});

export const useRegistration = () => useContext(RegistrationContext);

function RegistrationProvider({ children }: ProviderType) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const steps = STEPS_DATA;

  // on prev step click
  const onPrev = () => {
    if (currentStep !== 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // on next step click
  const onNext = () => {
    if (currentStep !== steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  // set personal data
  const setpersonalInfo = (data: any) => {
    setFormData({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        ...data,
      },
    });
  };

  // set educational data
  const setEducationInfo = (data: any) => {
    setFormData({
      ...formData,
      educationInfo: {
        ...formData.educationInfo,
        ...data,
      },
    });
  };

  // set work experience data
  const setWorkExperienceInfo = (data: any) => {
    setFormData({
      ...formData,
      workExperience: {
        ...formData.workExperience,
        ...data,
      },
    });
  };

  // set skill data
  const setSkillInfo = (data: any) => {
    setFormData({
      ...formData,
      skillInfo: { ...formData.skillInfo, ...data },
    });
  };

  const values = useMemo(
    () => ({
      steps,
      currentStep,
      onPrev,
      onNext,
      formData,
      setFormData,
      setpersonalInfo,
      setEducationInfo,
      setWorkExperienceInfo,
      setSkillInfo,
    }),
    [
      formData,
      setFormData,
      setpersonalInfo,
      setEducationInfo,
      setWorkExperienceInfo,
      setSkillInfo,
    ]
  );

  return (
    <RegistrationContext.Provider value={values}>
      {children}
    </RegistrationContext.Provider>
  );
}
export default RegistrationProvider;
