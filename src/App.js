import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Instructions from "./components/Instructions.jsx";
import items from "./items.json";
import ItemCard from "./components/ItemCard";
import Items from "./components/Items";

class App extends Component {
  state = {
    message: "Select an image!",
    topScore: 0,
    curScore: 0,
    dogs: items,
    unselectedDogs: items
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
        dogs: items,
        unselectedDogs: items
      });
    } else {
      // success to select a new dog
      const newDogs = this.state.unselectedDogs.filter(
        item => item.breed !== breed
      );

      this.setState({
        message: "Correct!",
        curScore: this.state.curScore + 1,
        dogs: items,
        unselectedDogs: newDogs
      });
    }

    this.shuffleArray(items);
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Instructions />
        <Items>
          {this.state.dogs.map(dog => (
            <ItemCard
              breed={dog.breed}
              image={dog.image}
              selectDog={this.selectDog}
              curScore={this.state.curScore}
            />
          ))}
        </Items>
      </div>
    );
  }
}

export default App;
