import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json";
import FoodList from "./FoodList";

const normalize = str => str.toLocaleLowerCase();

const normalizedFoods = foods.map(food => ({
  ...food,
  _normalized: normalize(food.name)
}));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foods,
      query: ""
    };
  }

  searchFood = event => {
    const userInput = event.target.value;

    const filteredArray = normalizedFoods.filter(food =>
      food._normalized.includes(normalize(userInput))
    );

    this.setState({
      foods: filteredArray,
      query: userInput
    });
  };

  render() {
    const { foods, query } = this.state;
    const foodArray = foods.map(el => (
      <FoodList food={el} key={el.name} />
    ));

    return (
      <div>
        <div className="field">
          <label className="label" htmlFor="search-input">
            Name
          </label>
          <div className="control">
            <input
              id="search-input"
              onChange={this.searchFood}
              value={query}
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
