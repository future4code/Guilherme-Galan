import React from 'react';
import './App.css';
import PageSection from './Components/PageSection/PageSection';
import BigCard from './Components/BigCard/BigCard'
import SmallCard from './Components/SmallCard/SmallCard'
import ImageButton from './Components/ImageButton/ImageButton';

function App() {
  return (
    <div className="App">
      <PageSection texto="Dados Pessoais">
        <BigCard texto="Guilherme Galan" img={require("./Components/img/foto-teste.jpg")} descricao="Olá, eu sou o Guilherme. Atualmente cursando Desenvolvimento Web Full-Stack na Future4" />
        <SmallCard imgEmail={require("./Components/img/email.png")} email="gui_galan@hotmail.com" imgEndereco={require("./Components/img/casa.png")} endereco="Rua Nossa Senhora das Mercês" />
        <ImageButton texto="Ver Mais" img={require("./Components/img/seta.png")} />
      </PageSection>
      <PageSection texto="Formação Acadêmica">
        <BigCard texto="FIAP - Faculdade de Informática e Administração Paulista" img={require("./Components/img/fiap.png")} descricao = "Formado em Administração com Ênfase em T.I" />
      </PageSection>
      <PageSection texto="Experiências Profissionais">
        <BigCard texto="LemonBlue" img={require("./Components/img/lemon.jpg")} descricao="Fazendo alguns freelas de SEO e otimização de sites em geral." />
        <BigCard texto="Future4" img={require("./Components/img/f4.png")} descricao="Futuro Desenvolvedor Web Full Stack" />
      </PageSection>
      <PageSection texto="Minhas Redes Sociais">
        <ImageButton texto="Facebook"img={require("./Components/img/facebook.png")} />
        <ImageButton texto="Instagram"img={require("./Components/img/instagram.png")} />
        <ImageButton texto="Linkedin"img={require("./Components/img/linkedin.png")} />
      </PageSection>
    </div>
  );
}

export default App;
