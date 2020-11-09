import React, { Component } from "react";
import "./styles.css";
import Child from "./child";

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

  UNSAFE_componentWillReceiveProps() {
    console.log("componentWillrecieveprops");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("ShouldComponentUpdate");
    return true;
  }

  UNSAFE_componentWillUpdate() {
    console.log("ComponentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("ComponentdidUpdate");
  }

  changeState() {
    this.setState({
      name: "Jill"
    });
  }

  unmount() {
    this.setState({
      name: "Robert"
    });
  }

  render() {
    console.log("render");
    if (this.state.name === "Robert") {
      return <div />;
    }
    return (
      <div className="App">
        {this.state.name} |{this.state.innerWidth} |
        <Child name={this.state.name} /> |
        <button onClick={this.changeState.bind(this)}> Change State </button> |
        <button onClick={this.unmount.bind(this)}> Unmount Child </button>
      </div>
    );
  }
}

export default App;
