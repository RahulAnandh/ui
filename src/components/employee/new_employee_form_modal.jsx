import React, { useState } from "react";
import "./new_employee_form_modal.css";
import { useSelector, useDispatch } from "react-redux";
import {
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
  getAllEmployees,
  createEmployeeAPI,
} from "../../features/employee/employeeSlice";
const NewEmployeeFormModal = (props) => {
  const employee = useSelector((state) => state.employee);
  const dispatch = useDispatch();

  const { showModal, setShowModal, content } = props;
  const [employee_data, setEmployeeData] = useState({
    first_name: "",
    last_name: "",
    house_name: "",
    zip_code: "",
    town: "",
    city: "",
    state: "",
    country: "",
    bank_account_no: "",
    bank_name: "",
    bank_location: "",
    ifsc_code: "",
    email: "",
    contact: "",
    emergancy_contact: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employee_data, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createEmployeeAPI(employee_data));
  };
  return (
    <div
      className={showModal ? "modal-form show" : "modal-form"}
      role="document"
    >
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={() => {
              setShowModal(false);
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 className="modal-title" id="myModalLabel">
            Create New Employee
          </h4>
        </div>

        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="first_name"
              onChange={handleChange}
            ></input>
            <label>First Name</label>

            <input type="text" name="last_name" onChange={handleChange}></input>
            <label>Last Name</label>

            <input
              type="text"
              name="house_name"
              onChange={handleChange}
            ></input>
            <label>House Name/Apt No</label>

            <input type="text" name="zip_code" onChange={handleChange}></input>
            <label>ZIP Code</label>

            <input type="text" name="town" onChange={handleChange}></input>
            <label>Town</label>

            <input type="text" name="city" onChange={handleChange}></input>
            <label>City</label>

            <input type="text" name="state" onChange={handleChange}></input>
            <label>State</label>

            <input type="text" name="country" onChange={handleChange}></input>
            <label>Country</label>

            <input
              type="text"
              name="bank_account_no"
              onChange={handleChange}
            ></input>
            <label>Bank Account No</label>

            <input type="text" name="bank_name" onChange={handleChange}></input>
            <label>Bank Name</label>

            <input
              type="text"
              name="bank_location"
              onChange={handleChange}
            ></input>
            <label>Bank Location</label>

            <input type="text" name="ifsc_code" onChange={handleChange}></input>
            <label>IFSC Code</label>

            <input type="email" name="email" onChange={handleChange}></input>
            <label>E-mail</label>

            <input type="text" name="contact" onChange={handleChange}></input>
            <label>Contact No</label>

            <input
              type="text"
              name="emergancy_contact"
              onChange={handleChange}
            ></input>
            <label>Emergancy Contact</label>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
      </div>
    </div>
  );
};
export default NewEmployeeFormModal;
