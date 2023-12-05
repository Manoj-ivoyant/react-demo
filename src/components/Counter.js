import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment() {
    //this.state.count = this.state.count + 1
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("callbackvalue", this.state.count);
    //   }
    // );
    this.setState(prevState=>({
        count: prevState.count+1
    }))
    console.log(this.state.count);
  }
  incremenFive(){
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incremenFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
