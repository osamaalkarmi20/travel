import  {Link}  from "react-router-dom";



function Tour(props) {
  

    return (
      <>
    <div>
            {props.tour.map(user => (
                <div key={user.id}>
                  <Link to={`/city/${user.id}`}><p>{user.name}</p>
              <img src={user.image} alt={user.image} ></img></Link >
  
                </div>
            ))}
            
         
        </div>
       
      </>
    );
  }
  
  export default Tour;
  