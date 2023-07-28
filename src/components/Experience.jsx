import { useState } from "react";
import ExperienceForm from "./ExperienceForm";

const Experience = ({
  companyName,
  title,
  startDate,
  endDate,
  description,
  handleUpdate,
}) => {

  const currentExperience = {
    companyName,
    title,
    startDate,
    endDate,
    description,
  };

  const [isEdit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!isEdit);
  };

  return (
    <>
      {!isEdit ? (
        <div className="section-container">
          <div className="bottom-border flex space-between">
            <h2>Experience</h2>
            <button onClick={handleEdit}>Edit</button>
          </div>

          <div>
            <div className="flex space-between">
              <div className="bold">{companyName}</div>
              <div>
                {startDate} - {endDate}
              </div>
            </div>
            <div className="italic">{title}</div>
            <div>{description}</div>
          </div>
        </div>
      ) : (
        <div className="form-container">
          <ExperienceForm
            {...currentExperience}
            onSubmit={(info) => {
              handleUpdate(info);
              handleEdit();
            }}
            onCancel={handleEdit}
          />
        </div>
      )}
    </>
  );
};

export default Experience;
