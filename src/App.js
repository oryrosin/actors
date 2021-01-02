
import './App.css';
import ActorModel from './models/ActorModel';
import ActorCard from './components/ActorCard';
import ActorsPage from './components/ActorsPage';
import MovieCard from './components/MovieCard';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <ActorsPage/>
        
      </header>
    </div>
  );
}

export default App;
