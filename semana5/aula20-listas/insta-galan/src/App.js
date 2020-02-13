import React from 'react';
import './App.css';
import styled from 'styled-components'
import Post from './Components/Post/Post';
import FormPost from './Components/FormPost/FormPost'

const Container = styled.div`
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  align-items:center;
`

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      posts: [{
        imgUsuario: 'https://image.flaticon.com/icons/svg/1077/1077114.svg',
        nomeUsuario: 'Guilherme Galan',
        imgPost: 'https://love.doghero.com.br/wp-content/uploads/2018/03/shutterstock_203453326-e1541429191410-768x575.jpg',
      }]

    }

    }

    onCriaPost = (novoPost) =>{
      const postsCopy = [...this.state.posts, novoPost]      
      this.setState({posts: postsCopy})
  }
  render(){
  const listaDePost = this.state.posts.map((posts) =>{
    return <Post imgUsuario={posts.imgUsuario} nomeUsuario={posts.nomeUsuario} imgPost={posts.imgPost}/>

  })

  return (
    <Container>
      <FormPost />      
      {listaDePost}      
    </Container>
  );
}
}

export default App;

