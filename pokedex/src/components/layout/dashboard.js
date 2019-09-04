import React, { Component } from 'react';
import PokeList from '../pokemon/pokemonlist'

class Dashboard extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="row">
            <div className="col">
                <PokeList/>
              

            </div>


        </div> );
    }
}
 
export default Dashboard;