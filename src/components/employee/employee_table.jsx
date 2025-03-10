import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllEmployeesAPI } from "../../features/employee/employeeSlice";
const EmployeeTable = () => {
  const employee = useSelector((state) => state.employee);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEmployeesAPI());
  }, []);
  return <div>hai{console.log(employee.employee_list)}</div>;
};
export default EmployeeTable;
