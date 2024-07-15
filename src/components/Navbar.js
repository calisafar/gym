import { Link } from 'react-router-dom';
function Navbar(){
    return(
        <div>
            <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Contacte">Contacte</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/GymListing">GymListing</Link></li>
         
        </ul>
      </nav>
        </div>
    )
}
export default Navbar;
