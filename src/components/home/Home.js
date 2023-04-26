
import Footer from "../footer/Footer";

import Tours from "../tours/Tours";

import "./Home.css";  
function Home(props) {
    return (
      <>

  <Tours datareceved={props.data}/>
  
  <Footer/>

      </>
    );
  }
  
  export default Home;
  