
import './App.css';
import ActorModel from './models/ActorModel';
import ActorCard from './components/ActorCard';
import ActorsPage from './components/pages/ActorsPage';
import MovieCard from './components/MovieCard';
import { Navbar } from 'react-bootstrap';
import {Switch, HashRouter, Route} from 'react-router-dom';
import HomePage from './components/pages/HomePage';



function App() {

  return (
    <div>
      <Navbar>
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Brand href="#home">Movies</Navbar.Brand>
      <Navbar.Brand href="#/actors">Actors</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      </Navbar.Collapse>
    </Navbar>
      <HashRouter>
        <Switch>

          <Route exact path="/">
            <div className="App">
              <header className="App-header">
                <HomePage/>
              </header>
            </div>
          </Route>
          
          <Route exact path="/actors"><ActorsPage/></Route>
          
          {/* <Route exact path="/movies"><?MoviesPage /></Route> */}
        </Switch>
      </HashRouter>
    </div>
    
    
    
    
  );
}

export default App;
