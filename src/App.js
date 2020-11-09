import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  state = {
    name: "peter"
  };

  constructor() {
    super();
    this.state = {
      name: "John"
    };
    console.log("Constructor");
  }

  UNSAFE_componentWillMount() {
    if (window.innerWidth < 500) {
      this.setState({
        innerWidth: window.innerWidth
      });
    }
    console.log("componentWillMount");
  }
  render() {
    console.log("render");
    return (
      <div className="App">
        {this.state.name}
        {this.state.innerWidth}
      </div>
    );
  }
}

export default App;
