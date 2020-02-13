import React from 'react';
import './App.css';
import Post from './Components/Post/Post';
import ConteudoPost from './Components/ConteudoPost/ConteudoPost';
import LikesAndComents from './Components/LikesAndComents/LikesAndComents';

function App() {
  return (
    <div className="App">
      <Post>
        <ConteudoPost nome="guilherme.galan" img={require("./Components/img/linux-windows.jpeg")}>
          <LikesAndComents />
        </ConteudoPost>
        <ConteudoPost nome="guilherme.galan" img={require("./Components/img/lago.jpeg")} >
          <LikesAndComents />
        </ConteudoPost>
        <ConteudoPost nome="guilherme.galan" img={require("./Components/img/images.jfif")} >
          <LikesAndComents />
        </ConteudoPost>
      </Post>

    </div>
  );
}

export default App;
