import './style.css';
import { ReactComponent as Logo} from './Logotipo.svg';

function Navbar() {
    return (
        <nav className = "main-navbar">
            
            <a href="home" className ="logo-text"> <Logo /> </a>
        </nav>

    )
}

export default Navbar;

