import './App.css';
import Home from './Home';
import { Routes, Route } from 'react-router-dom'
import Chapter from './Chapter';
import Admin from './Admin';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="admin" element={<Admin />} />
        <Route path="chapters/:chapter_num" element={<Chapter />} />
      </Routes>

    </div>
  );
}

export default App;