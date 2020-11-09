import React, { Component } from "react";

class Child extends Component {
  constructor() {
    super();
    console.log("Childconstructor");
  }

  UNSAFE_componentWillMount() {
    console.log("Child-componentwillmount");
  }

  componentDidMount() {
    console.log("Child-componentdidmount");
  }

  UNSAFE_componentWillReceiveProps() {
    console.log("Child-componentWillrecieveprops");
  }

  render() {
    console.log("Child-render");
    return <div className="App">Childname: {this.props.name}</div>;
  }
}

export default Child;
