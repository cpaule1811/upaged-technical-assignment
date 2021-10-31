import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUpcomingShifts = createAsyncThunk(
  "upcomingShifts/fetchUpcomingShifts",
  async (pageNo) => {
    const response = await axios.get(
      `http://localhost:3001/upcomingshifts/${pageNo}`
    );
    return response.data;
  }
);

const shiftsSlice = createSlice({
  name: "upcomingShifts",
  initialState: {
    dateRange: "",
    upcomingShifts: [],
    error: "",
    isPending: false,
  },
  extraReducers: {
    [fetchUpcomingShifts.pending]: (state, action) => {
      state.isPending = true;
    },
    [fetchUpcomingShifts.fulfilled]: (state, { payload }) => {
      state.upcomingShifts = payload.shifts;
      state.error = "";
      state.isPending = false;
      state.dateRange = payload.dateRange;
    },
    [fetchUpcomingShifts.rejected]: (state, action) => {
      state.error = "Could not get shifts";
    },
  },
});

export default shiftsSlice.reducer;
