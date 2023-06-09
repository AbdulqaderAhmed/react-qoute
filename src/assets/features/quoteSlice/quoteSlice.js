import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "../../api/http";

export const getQuote = createAsyncThunk(
  "Qoute/getQuote",
  async (keyword, thunkAPI) => {
    try {
      const res = await http(`category=${keyword}`);
      return res.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toSring();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  qoute: null,
  isLoading: false,
  isError: null,
};

const qouteSlice = createSlice({
  name: "qoute",
  initialState,
  extraReducers: {
    [getQuote.pending]: (state) => {
      state.isLoading = true;
    },
    [getQuote.fulfilled]: (state, payload) => {
      state.isLoading = false;
      state.qoute = payload.payload;
    },
    [getQuote.rejected]: (state, payload) => {
      state.isLoading = false;
      state.isError = payload;
    },
  },
});

export default qouteSlice.reducer;
