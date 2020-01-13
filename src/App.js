import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    pizza: [],
    thisPizza: {}
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(data => {
      this.setState({ pizza: data })
    })
  }

  handleClick=(pizza)=>{
    const chosen = this.state.pizza.filter(p => {
      return p === pizza
    })
    this.setState({
      thisPizza: chosen[0]
    })
  }

  //if this id === pizza.id then change updates 
        //can also write as TURNARY
  updatedPizza=(pizza)=>{
    const updatedPizzas = this.state.pizza.map(p => {
      if (p.id === pizza.id){
        return pizza
      }
      else {
        return p
      }
    })
    this.setState({
      pizza: updatedPizzas
    })
  }
  
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm thisPizza={this.state.thisPizza} updatedPizza={this.updatedPizza}/>
        <PizzaList pizza={this.state.pizza} handleClick={this.handleClick}/>
      </Fragment>
    );
  }
}

export default App;
