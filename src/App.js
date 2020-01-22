import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './sidebar.css';
import './main.css';

import DevItem from './components/DevItem/DevItem';
import DevForm from './components/DevForm/DevForm'; 

//component - bloco isolado de html, css, js q não interfere em outros blocos da aplicação
//estado - informações mantidas pelo componente, pode ser passada aos filhos, a alteração desse estado obriga o componente a renderizar
//propriedade - igual os atributos do html

// <>  </> fragmnent pode ser utilizado para englobar nossos componentes sem utilizar a div

function App() {

  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);
   

  async function handleAddDev(data) {

    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  
  async function handleRemoveDev(id) {

    const response = await api.delete(`/devs/${id}`);
    
    setDevs([...devs.filter(dev => dev._id != id)])
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmite={handleAddDev} />
      </aside>
      <main>
          <ul>

            {devs.map( dev => (
              <DevItem dev={dev} onRemoveDev={handleRemoveDev} />
            ))}

          </ul>
      </main>
   </div>
  );
}

export default App;
