import React, { Component } from "react";

// Props vs State
// Props includes the data that we give to the Component
// State includes data that is local or private to that Component, so that
// other Component does not have access to it.
// State is Read-only, use setState() to update the state instead

class Counter extends Component {
  state = {
    // value: this.props.counter.value,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
    id: this.props.counter.id,
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold",
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    // Ajax call to get the new data from the server
  }

  componentWillUnmount() {
    console.log("Counter - unmount");
    // Cleanup work, otherwise memory leaks
  }

  render() {
    console.log("Counter - rendered");
    // console.log(this.props);

    // JSX expression
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}

        {this.props.children}

        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.state.id)}
          className="btn btn-danger tbn-sm m2"
        >
          Delete
        </button>

        {/* {this.renderTags()} */}
      </div>
    );
  }

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  handleIncrement = () => {
    console.log("Item clicked");
    this.setState({ value: this.state.value + 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There is no tag</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // const { value } = this.state;
    // return value === 0 ? "Zero" : value;
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
