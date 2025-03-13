import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createEmployeeAPI = createAsyncThunk(
  "createEmployeeAPI",
  async (data) => {
    const response = await fetch("http://localhost:3001/employee/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Failed to Add employees");
    }
    return data;
  }
);
export const getAllEmployeesAPI = createAsyncThunk(
  "getAllEmployeesAPI",
  async () => {
    const response = await fetch("http://localhost:3001/employee/get_all");
    if (!response.ok) {
      throw new Error("Failed to fetch employees");
    }
    return response.json();
  }
);
export const deleteEmployeeAPI = createAsyncThunk(
  "deleteEmployeeAPI",
  async (id) => {
    const response = await fetch(
      `http://localhost:3001/employee/delete?id=${id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to delete employee.");
    }
    return response.json();
  }
);
export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    value: 0,
    employee_list: [],
    createEmployeeLoading: false,
    deleteEmployeeLoading: false,
    updateEmployeeLoading: false,
    getEmployeeLoading: false,
    getAllEmployeeLoading: false,
    isError: false,
    message: "",
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
    //----------------------------------------------------------------createEmployeeAPI
    builder.addCase(createEmployeeAPI.pending, (state, action) => {
      state.createEmployeeLoading = true;
    });
    builder.addCase(createEmployeeAPI.fulfilled, (state, action) => {
      state.createEmployeeLoading = false;
      state.employee_list.push(action.payload);
    });
    builder.addCase(createEmployeeAPI.rejected, (state, action) => {
      state.createEmployeeLoading = false;
      state.isError = true;
    });
    //-------------------------------------------------------------------getAllEmployeesAPI

    builder.addCase(getAllEmployeesAPI.pending, (state, action) => {
      state.getAllEmployeeLoading = true;
      state.employee_list = action.payload;
    });
    builder.addCase(getAllEmployeesAPI.fulfilled, (state, action) => {
      state.getAllEmployeeLoading = false;
      state.employee_list = action.payload.data;
      state.message = action.payload.message;
    });
    builder.addCase(getAllEmployeesAPI.rejected, (state, action) => {
      state.getAllEmployeeLoading = false;
      state.isError = true;
      state.message = action.payload.message;
    });
    //------------------------------------------------------------------------deleteEmployeeAPI
    builder.addCase(deleteEmployeeAPI.pending, (state, action) => {
      state.deleteEmployeeLoading = true;
    });
    builder.addCase(deleteEmployeeAPI.fulfilled, (state, action) => {
      state.deleteEmployeeLoading = false;
      const new_array = state.employee_list.filter(
        (item) => item.id != action.payload.data
      );
      state.employee_list = new_array;
      state.message = action.payload.message;
    });
    builder.addCase(deleteEmployeeAPI.rejected, (state, action) => {
      state.deleteEmployeeLoading = false;
      state.isError = true;
      state.message = action.payload.message;
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
