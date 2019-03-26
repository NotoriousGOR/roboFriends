import React, { Component } from "react";
import { Observable } from "rxjs";
import Axios from "axios";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

export default class componentName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      robots: [],
      searchField: ""
    };
  }

  componentDidMount() {
    var source = Observable.create(observer => {
      Axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(err => {
          observer.error(err);
        });
    });
    source.subscribe({
      next: data =>
        this.setState({
          robots: data
        })
    });
  }

  onSearchChange = event => {
    this.setState({
      searchField: event.target.value
    });
  };
  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}
