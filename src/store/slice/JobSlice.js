import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const GetJobListing = createAsyncThunk(
  "JOB/GetJobListing",
  async (payload, { rejectWithValue }) => {
    try {
      console.log("API Call Happened");
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const JobSlice = createSlice({
  name: "JOB",
  initialState: {
    jobs: [],
    update: false,
    loading: false,
    error: null,
  },
  reducers: {
    ClearJobState: (state) => {
      state.jobs = [];
      state.update = false;
      state.loading = false;
      state.error = null;
    },
    ClearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetJobListing.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetJobListing.fulfilled, (state, action) => {
        state.update = true;
        state.jobs = [];
      })
      .addCase(GetJobListing.rejected, (state, action) => {
        state.error = action.payload.data;
      });
  },
});

export const { ClearError, ClearJobState } = JobSlice.actions;

export default JobSlice.reducer;
