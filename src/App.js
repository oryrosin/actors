import logo from './logo.svg';
import './App.css';
import ActorModel from './models/Actor';


function App() {
  const actor1= new ActorModel(
    "Daniel", "Day-Lewis","1957-04-29", 
    "https://m.media-amazon.com/images/M/MV5BMjE2NDY2NDc1Ml5BMl5BanBnXkFtZTcwNjAyMjkwOQ@@._V1_UY317_CR13,0,214,317_AL_.jpg", 
    "https://www.imdb.com/name/nm0000358/?ref_=nv_sr_srsg_0#actor" 
  );
  const actor2= new ActorModel("Brad ","Pitt","1963-12-18",
  "https://m.media-amazon.com/images/M/MV5BMjA1MjE2MTQ2MV5BMl5BanBnXkFtZTcwMjE5MDY0Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg",
  "https://www.imdb.com/name/nm0000093/");

  // const actor3 =new ActorModel
  const actors= [actor1,actor2]; 
  var x=1;




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{actors[0].fName}</div>
      </header>
    </div>
  );
}

export default App;
