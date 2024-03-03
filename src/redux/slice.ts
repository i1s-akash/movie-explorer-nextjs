import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface MovieState {
  loading: boolean;
  movie_data: any[];
  err: any;
}

const initialState: MovieState = {
  loading: false,
  movie_data: [],
  err: "",
};

export const fetchMovie = createAsyncThunk<any>(
  "movie_data/fetchMovie",
  async (que) => {
    const response = await axios.get<any>(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_API_KEY}&query=${que}`
    );
    return response.data;
  }
);

const movieSlice = createSlice({
  name: "movie_data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovie.pending, (state) => {
      state.loading = true;
      state.movie_data = [];
      state.err = "";
    });
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.loading = false;
      state.movie_data = action.payload;
      state.err = "";
    });
    builder.addCase(fetchMovie.rejected, (state, action) => {
      state.loading = false;
      state.movie_data = [];
      state.err = action.error.message;
    });
  },
});

export default movieSlice.reducer;
