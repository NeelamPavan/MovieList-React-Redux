import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [
    { id: 1, name: "Interstellar" },
    { id: 2, name: "Harry Potter" },
  ],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // Add a new movie to the state
    addMovie: (state, action) => {
      // Correctly increment the id by accessing the last movie's id
      const newMovie = {
        id: state.movies[state.movies.length - 1].id + 1, // Correct id increment
        name: action.payload,
      };
      state.movies.push(newMovie);
    },

    // Remove a movie based on its ID
    removeMovie: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
    },
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;
