import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createEmployeeAPI = createAsyncThunk(
  "createEmployeeAPI",
  async (a, b) => {
    console.log("1---3", a, b);
    const response = await fetch("http://localhost:3001/employee/create");
    return response.json();
  }
);
export const getAllEmployeesAPI = createAsyncThunk(
  "getAllEmployeesAPI",
  async () => {
    const response = await fetch("http://localhost:3001/employee/get_all");
    return response.json();
  }
);
export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    value: 0,
    employee_list: [],
    isLoading: false,
    isError: false,
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
  extraReducers: (builder) => {
    builder.addCase(createEmployeeAPI.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createEmployeeAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.employee_list.push(action.payload);
    });
    builder.addCase(createEmployeeAPI.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });

    builder.addCase(getAllEmployeesAPI.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAllEmployeesAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.employee_list = action.payload;
    });
    builder.addCase(getAllEmployeesAPI.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
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
