import './App.css'
import Sidebar from './componentes/sidebar'
import BarraDePesquisa from './componentes/barraDePesquisa'
import Filtro from './componentes/Filtro'
import Card from './componentes/Card'
import Ordenacao from './componentes/Ordenacao'
import { useEffect } from 'react'
import { useState } from 'react';

function App() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes')
      .then(response => response.json())
      .then(dados => setDados(dados))
      .catch(error => console.error('Error fetching data:', error));
  }, [])



  return (
    <div className='container'>
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro />
        <Ordenacao />
        <ul className='lista-cards'>
          {dados ? dados.map((item, index) => (
           <li key={index}>
              <Card
              id={item.id}
              imagemUrl ={item.imagem_capa}
              titulo={item.titulo}
              resumo={item.resumo}
              linhasDeCodigo={item.linhas_de_codigo}
              compartilhamentos={item.compartilhamentos}
              comentarios={item.comentarios}
              usuario={item.usuario}
              />
           </li> 
          )) : null}
        </ul>
      </div>   
    </div>
  )
}

export default App
