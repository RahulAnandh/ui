import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    value: 0,
  },
  reducers: {
    createEmployee: (state, action) => {
      console.log(action.payload);
    },
    updateEmployee: (state) => {
      state.value -= 1;
    },
    deleteEmployee: (state, action) => {
      state.value += action.payload;
    },
    getEmployee: (state, action) => {
      state.value += action.payload;
    },
    getAllEmployees: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
  getAllEmployees,
} = employeeSlice.actions;

export default employeeSlice.reducer;
