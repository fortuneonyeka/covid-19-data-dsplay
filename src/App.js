import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faCog } from '@fortawesome/free-solid-svg-icons';
import { Navbar } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Details from './components/Details';
import HomePage from './components/HomePage';

function App() {
  return (
    <div>
      <header>
        <Navbar className="px-4 text-white bg-pink-400 d-flex justify-content-between">
          <Link to="/" className="text-decoration-none text-white fw-bold">
            &#60; HOME
          </Link>
          <h3 className="m-0">COVID-19 CASE STATISTICS</h3>
          <span>
            <FontAwesomeIcon icon={faMicrophone} className="me-4" />
            <FontAwesomeIcon icon={faCog} />
          </span>
        </Navbar>
      </header>

      <main>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
