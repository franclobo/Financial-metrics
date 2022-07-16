import { Route, Routes, NavLink } from 'react-router-dom';
import Details from './components/Details';
import Homepage from './components/Homepage';
import './index.css';

export default function App() {
  return (
    <div>
      <header>
        <NavLink to="/">
          <h1>Cryptoverse</h1>
        </NavLink>
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:name" element={<Details />} />
      </Routes>
      <footer>
        <small>Copyright © 2022</small>
      </footer>
    </div>
  );
}
