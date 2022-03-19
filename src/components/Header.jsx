// Importando Hooks
import { useEffect, useState } from "react";
// Importando Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faRemove } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
// Importando estilos
import '../styles/header/header.scss';
import '../styles/header/bar.scss';

const Header = () => {
  const [navBar, setNavBar] = useState(false);
  const [btnMenu, setBtnMenu] = useState(false);
  const [btnMenuContent, setBtnMenuContent] = useState(faBars);

  const NavegacionFija = () => {
    if(window.scrollY >= 70){
      setNavBar(true);
    }else{
      setNavBar(false);
    }
  }
  const HandleBtnMenu = () => {
    if(btnMenu == true){
      setBtnMenu(false);
      setBtnMenuContent(faBars);
    } else{
      setBtnMenu(true);
      setBtnMenuContent(faRemove);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', NavegacionFija, true);
    // Remove the event listener
    return () => {
      window.removeEventListener('scroll', NavegacionFija, true);
    };
  }, []);

  const classNavBar = navBar ? 'header fijo': 'header';
  const classMenu = btnMenu ? 'nav nav--float': 'nav';
  return (
    <>
      <header className={classNavBar}>
        <div className="header__container">
            <div className="bar">
                <nav id="nav" className={classMenu}>
                  <ul className="nav-list">
                    <li className="nav-list__item">
                      <a href="#banner">Home</a>
                    </li>
                    <li className="nav-list__item">
                        <a href="#skill">Skills</a>
                    </li>
                    <li className="nav-list__item">
                      <a href="#projects">Projects</a>
                    </li>
                  </ul>
                </nav>
                <div className="follow">
                    <a href="https://github.com/sskaren1" className="follow__icon" title="Developer's Github" target="_blank">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/karen-obispo-campos" className="follow__icon" title="Developer's LinkedIn" target="_blank">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div> 
                <div className="icon-hamburguer">
                  <a href="#nav" className="btn-flotante" onClick={HandleBtnMenu}>
                    <FontAwesomeIcon icon={btnMenuContent} />
                  </a>
                </div>
            </div> 
        </div>
      </header>
    </>
  )
}

export default Header