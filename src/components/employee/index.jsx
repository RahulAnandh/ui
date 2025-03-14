import React, { useEffect, useState } from "react";
import NewEmployeeFormModal from "./new_employee_form_modal";
import { createEmployeeAPI } from "../../features/employee/employeeSlice";
import { useSelector, useDispatch } from "react-redux";
import EmployeeTable from "./employee_table";
import "./index.css";

const EmployeeIndex = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {}, []);

  return (
    <div className="employee_table_container">
      <button
        onClick={() => {
          console.log("button click");
          setShowModal(!showModal);
        }}
      >
        + New Employee
      </button>
      <EmployeeTable />
      <NewEmployeeFormModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default EmployeeIndex;
