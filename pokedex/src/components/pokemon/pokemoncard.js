import React, { Component } from 'react';
import Styled from 'styled-components'
import Spinner from '../pokemon/2.gif'
import { Link } from 'react-router-dom';


const Sprite =  Styled.img ` 
width : 9em;
height:9em
`
const Card = Styled.div`
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:
hover {
    box-shadow: 0 14px 30px #D2691E, 0 10px 10px rgba(0, 0, 0, 0.22);
  }

`;

  const StyledLink = Styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
class PokeCard extends Component {
    state = { 
        name:'',
        imageUrl:'',
        // pokemonIndex:'',
        imageLoading:true,
        toManyRequests:false
     };

     componentDidMount(){
        const {name,url} = this.props;
        const pokemonIndex = url.split("/")[url.split('/').length -2];
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`
        
        this.setState({
            name , 
            imageUrl,
            pokemonIndex
        })
    }
    render() { 
      

        return ( 
        <div className=" col-md-4 col-sm-6 mb-5 ">
            <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>

           
        <Card className="card border-danger mb-3">
        
        <h5 className="card-header ">{this.state.pokemonIndex}</h5> 

        {this.state.imageLoading ? (
              // eslint-disable-next-line jsx-a11y/alt-text
              <img
                src={Spinner}
                style={{ width: '3em', height: '3em' }}
                className="card-img-top rounded mx-auto d-block mt-2"
              />
            ) : null}
         
        <Sprite className="card-img-top rounded mx-auto mt-2" 
        onLoad={()=>this.setState({imageLoading:false})}
        onError={()=>this.setState({toManyRequests:true})}
            src={this.state.imageUrl}
            style={
                this.state.toManyRequests
                  ? { display: 'none' }
                  : this.state.imageLoading
                  ? null
                  : { display: 'block' }
        }
                  />

                     {this.state.oManyRequests ? (
              <h6 className="mx-auto">
                <span className="badge badge-danger mt-2">
                  To Many Requests
                </span>
              </h6>
            ) : null}
        <div className="card-body text-danger mx-auto">
            <h6 className="card-title text-danger">{this.state.name.toLowerCase().split(" ").map(
                letter => letter.charAt(0).toUpperCase()+letter.substring(1)).join(" ")}</h6>
        </div>
        </Card>
        </StyledLink>
        </div> 
        );
    }
}
 
export default PokeCard;
