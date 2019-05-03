import React, { Component } from "react";

class test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  //   componentWillMount() {
  //     console.log("Component Will Mount");
  //   }
  //   componentDidUpdate() {
  //     console.log("Component componentDidUpdate");
  //   }

  //   componentWillReceiveProps(nextProps, nextState) {
  //     console.log("Component componentWillReceiveProps");
  //   }

  render() {
    const { title, body } = this.state;
    return (
      <div className="">
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default test;
