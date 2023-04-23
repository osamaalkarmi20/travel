import Footer from "../footer/Footer";
import Header from "../header/Header";
import Tours from "../tours/Tours";


import "./Home.css";  
function Home(props) {
    return (
      <>
  <Header/>
  <Tours datareceved={props.data}/>
  <Footer/>

      </>
    );
  }
  
  export default Home;
  