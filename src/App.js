import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
import AnotherChildComponent from "./AnotherChildComponent";

class App extends Component {
  state = {
    people: [
      { id: 1, name: "Santana", age: 18 },
      { id: 2, name: "Nanda", age: 20 }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>React app</h1>
        <ChildComponent name={"Vini"} age={"37"} />
        <AnotherChildComponent people={this.state.people} />
      </div>
    );
  }
}

export default App;
