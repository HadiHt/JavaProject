import './App.css';
import Navbar from './components/Navbar/Navbar.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';
import { Routes, Route} from "react-router-dom";
import PlaceToVisit from './pages/PlacesToVisit/PlacesToVisit.tsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path = "/" element = {<HomePage></HomePage>}></Route>
        <Route exact path = "/placetovisit" element = {<PlaceToVisit></PlaceToVisit>}></Route>
        

      </Routes>
      
    </div>
  );
}

export default App;
