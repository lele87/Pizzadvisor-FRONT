import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { blankStateActionCreator } from "../../redux/features/pizzeriaSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import {
  createPizzeriaThunk,
  editPizzeriaThunk,
} from "../../redux/thunks/pizzeriasThunks";
import StyledPizzeriaForm from "./StyledPizzeriaForm";

const PizzeriaForm = (): JSX.Element => {
  const blankFields = {
    name: "",
    timetable: "",
    address: "",
    specialty: "",
    image: "",
    id: "",
    owner: "",
  };

  const [formData, setFormData] = useState(blankFields);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);
  const location = useLocation();

  const pizzeriaInfo = useAppSelector((state) => state.pizzeria);

  const changeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]:
        event.target.type === "file"
          ? event.target.files?.[0] || ""
          : event.target.value,
    });
  };

  useEffect(() => {
    if (pizzeriaInfo) {
      setFormData(pizzeriaInfo);
    }
  }, [dispatch, pizzeriaInfo]);

  const submitCreatePizzeria = (event: React.FormEvent) => {
    event.preventDefault();

    const newFormData = new FormData();

    newFormData.append("name", formData.name);
    newFormData.append("timetable", formData.timetable);
    newFormData.append("address", formData.address);
    newFormData.append("specialty", formData.specialty);
    newFormData.append("image", formData.image);
    newFormData.append("owner", user.userInfo.id);
    newFormData.append("id", formData.id);

    location.pathname === "/createpizzeria"
      ? dispatch(createPizzeriaThunk(newFormData))
      : dispatch(editPizzeriaThunk(pizzeriaInfo.id as string, newFormData));

    dispatch(blankStateActionCreator());
    setFormData(blankFields);
    navigate("/home");
  };

  return (
    <>
      <StyledPizzeriaForm>
        <span className="welcome-form">Pizzeria Form</span>
        <form
          className="pizzeria-form"
          autoComplete="off"
          noValidate
          onSubmit={submitCreatePizzeria}
        >
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
          <label htmlFor="specialty">Special Pizza</label>
          <input
            id="specialty"
            value={formData.specialty}
            type="text"
            onChange={changeData}
            placeholder="SPECIAL PIZZA"
          />
          <label htmlFor="image">Image</label>
          <input
            id="image"
            type="file"
            onChange={changeData}
            className="image-input"
          />
          <div className="form-buttons">
            <button
              className="submit-button"
              disabled={
                formData.address === "" ||
                formData.timetable === "" ||
                formData.name === ""
              }
              type="submit"
            >
              {location.pathname === "/createpizzeria"
                ? "CREATE PIZZERIA"
                : "EDIT PIZZERIA"}
            </button>
          </div>
        </form>
      </StyledPizzeriaForm>
    </>
  );
};

export default PizzeriaForm;
