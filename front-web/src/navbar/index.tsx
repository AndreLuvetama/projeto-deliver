import { Link } from 'react-router-dom';
import './style.css';
import { ReactComponent as Logo} from './Logotipo.svg';

function Navbar() {
    return (
        <nav className = "main-navbar">            
            <Link to="/" className ="logo-text"> <Logo /> </Link>
        </nav>

    )
}

export default Navbar;

