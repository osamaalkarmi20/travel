import Home from "./components/home/Home";
import DataJson from "./Data/data.json";
import "./App.css";  
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes} from "react-router-dom";
import Header from "./components/header/Header";
import TourDetails from "./components/TourDetails/TourDetails";




function App() {

  
  return (
    
    <> 
    <Header/>
<Routes><Route path="/" element={<Home data={DataJson}/>}></Route>
<Route path="/city/:id" element={<TourDetails data2={DataJson}/>}></Route>

 </Routes>

    </>
  );
}

export default App;
