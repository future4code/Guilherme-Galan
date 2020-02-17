import React from 'react';
import './App.css';
import DadosGerais from './Components/DadosGerais/DadosGerais.js'
import InfosEducacionais from './Components/InfosEducacionais/InfosEducacionais';
import InfosSemFormacao from './Components/InfosSemFomacao/InfosSemFormacao';
import EtapaFinal from './Components/EtapaFinal/EtapaFinal';

function App() {
  return (
    <div className="App">
      <DadosGerais />
      <InfosEducacionais />
      <InfosSemFormacao />
      <EtapaFinal /> 
      <button>Próxima Etapa</button>    

    </div>
  );
}

export default App;
