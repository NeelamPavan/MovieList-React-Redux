import './App.css';
import { MovieList } from './components/MovieList';
import { MovieImport } from './components/MovieImport';

function App() {
  return (
    <>
      <div>
        <MovieList />
      </div>
      <div>
        <MovieImport />
      </div>
    </>
  );
}

export default App;
