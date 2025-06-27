import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
