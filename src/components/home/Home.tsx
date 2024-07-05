// src/components/Home.js

import { Link } from "react-router-dom";
import ListaCategoria from "../categorias/ListaCategoria";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo à Farmácia ABC</h1>
      <p className="text-lg mb-4">Seu bem-estar é a nossa prioridade</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex justify-around gap-4">
          <Link to='/categorias' className='rounded bg-white text-blue-800 py-2 px-4 hover:bg-green-500 hover:text-white'>
            Ver Categorias
          </Link>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <ListaCategoria />
      </div>
    </div>
  );
}

export default Home;
