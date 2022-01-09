import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppState } from '../types/AppState';

export const getTest = createAsyncThunk(
  'app/getTest',
  async (_params, _thunkApi) => {
    return {
      test: 'test',
    };
  },
);

export const initialState: AppState = {
  sessionStart: new Date(),
  sessionEnd: undefined,
  test: undefined,
};

const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSessionEnd: (state, action: any) => {
      state.sessionEnd = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTest.fulfilled, (state, action) => {
        state.test = action.payload;
      })
      .addCase(getTest.pending, (state, action) => {
        state.test = action.payload;
      })
      .addCase(getTest.rejected, (state, action) => {
        state.test = action.payload;
      });
  },
});

export const { setSessionEnd } = AppSlice.actions;

export default AppSlice.reducer;
