import React,{Component} from 'react';
import './App.css';
import NavBar from './components/layout/navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './components/layout/dashboard'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Pokemon from './components/pokemon/pokemon'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
       
      <NavBar/>
    <div className="container"> 
    <Switch>
              <Route exact path="/" component={Dashboard} />
             
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </Switch>
      </div>
          </div>
          </Router>
 );
  }
}
 
export default App ;