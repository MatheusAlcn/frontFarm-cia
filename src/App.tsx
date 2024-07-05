import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from './components/home/Home';
import ListaCategoria from './components/categorias/ListaCategoria';
import FormularioCategoria from './components/categorias/FormularioCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'; 

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      
        
          
          <div className='min-h-[80vh]'>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<ListaCategoria  />} />
          <Route path="/cadastroCategorias/" element={<FormularioCategoria />} />
          <Route path="/editarcategorias/" element={<FormularioCategoria />} />
          <Route path="/deletarcategorias/" element={<DeletarCategoria />} />

          </Routes>
          </div>
         
        
     
      <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
