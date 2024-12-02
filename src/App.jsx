
import './index.css';
import React, { useEffect, useState } from "react";
import Header from './components/header';
import ListaDeDeputados from './components/listaDeputados';
import Votacao from './components/votacao';
import { PrimeReactProvider } from 'primereact/api';
import { Divider } from 'primereact/divider';


function App() {

  const [deputados, setDeputados] = useState([]);

  // Carrega o JSON da pasta public
  useEffect(() => {
    fetch('/dadosCompletos.json')
      .then((response) => response.json())
      .then((data) => setDeputados(data.dados || []))
      .catch((error) => console.error('Erro ao carregar deputados:', error));
  }, []);


  return (
    <PrimeReactProvider>

    <div>
      <Header />
      <Divider/>
      <Votacao />
      <Divider/>
      <ListaDeDeputados  deputados={deputados} />
    </div>
    </PrimeReactProvider>
  )
}

export default App;
