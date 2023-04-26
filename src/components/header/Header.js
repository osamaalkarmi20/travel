import { Link } from "react-router-dom";
import "./Header.css"; 
import { Navbar } from "react-bootstrap";
function Header() {
    return (
      <>
  <h1>TOURING WEB</h1>
  <Navbar> <Link to="/">home</Link>
</Navbar>
      </>
    );
  }
  
  export default Header;
  