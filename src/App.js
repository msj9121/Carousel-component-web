import React, { Component } from "react";
import "./App.css";
import datas from "./data.json";
import Carousel from "./carousel/Carousel";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas
    };
  }
  render() {
    return (
      <div className="App">
        <Carousel
          datas={this.state.datas}
          width={"700px"}
          height={"700px"}
          translateX={1200}
        />
      </div>
    );
  }
}

export default App;
