import { useState } from "react";
import "./App.css";
import React from "react";
import { Switch } from "antd";

class App extends React.Component {
  state = {
    person: {
      fullName: "",
      bio: "",
      profession: "",
      imgSrc: "",
    },
    showState: false,
  };

  funcShowState = () => {
    this.setState((prevState) => ({
      showState: !prevState.showState,
    }));
  };

  renderPerson = () => {
    this.setState({
      person: {
        fullName: "Motolani Akindele",
        bio: "Photography enthusiats, tech lover and product manager",
        profession: "Product manager",
        imgSrc: "ben-kolde-bs2Ba7t69mM-unsplash.jpg",
      },
    });
  };

  // renderNothing = () => {
  //   this.setState({
  //     person: {
  //       fullName: '',
  //       bio: '',
  //       profession: '',
  //       imgSrc: '',
  //     },
  //   });
  // };

  render() {
    return (
      <div className="App">
        {/* <div>{this.state.showState ? { rerender } : undefined}</div> */}
        <h1>{this.state.person.fullName}</h1>
        <h2>{this.state.person.bio}</h2>
        <h3>{this.state.person.profession}</h3>
        <img src={this.state.person.imgSrc} alt="" />
        {/* <Switch /> */}
        <button onClick={this.funcShowState ? this.renderPerson : ""}>
          Click me
        </button>
      </div>
    );
  }
}

export default App;
