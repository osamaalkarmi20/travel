import { useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

function TourDetails(props) {
  const param = useParams()
    ;
  const userid = param.id;
  let a = props.data2.filter(user => userid === user.id);
  const [count, setCount] = useState(0);

  function clicked() {
    setCount(count + 1)
    console.log(count);
 
  }
  function ren(){
   if(count%2===0) {return (

      <>
  
  
        {
  
          <div>
            {a.map(user => (
              <div key={user.id}>
                   
                 <p>{user.name}</p>
              <img src={user.image} alt={user.image} ></img>
  
              
                <p>{user.info.slice(0, 200)} </p>
                <Button onClick={clicked}>see more</Button>
  
  
              </div>
            ))}
  
  
          </div>
  
  
        }
      </>
    );
  
      }
  return (

    <>


      {

        <div>
          {a.map(user => (
            <div key={user.id}>
                <p>{user.name}</p>
              <img src={user.image} alt={user.image} ></img>
  
              <p>{user.info} </p>
              <Button onClick={clicked}>see less</Button>


            </div>
          ))}


        </div>


      }
    </>
  );



  }


  return (

    ren()
  );


}

export default TourDetails;
