import React, { useState } from "react";
import NewEmployeeFormModal from "./new_employee_form_modal";

const EmployeeIndex = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          console.log("button click");
          setShowModal(!showModal);
        }}
      >
        + New Employee
      </button>
      <NewEmployeeFormModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default EmployeeIndex;
