import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
import AnotherChildComponent from "./AnotherChildComponent";
import AddPerson from "./AddPerson";

class App extends Component {
  state = {
    people: [
      { id: 1, name: "Santana", age: 18 },
      { id: 2, name: "Nanda", age: 20 }
    ]
  };

  addPerson = person => {
    person.id = Math.random() * 10;
    const peopleUpdated = [...this.state.people, person];
    this.setState({
      people: peopleUpdated
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React app</h1>
        <ChildComponent name={"Vini"} age={"37"} />
        <AnotherChildComponent people={this.state.people} />
        <AddPerson addPerson={this.addPerson} />
      </div>
    );
  }
}

export default App;
