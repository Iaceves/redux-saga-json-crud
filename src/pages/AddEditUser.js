import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MDBValidation,
  MDBValidationItem,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import { useNavigate, useParams } from "react-router-dom";
import { createUserStart, updateUserStart } from "../redux/actions";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

const AddEditUser = () => {
  const [formValue, setFormValue] = useState(initialState);
  const [editMode, setEditMode] = useState(false);
  const { users } = useSelector((state) => state.data);
  const { name, email, phone, address } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setEditMode(true);
      const singleUser = users.find((item) => item.id === Number(id));
      setFormValue({ ...singleUser });
    } else {
      setEditMode(false);
      setFormValue({ ...initialState });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && phone && address) {
      if (!editMode) {
        dispatch(createUserStart(formValue));
        toast.success("User Added Successfully!");
        setTimeout(() => navigate("/"), 500);
      } else {
        dispatch(updateUserStart({ id, formValue }));
        setEditMode(false);
        toast.success("User Updated Successfully!");
        setTimeout(() => navigate("/"), 500);
      }
    }
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <MDBValidation
      className="row g-3"
      style={{ marginTop: "100px" }}
      noValidate
      onSubmit={handleSubmit}
    >
      <p className="fs-2 fw-bold">
        {!editMode ? "Add User Details" : "Update user details"}
      </p>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
      >
        <MDBValidationItem feedback="Please provide a name" invalid>
          <MDBInput
            value={name || ""}
            name="name"
            type="text"
            onChange={onInputChange}
            required
            label="name"
            id="validationCustom01"
          />
        </MDBValidationItem>
        <br />
        <MDBValidationItem feedback="Please provide an email" invalid>
          <MDBInput
            value={email || ""}
            name="email"
            type="email"
            onChange={onInputChange}
            required
            label="email"
          />
        </MDBValidationItem>
        <br />
        <MDBValidationItem feedback="Please provide a phone #" invalid>
          <MDBInput
            value={phone || ""}
            name="phone"
            type="number"
            onChange={onInputChange}
            required
            label="phone"
          />
        </MDBValidationItem>
        <br />
        <MDBValidationItem feedback="Please provide an address" invalid>
          <MDBInput
            value={address || ""}
            name="address"
            type="text"
            onChange={onInputChange}
            required
            label="address"
          />
        </MDBValidationItem>
        <br />
        <div className="col-12">
          <MDBBtn style={{ marginRight: "10px" }} type="submit">
            {!editMode ? "Add" : "Update"}
          </MDBBtn>
          <MDBBtn onClick={() => navigate("/")} color="danger">
            Go Back
          </MDBBtn>
        </div>
      </div>
    </MDBValidation>
  );
};

export default AddEditUser;
