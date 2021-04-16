import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 2 },
      { id: 4, value: 1 },
    ],
  };

  constructor() {
    super();
    console.log("App - constructor");
    // The corrct place to initialize the State to the Props
    // this.state = this.props;
  }

  // Called after the component is renedered into the DOM
  // Perfect place to make the AJAX call to get the data from the server
  componentDidMount() {
    console.log("App - mounted");
    // Ajax call
    // this.setState({});
  }

  render() {
    console.log("App - rendered");

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }

  handleIncrement = (counter) => {
    console.log(counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });

    this.setState(counters);
  };

  handleDelete = (counterId) => {
    console.log("Event handler called, Id is: " + counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
}

export default App;
