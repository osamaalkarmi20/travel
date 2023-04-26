

import "./Tours.css";  
import Tour from "./tour/Tour";

function Tours(props) {
  
    return (
      <>
   
  <Tour tour={props.datareceved} />
 
      </>
    );
  }
  
  export default Tours;
  