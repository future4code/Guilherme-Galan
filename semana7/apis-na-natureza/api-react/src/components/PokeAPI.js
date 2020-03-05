import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const PokeDexWrapper = styled.div`
    background:darkred;
    height:100vh;
    text-align:center;

`

const PokemonDetailsWrapper = styled.div`
    background:white;
    width:10%;
    margin-left:45%;
    margin-top:2%;
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    
`

const Header = styled.header`
    color:yellow;
    font-size:30px;
    font-weight:bold;
    margin-bottom:50px;
    height:50px;
    background-color:firebrick;

`

const Span = styled.span`
    color:darkblue;
`

const baseURL = "https://pokeapi.co/api/v2"

class PokeAPI extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            allPokemons: [],
            pokemonPhoto: '',
            pokemonName:'',
            pokemonWeight:'',
            pokemonHeight: '',
            pokemonTypes: ''                      

        }

    }

    componentDidMount() {
        this.getAllPokemons()
    }

    getAllPokemons = async () => {
        const response = await axios.get(`${baseURL}/pokemon?limit=151`)
        this.setState({ allPokemons: response.data.results })
    }

    getPokemonsDetails = async (event) => {
        const urlPokemonDetails = event.target.value
        const response = await axios.get(urlPokemonDetails)
        const urlPhoto = response.data.sprites.front_default
        const name = response.data.name
        const weight = response.data.weight
        const height = response.data.height
        const types = response.data.types.map(tipo => {return(tipo.type.name + "/")})        
        
        this.setState({
            pokemonPhoto: urlPhoto,
            pokemonName : name,
            pokemonWeight : weight,
            pokemonHeight : height,
            pokemonTypes : types,           
            
        })        

    }

render(){
    return (
        <PokeDexWrapper>
            <Header>Pokémons Clássicos - <Span>PokéAPI</Span></Header>
            <img src={"https://1.bp.blogspot.com/-rUCXWH5qpOc/UK6WlG3WZ7I/AAAAAAAAAKI/unswwOgdGFY/s1600/Pokemon.gif"} alt="foto-capa" /> <br />
            <select onChange={this.getPokemonsDetails}>
                <option>Selecione um Pokemon</option>
                {this.state.allPokemons.map((pokemon) => (<option key={pokemon.id} value={pokemon.url}>{pokemon.name}</option>))}
            </select>
            {this.state.pokemonPhoto &&(
                <PokemonDetailsWrapper>                    
                    <img src={this.state.pokemonPhoto} alt="Foto do Pokémon" />
                    <p>Nome: {this.state.pokemonName}</p>
                    <p>Peso: {this.state.pokemonWeight}00 gramas</p>
                    <p>Altura: {this.state.pokemonHeight}0 cms</p>
                    <p>Tipos: {this.state.pokemonTypes}</p>                                    
                </PokemonDetailsWrapper>
            )}
        </PokeDexWrapper>

    )
}
}

export default PokeAPI