import React from "react"
// import { prependOnceListener } from "cluster"

class PizzaForm extends React.Component{

  state = {
    topping: '',
    size: '',
    vegetarian: ''
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.thisPizza.id !== this.props.thisPizza.id){
      console.log(this.props.thisPizza)
      // update my state to reflect that 
      this.setState({
        topping: this.props.thisPizza.topping,
        size: this.props.thisPizza.size,
        vegetarian: this.props.thisPizza.vegetarian
      })
    }
  }

  //onchange, update state to input
  handleChange=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  //onCLick, update the pizza's state in App
  //patch fetch
  handleSubmit=(e)=>{
    e.preventDefault()
    let {topping, size, vegetarian} = this.state;
    fetch(`http://localhost:3000/pizzas/${this.props.thisPizza.id}`, {
        method: "PATCH", 
        headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json"
        },
        body: JSON.stringify({
          topping,size,vegetarian
        })     
      })   
      .then(resp => resp.json())
      .then(data => {
        this.props.updatedPizza(data)
      })
        this.setState({
          topping: '',
          size: '',
          vegetarian: ''
        })
      console.log("finish fetch")
    }

  render() {
    console.log(this.props.thisPizza.topping, this.state.topping)
    return(
        <div className="form-row">
          <div className="col-5">
              <input type="text" 
                      className="form-control" 
                      name="topping"
                      placeholder="Pizza Topping"
                      value={this.state.topping}
                      onChange={this.handleChange}/>
            </div>
            <div className="col">
              <select value={this.state.size} 
                    onChange={this.handleChange}
                    name="size"
                    className="form-control">
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </div>
            <div className="col">
              <div className="form-check">
                <input className="form-check-input" 
                      type="radio" 
                      name="vegetarian"
                      value="Vegetarian" 
                      checked={this.state.vegetarian}
                      onChange={this.handleChange}/>
                <label className="form-check-label">
                  Vegetarian
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" 
                          type="radio" 
                          name="notVegetarian"
                          value="Not Vegetarian" 
                          checked={this.state.vegetarian ? false : true} 
                          onChange={this.handleChange}/>
                <label className="form-check-label">
                  Not Vegetarian
                </label>
              </div>
            </div>
            <div className="col">
              <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
            </div>
        </div>
    )}
}
export default PizzaForm
