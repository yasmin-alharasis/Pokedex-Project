import React, { Component } from 'react';
import PokeCard from './pokemoncard'
import axios from 'axios'

class PokeList extends Component {
    state = { 
        url:"https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100",
        pokemon :null
     }
     async componentDidMount(){
        const res =await axios.get(this.state.url);
        this.setState({pokemon:res.data["results"]});
     }
    render() { 
        return (
        <div>
            {this.state.pokemon?( <div className = "row">
            {this.state.pokemon.map(pokemon =>(
            <PokeCard 
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}/>
            ) )}

        </div>):null}
       
        </div>  );
    }
}
 
export default PokeList;