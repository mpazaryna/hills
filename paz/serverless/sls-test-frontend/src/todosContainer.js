import React, { Component } from "react";
import axios from "axios";
import TodoList from "./todos";
import config from "./config.js";
const resource = config.api.TODOS_PROD;

class TodosContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dat: [],
      loading: true,
      error: null
    };
  }
  componentDidMount() {
    var _this = this;
    axios.get(resource).then(function(response) {
      _this.setState({ dat: response.data });
    });
  }
  render() {
    return <TodoList dats={this.state.dat} />;
  }
}

export default TodosContainer;
