import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';

function App() {
  return (
    <Router>
      <Navbar />

      <div style={{ minHeight: '100vh' }}>
         <Routes> 

          <Route
           path="/home" 
           element={<Home />}
          />

          <Route
           path="/" 
           element={< Login />} 
          />

          <Route 
           path="/login" 
           element={< Login />} 
          />

          <Route 
           path="/cadastrousuario" 
           element={< CadastroUsuario />} 
          />   

        </Routes>
      </div>

      <Footer />
    </Router>
  )
}


  export default App;
