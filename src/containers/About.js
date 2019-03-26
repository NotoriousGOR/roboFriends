import React, { Component } from "react";
import Tile from "../components/Tile";
import rxJS from "../assets/rxjs.svg";
import reactLogo from "../assets/React.svg";
import reactRouter from "../assets/React-Router.svg";
import axios from "../assets/axios-icon.svg";
import tachyons from "../assets/tachyons.svg";

export default class componentName extends Component {
  render() {
    return (
      <div className="tc">
        <article>
          <h1 className="f2 fw4 pa3 mv0 white">Technology Used</h1>
          <div className="cf pa2 ba b--light-gray br4 ma3">
            <Tile
              link="https://github.com/axios/axios"
              title="Axios"
              image={axios}
              alt="axios"
              description="Axios came in handy to perform HTTP requests to the infamous JSON placeholder API"
            />
            <Tile
              link="https://www.learnrxjs.io/"
              title="RxJS"
              image={rxJS}
              alt="rxjs"
              description="RxJS was used for state management via observables and subscriptions"
            />
            <Tile
              link="https://reacttraining.com/react-router/"
              title="React Router"
              image={reactRouter}
              alt="react-router"
              description="React-router was used to swap between components effortlessly"
            />
            <Tile
              link="https://reactjs.org/"
              title="React"
              image={reactLogo}
              alt="react"
              description="React is the framework of choice by many companies and devs like myself"
            />
            <Tile
              link="https://tachyons.io/"
              title="Tachyons"
              image={tachyons}
              alt="tachyons"
              description="CSS framework for effortless Flex-box implementation"
            />
          </div>
        </article>
      </div>
    );
  }
}
