import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Review from './components/Review/Review';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/home" element={<Home />}>Home</Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;