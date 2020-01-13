import React from "react"

const Pizza = (props) => {
  return(
    <tr>
      <td>{props.pizzas.topping}</td>
      <td>{props.pizzas.size}</td>
      <td>{props.pizzas.vegetarian ? 'Yes': 'No'}</td>
      <td><button type="button" 
                  className="btn btn-primary" 
                  onClick={() => props.handleClick(props.pizzas)}>
            Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
