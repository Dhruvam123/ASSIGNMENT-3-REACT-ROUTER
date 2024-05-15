import './Header.css';
import {Link} from "react-router-dom"
import {Container} from "react-bootstrap"
const Header=()=>{
    return(
        <Container fluid className='container'>
        <ul>
  <li className='first'><Link className="active" to="/">Home</Link></li>
  <li><Link to="/news">News</Link></li>
  
  <li><Link to="/about">About</Link></li>
</ul>
      </Container>     
    )
}
export default Header