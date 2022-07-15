import { Route, Routes } from 'react-router-dom';
import Details from './components/Details';
import Homepage from './components/Homepage';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </div>
  );
}
