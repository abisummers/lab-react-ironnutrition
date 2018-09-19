import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json";
import FoodList from "./FoodList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: foods
    };
  }

  searchFood(event) {
    let userInput = event.target.value;

    let filteredArray = foods.filter((el, i) => {
      return el.name.indexOf(userInput) !== -1;
    });
    console.log(filteredArray);

    this.setState({
      foods: filteredArray
    });
  }

  render() {
    const { foods } = this.state;
    const foodArray = foods.map((el, index) => {
      return <FoodList oneFood={el} />;
    });

    return (
      <div>
        (
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              onChange={event => this.searchFood(event)}
              className="input"
              type="text"
              placeholder="Text input"
            />
          </div>
        </div>
        {foodArray}
      </div>
    );
  }
}

export default App;
