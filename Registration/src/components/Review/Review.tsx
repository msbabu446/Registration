import { useRegistration } from "../../context/registrationContext";

// styles
import "./Review.scss";

function Review() {
  const { formData } = useRegistration();
  const { personalInfo, educationInfo, workExperience, skillInfo } = formData;

  return (
    <div className="reviewWrapper">
      <h1 className="alignCenter">Review</h1>
      <table>
        <tbody>
          <tr>
            <th colSpan={2} className="alignCenter">
              Personal Information
            </th>
          </tr>
          <tr>
            <th>First Name:</th>
            <td>{personalInfo.firstName}</td>
          </tr>
          <tr>
            <th>Last Name:</th>
            <td>{personalInfo.laststName}</td>
          </tr>
          <tr>
            <th>Address:</th>
            <td>{personalInfo.address}</td>
          </tr>
          <tr>
            <th>State:</th>
            <td>{personalInfo.state}</td>
          </tr>
          <tr>
            <th>City:</th>
            <td>{personalInfo.city}</td>
          </tr>
          <tr>
            <th>Postal Code:</th>
            <td>{personalInfo.postalCode}</td>
          </tr>
          <tr>
            <th colSpan={2} className="alignCenter">
              Education Information
            </th>
          </tr>
          <tr>
            <th>Secondary school:</th>
            <td>{educationInfo.schoolName}</td>
          </tr>
          <tr>
            <th>Passed out year:</th>
            <td>{educationInfo.sscPassedYear}</td>
          </tr>
          <tr>
            <th>Percentage:</th>
            <td>{educationInfo.sscPercentage}</td>
          </tr>
          <tr>
            <th>Inter College:</th>
            <td>{educationInfo.interCollageName}</td>
          </tr>
          <tr>
            <th>Passed out year:</th>
            <td>{educationInfo.interPassedYear}</td>
          </tr>
          <tr>
            <th>Percentage:</th>
            <td>{educationInfo.interPercentage}</td>
          </tr>
          <tr>
            <th>Graduation College:</th>
            <td>{educationInfo.gradCollageName}</td>
          </tr>
          <tr>
            <th>Passed out year:</th>
            <td>{educationInfo.gradPassedYear}</td>
          </tr>
          <tr>
            <th>Percentage:</th>
            <td>{educationInfo.gradPercentage}</td>
          </tr>
          <tr>
            <th>Additional Qualification:</th>
            <td>{educationInfo.addlQualification}</td>
          </tr>
          <tr>
            <th colSpan={2} className="alignCenter">
              Work Experience Information
            </th>
          </tr>
          <tr>
            <th>Company name:</th>
            <td>{workExperience.companyName}</td>
          </tr>
          <tr>
            <th>Designation:</th>
            <td>{workExperience.jobTitle}</td>
          </tr>
          <tr>
            <th>Location:</th>
            <td>{workExperience.location}</td>
          </tr>
          <tr>
            <th>Joining Date:</th>
            <td>{workExperience.startDate}</td>
          </tr>
          <tr>
            <th>Left Date:</th>
            <td>{workExperience.endDate}</td>
          </tr>
          <tr>
            <th colSpan={2} className="alignCenter">
              Skill Information
            </th>
          </tr>
          {skillInfo.skillInfo.map((skill, index) => (
            <tr key={index}>
              <th>{skill.skillName}</th>
              <td>{skill.skillLevel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Review;
