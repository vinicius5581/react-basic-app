import React, { Component } from "react";

class ChildComponent extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div className="childComponent">
        <div>Name: {name}</div>
        <div>Age: {age}</div>
      </div>
    );
  }
}

export default ChildComponent;
