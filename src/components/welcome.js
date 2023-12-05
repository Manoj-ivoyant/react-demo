import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <h1>
        Class Component {this.props.name} cast: {this.props.hero}
      </h1>
    );
  }
}

export default Welcome;
