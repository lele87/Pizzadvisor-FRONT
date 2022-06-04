import { useState } from "react";
import StyledPizzeriaForm from "./StyledPizzeriaForm";

const PizzeriaForm = (): JSX.Element => {
  const blankFields = {
    name: "",
    timetable: "",
    address: "",
    image: "",
  };

  const [formData, setFormData] = useState(blankFields);
  const changeData = (event: {
    target: { id: string; type: string; files: any; value: string };
  }) => {
    setFormData({
      ...formData,
      [event.target.id]:
        event.target.type === "file"
          ? event.target.files[0]
          : event.target.value,
    });
  };

  return (
    <>
      <StyledPizzeriaForm>
        <span className="welcome-form">Create or Edit a pizzeria</span>
        <form className="pizzeria-form" autoComplete="off" noValidate>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            value={formData.name}
            type="text"
            onChange={changeData}
            placeholder="NAME"
          />
          <label htmlFor="timetable">Opening Hours</label>
          <input
            id="timetable"
            value={formData.timetable}
            type="text"
            onChange={changeData}
            placeholder="OPENING HOURS"
          />
          <label htmlFor="address">Address</label>
          <input
            id="address"
            value={formData.address}
            type="text"
            onChange={changeData}
            placeholder="ADDRESS"
          />
          <label htmlFor="image">Image</label>
          <input
            id="image"
            value={formData.image}
            type="file"
            onChange={changeData}
            className="image-input"
          />
          <div className="form-buttons">
            <button
              className="create-button"
              disabled={
                formData.address === "" ||
                formData.timetable === "" ||
                formData.name === ""
              }
              type="submit"
              onClick={() => {}}
            >
              CREATE PIZZERIA
            </button>
            <button className="edit-button" onClick={() => {}}>
              EDIT PIZZERIA
            </button>
          </div>
        </form>
      </StyledPizzeriaForm>
    </>
  );
};

export default PizzeriaForm;
