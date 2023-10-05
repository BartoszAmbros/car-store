import logo from './logo.svg';
import './style.scss';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import ContactPage from './pages/Contact';
import AboutPage from './pages/About'
import LoginPage from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
