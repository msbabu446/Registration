import { ReactNode } from "react";
import PersonalInfo from "../components/PersonalInfo/PersonalInfo";
import EducationInfo from "../components/Education/Education";
import WorkExperienceInfo from "../components/Work/Work";
import SkillInfo from "../components/Skill/Skill";

export type stepsDataProps = {
  id: number;
  component: ReactNode;
};
const INITIAL_FORM_DATA = {
  personalInfo: {
    firstName: "",
    laststName: "",
    address: "",
    state: "Tamil Nadu",
    city: "Chennai",
    postalCode: "",
  },
  educationInfo: {
    schoolName: "",
    sscPassedYear: "",
    sscPercentage: "",
    interCollageName: "",
    interPassedYear: "",
    interPercentage: "",
    gradCollageName: "",
    gradPassedYear: "",
    gradPercentage: "",
    addlQualification: "",
  },
  workExperience: {
    companyName: "",
    jobTitle: "",
    location: "",
    startDate: "",
    endDate: "",
  },
  skillInfo: {
    skillInfo: [
      {
        skillName: "",
        skillLevel: "",
      },
    ],
  },
};

export default INITIAL_FORM_DATA;

export const STEPS_DATA: stepsDataProps[] = [
  {
    id: 1,
    component: <PersonalInfo />,
  },
  {
    id: 2,
    component: <EducationInfo />,
  },
  {
    id: 3,
    component: <WorkExperienceInfo />,
  },
  {
    id: 4,
    component: <SkillInfo />,
  },
];
