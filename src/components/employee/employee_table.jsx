import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllEmployeesAPI,
  deleteEmployeeAPI,
} from "../../features/employee/employeeSlice";
import "./employee_table.css";
const EmployeeTable = () => {
  const employee = useSelector((state) => state.employee);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEmployeesAPI());
  }, []);
  const deleteEmployee = (id) => {
    dispatch(deleteEmployeeAPI(id));
  };
  return (
    <div>
      <table>
        <tr>
          <th>SL No</th>
          <th>ID</th>
          <th>Name</th>
          <th>Address</th>
          <th>Contact</th>
          <th>E-Mail</th>
          <th>Emg-Contact</th>
          <th>Bank Name</th>
          <th>Acc-Number</th>
          <th>Bank Location</th>
          <th>AddAFSC Code</th>
          <th>Oparations</th>
        </tr>
        {employee.employee_list &&
          employee.employee_list.map((obj, index) => {
            return (
              <tr key={obj.id}>
                <td>{index + 1}</td>
                <td>{obj.id}</td>

                <td>
                  {obj.first_name} {obj.last_name}
                </td>
                <td>
                  {obj.house_name}, {obj.town}, {obj.city}, {obj.state},{" "}
                  {obj.country}, {obj.zip_code}
                </td>
                <td>{obj.contact}</td>
                <td>{obj.email}</td>
                <td>{obj.emergancy_contact}</td>
                <td>{obj.bank_name}</td>
                <td>{obj.bank_account_no}</td>
                <td>{obj.bank_location}</td>
                <td>{obj.ifsc_code}</td>
                <td>
                  <div className="table_oparation_column" key={obj.id}>
                    <button className="edit_button">Edit</button>
                    <button
                      className="delete_button"
                      onClick={() => deleteEmployee(obj.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};
export default EmployeeTable;
