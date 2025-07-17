
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import ScreenResize from './components/ScreenSize';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {
  ScreenResize()
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/About" element={<About></About>}></Route>
    <Route path="/Projects" element={<Project></Project>}></Route>
    <Route path="/Contact" element={<Contact></Contact>}></Route>


    </Routes>
    </BrowserRouter>
  );
}


export default App;
