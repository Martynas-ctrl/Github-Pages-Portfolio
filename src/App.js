import logo from './logo.svg';
import './css/Header.css';

function App() {
  return (
    <div>
      <header className="l-header">
        <nav className="nav">
          <div>
            <a className="nav_logo" href="#">Martynas</a>
          </div>
          
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
                <li className="nav__item"><a id="nav__link" href="#" target="_blank" rel="noopener noreferrer">Hem</a></li>
                <li className="nav__item"><a id="nav__link" href="#" target="_blank" rel="noopener noreferrer">Om</a></li>
                <li className="nav__item"><a id="nav__link" href="#" target="_blank" rel="noopener noreferrer">Kunskap</a></li>
                <li className="nav__item"><a id="nav__link" href="#" target="_blank" rel="noopener noreferrer">Service</a></li>
                <li className="nav__item"><a id="nav__link" href="#" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
                <li className="nav__item"><a id="nav__link" href="#" target="_blank" rel="noopener noreferrer">Kontakta Mig</a></li>
            </ul>
          </div>
        </nav>
      </header>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default App;
