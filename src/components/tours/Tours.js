
import "./Tours.css";  
function Tours(props) {
    console.log(props.datareceved);
    return (
      <>
   
   <div>
            {props.datareceved.map(user => (
                <div key={user.id}>
                    <p>{user.name}</p>
                    
                    <img src={user.image} alt={user.image} ></img>
                </div>
            ))}
            
         
        </div>
      </>
    );
  }
  
  export default Tours;
  