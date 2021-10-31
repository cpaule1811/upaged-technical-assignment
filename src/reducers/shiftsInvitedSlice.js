import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchShiftsInvited = createAsyncThunk(
  "shiftsInvited/fetchShiftsInvited1",
  async () => {
    const response = await axios.get(`http://localhost:3001/shiftsinvited`);
    return response.data;
  }
);

const shiftsInvitedSlice = createSlice({
  name: "shiftsInvited",
  initialState: {
    shiftsInvited: [],
    error: "",
    isPending: false,
  },
  extraReducers: {
    [fetchShiftsInvited.pending]: (state, action) => {
      state.isPending = true;
    },
    [fetchShiftsInvited.fulfilled]: (state, { payload }) => {
      state.shiftsInvited = payload;
      state.error = "";
      state.isPending = false;
    },
    [fetchShiftsInvited.rejected]: (state, action) => {
      state.error = "Could not get shifts";
    },
  },
});

export default shiftsInvitedSlice.reducer;
