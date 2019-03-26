import React, { Component } from "react";

export default class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(err, info) {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1 className="h1 light-red">
          Ooooooops. There has been an error{" "}
          <span role="img" aria-label="fire emoji, sad emoji">
            💥😞
          </span>
        </h1>
      );
    } else {
      return this.props.children;
    }
  }
}
