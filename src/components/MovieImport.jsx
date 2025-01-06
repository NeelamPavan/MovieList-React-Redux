import { useState } from "react";
import { addMovie } from "../movieSlice";
import { useDispatch } from "react-redux";

export const MovieImport = () => {
  const [mov, setNewMovie] = useState("");  // Use 'setNewMovie' as the state setter function
  const dispatch = useDispatch();

  const handleMovie = () => {
    if (mov) {
      dispatch(addMovie(mov));  // Dispatch the action to add the movie
      setNewMovie("");  // Use 'setNewMovie' to update the state after dispatch
    }
  };

  return (
    <div>
      <input onChange={(e) => setNewMovie(e.target.value)} value={mov} />
      <button onClick={handleMovie}>Add Movie</button>
    </div>
  );
};
