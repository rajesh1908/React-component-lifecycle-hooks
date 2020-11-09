import React, { Component } from "react";

class Child extends Component {
  constructor() {
    super();
    console.log("Childconstructor");
  }

  // UNSAFE_componentWillMount() {
  //   console.log("Child-componentwillmount");
  // }

  componentDidMount() {
    console.log("Child-componentdidmount");
  }

  // UNSAFE_componentWillReceiveProps() {
  //   console.log("Child-componentWillrecieveprops");
  // }

  //instead of the above lifecycle event the below lifecycle event is used.
  getSnapshotBeforeUpdate() {}

  shouldComponentUpdate(nextProps, nextState) {
    console.log("child - ShouldComponentUpdate");
    return true;
  }

  // UNSAFE_componentWillUpdate() {
  //   console.log("Child - ComponentWillUpdate");
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log("child prevprops - " + prevProps);
    console.log("child prevState - " + prevState);
    console.log("child - ComponentdidUpdate");
  }

  componentWillUnmount() {
    console.log("Child - ComponentWillUnmount");
  }

  render() {
    console.log("Child-render");
    return <div className="App">Childname: {this.props.name}</div>;
  }
}

export default Child;
