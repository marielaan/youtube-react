import React from 'react';
import logo from './logo.svg';
import Componente from './component/Componente';
import Propiedades from './component/Propiedades';
import Estado from './component/Estado';
import RenderizadoCondicional from './component/RenderizadoCondicional';
import RenderizadoElementos from './component/RenderizadoElementos';
import {EventosES6, EventosES7, MasSobreEventos} from './component/Eventos';
import ComunicacionComponentes from './component/ComunicacionComponentes';
import CicloVida from './component/CicloVida';
import AjaxApis from './component/AjaxApis';
import ContadorHooks from './component/ContadorHooks';
import ScrollHooks from './component/ScrollHooks';
import './App.css';
   




function App() {  
  return (
    <div className="App">
      <header className="App-header">
        <section>
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </section>
      
      <section>
        <Componente msg="Hola soy un Componente Funcional Expresado desde una props"/>
        <hr/>
        <Propiedades cadena="Esto es una cadena de texto"
         numero={19}
         booleano={false}
         arreglo={[1, 2, 3]}
         objeto={{nombre:"Mariela", 
         correo:"marielaancordoba@gmail.com"}}
         funcion={num => num * num}
         elementoReact={<i>Esto es un elemento React</i>}
         componenteReact={<Componente msg="Soy un componente pasado como Props"/>}
         />
          <hr/>
          <Estado/>
          <hr/>
          <RenderizadoCondicional/>
          <hr/>
          <RenderizadoElementos/>
          <EventosES6/>
          <hr/>
          <EventosES7/>
          <hr/>
          <MasSobreEventos/>
          <hr/>
          <ComunicacionComponentes/>
          <hr/>
          <CicloVida/>
          <hr/>
         <AjaxApis/>
         <hr/>
         <ContadorHooks titulo= "Seguidores"/>
         <hr/>
         <ScrollHooks/>
          
      </section>
      </header>
     
    </div>
  );
}
          
export default App;
          

