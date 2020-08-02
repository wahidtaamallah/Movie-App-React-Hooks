import React,  { useState } from 'react';
import './App.css';
import AddModal from "./components/AddModal";
import { v4 as uuidv4} from 'uuid';
import ListMovies from './components/ListMovies';
import Search from './components/Search';
import StartRating from './components/StartRating'

function App() {

 
  const addM = (movie) => {
    setMoviesTask([...useTaskmovie, movie]);
  };
  const [useTaskmovie, setMoviesTask] = useState([

  {
        id: uuidv4(),
        name: "othmen",
        image:"https://i0.wp.com/matfaletchay.com/wp-content/uploads/2020/02/pCsp1.jpeg?fit=1366%2C768&ssl=1",
        rating: 5,
        year: "2020"    
      },
      {
      id: uuidv4(),
      name: "Dachra",
      image:
      "https://cdn1.webmanagercenter.com/tekiano/wp-content/uploads/2019/01/dachra-affiche-2.jpg",
      rating: 5,
      year: "2019" 
    },
    {
      id: uuidv4(),
      name: "el 7ofra",
      image:
      "https://replay.nessma.tv/uploads/2/2020-04/5147153389d07a42204a889dc4d0c21d.jpg",
      rating: 5,
      year: "2018" 
    },
    {
      id: uuidv4(),
      name: "casa del papel",
      image:
      "https://mcetv.fr/wp-content/uploads/2020/08/la-casa-de-papel-saison-5-le-tournage-debute-enfin-1.jpg",
      rating: 5,
      year: "2017" 
    }, 
    {
      id: uuidv4(),
      name: "viking",
      image:
      "https://static.papergeek.fr/2019/10/vikings-saison-6.jpg",
      rating: 5,
      year: "2020" 
    },       
    ]);
  
    const [rt, setrt] = useState();
    function rrrt(el) {
      setrt(el);
    }
    const search = (movie) => {
      setMoviesTask(movie);
    };
  return (
    <div className="App">
        <h1>Movie App</h1>
        <div className="clAddStart">
       <AddModal addM={(M)=> addM(M)}/>
       <StartRating rrrt={(r) => rrrt(r)} />
     </div>
     <Search x={useTaskmovie} rt={rt} search={(s) => search(s)} />
     <ListMovies movies={useTaskmovie}/>
    </div>
    );
  }


export default App;
