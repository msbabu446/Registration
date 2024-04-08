import { stepsDataProps } from "../../context/data";
import { useRegistration } from "../../context/registrationContext";

import "./Stepper.scss";

function Stepper() {
  const { steps, currentStep } = useRegistration();
  const progressBarWidth = (100 / (steps.length - 1)) * currentStep;
  return (
    <div className="wrapper">
      <div className="stepsContainer">
        <div className="stepsWrapper">
          {steps.length > 0 &&
            steps.map((step: stepsDataProps, index: number) => (
              <div
                key={step.id}
                className={`step ${currentStep >= index ? "active" : ""}`}
              >
                {step.id}
              </div>
            ))}
        </div>
        <div className="horizLine"></div>
        <div
          className="progressBar"
          style={{ width: `${progressBarWidth}%` }}
        ></div>
      </div>
      <div className="content">{steps[currentStep]?.component}</div>
    </div>
  );
}

export default Stepper;
