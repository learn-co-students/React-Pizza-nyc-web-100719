import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  render() {
    console.log("pizza list")
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            //render Pizza here
            this.props.pizza.map(pizzas => {
              return <Pizza pizzas={pizzas} key={pizzas.id} handleClick={this.props.handleClick}/>
            })
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
