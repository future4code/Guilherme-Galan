import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="cabecalho">
        <img src={require("./img/logo-header.png")} alt="logo"/><h2>FutureTube</h2>
        <div className="busca">
        <input type="text" id="txtBusca" placeholder="Pesquisar Vídeos" size="50"></input><button>Pesquisar</button>
          
        </div>
      </header>
      <main className="conteudo">
        <input type="checkbox" id="check"></input>
        <label id="icone" htmlFor="check"><img src={require("./img/icone.png")} alt="icone-menu"></img></label>
        <div className="barra">
          <nav>
            <a href="index.html"><div className="link">Inicio</div></a>
            <a href=""><div className="link">Em Alta</div></a>
            <a href=""><div className="link">Inscrições</div></a>
            <a href=""><div className="link">Bliblioteca</div></a>
            <a href=""><div className="link">Histórico</div></a>
          </nav>
        </div>
        <section className="video__conteudo">
          <article className="video__card">
            <a href="video1.html"><img className="imagem" alt="video1" src={require("./img/video1.jpg")}></img></a>
            <div className="card__titulo">
              <h5>Ireland's Beauty</h5>
            </div>
          </article>

          <article className="video__card">
            <a href="video2.html"><img className="imagem" alt="video2" src={require("./img/video2.jpg")}></img></a>
            <div className="card__titulo">
              <h5>Red Blood Cells</h5>
            </div>
          </article>

          <article className="video__card">
            <a href="video3.html"><img className="imagem" alt="video3" src={require("./img/video3.jpg")}></img></a>
            <div className="card__titulo">
              <h5>Abstract Galaxy</h5>
            </div>
          </article>

          <article className="video__card">
            <a href="video4.html"><img className="imagem" alt="video4" src={require("./img/video4.jpg")}></img></a>
            <div className="card__titulo">
              <h5>Relax Time</h5>
            </div>
          </article>

          <article className="video__card">
            <a href="video5.html"><img className="imagem" alt="video5" src={require("./img/video5.jpg")}></img></a>
            <div className="card__titulo">
              <h5>Foggy Forest</h5>
            </div>
          </article>

          <article className="video__card">
            <a href="video6.html"><img className="imagem" alt="video6" src={require("./img/video6.jpg")}></img></a>
            <div className="card__titulo">
              <h5>The Rabbit</h5>
            </div>
          </article>

          <article className="video__card">
            <a href="video7.html"><img className="imagem" alt="video7" src={require("./img/video7.jpg")}></img></a>
            <div className="card__titulo">
              <h5>Space Travel</h5>
            </div>
          </article>

          <article className="video__card">
            <a href="video8.html"><img className="imagem" alt="video8" src={require("./img/video8.jpg")}></img></a>
            <div className="card__titulo">
              <h5>Rocket Man</h5>
            </div>
          </article>
        </section>
      </main>
      <footer className="rodape">FutureTube - Todos os direitos reservados &copy:2020</footer>
    </div>
  )
}

export default App;