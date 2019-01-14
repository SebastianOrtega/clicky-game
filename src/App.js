import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Instructions from "./components/Instructions.jsx";
import dogs from "./items.json";
import Items from "./components/Items";
import ItemCard from "./components/ItemCard";

class App extends Component {
  state = {
    message: "Select an image!",
    topScore: 0,
    curScore: 0,
    dogs: dogs,
    unselectedDogs: dogs
  };

  componentDidMount() {}

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  selectItemCard = breed => {
    const findDog = this.state.unselectedDogs.find(
      item => item.breed === breed
    );

    if (findDog === undefined) {
      // failure to select a new dog
      this.setState({
        message: "Incorrect!",
        topScore:
          this.state.curScore > this.state.topScore
            ? this.state.curScore
            : this.state.topScore,
        curScore: 0,
        dogs: dogs,
        unselectedDogs: dogs
      });
    } else {
      // success to select a new dog
      const newDogs = this.state.unselectedDogs.filter(
        item => item.breed !== breed
      );

      this.setState({
        message: "Correct!",
        curScore: this.state.curScore + 1,
        dogs: dogs,
        unselectedDogs: newDogs
      });
    }

    this.shuffleArray(dogs);
  };

  render() {
    return (
      <div className="App">
        <Header
          message={this.state.message}
          curScore={this.state.curScore}
          topScore={this.state.topScore}
        />
        <Instructions />
        <Items>
          {this.state.dogs.map(dog => (
            <ItemCard
              breed={dog.breed}
              image={dog.image}
              selectItemCard={this.selectItemCard}
              curScore={this.state.curScore}
              key={dog.breed}
            />
          ))}
        </Items>
      </div>
    );
  }
}

export default App;
