import './style.css';
import { ReactComponent as Linkedin} from './linkedin.svg';
import { ReactComponent as Instagram} from './Youtube.svg';
import { ReactComponent as Youtube} from './Instagram.svg';

function Footer() {
    return (
        <footer className = "main-footer">            
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior

            <div className="footer-icons">
                <a href="https://www.youtube.com/results?search_query=layout+react+js+" target= "_new">
                    <Youtube />
                </a>

                <a href="https://www.instagram.com/" target= "_new" >
                <Instagram />
                </a>

                 <a href="https://www.linkedin.com/" target= "_new" >
                <Linkedin />
                </a>

              

            </div>
        </footer>
       

    )
}

export default Footer;

