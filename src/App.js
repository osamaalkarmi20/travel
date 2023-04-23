import Home from "./components/home/Home";
import DataJson from "./Data/data.json";
import "./App.css";  

function App() {
  return (
    <>
<Home data={DataJson}/>
    </>
  );
}

export default App;
