import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import './App.css';
import Home from './paginas/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './paginas/login/Login';


function App() {
  return (
    <Router>
      <Navbar />

      <div style={{ minHeight: '100vh' }}>
         <Routes> {/* Antigo Switch */}
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
           <Route path="/login" element={<Login />} />
          {/* <Route path="/cadastro" element={<CadastroUsuario />} />   */}
        </Routes>
      </div>

      <Footer />
    </Router>
  )
}


  export default App;
