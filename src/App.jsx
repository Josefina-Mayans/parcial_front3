import { useState } from 'react'
import './App.css'
import Form from './Form'
import Card from "./Card";


function App() {
  const [usuarios, setUsuarios] = useState([])

  const addUsuario = (usuario)=>{
    setUsuarios([...usuarios,usuario]);
  }


  return (
    <div className="App">
      <h1>Elige un color</h1>
      <Form onAddUsuario={addUsuario}/>
      <Card usuarios={usuarios}/>
    </div>
  );
}

export default App;



