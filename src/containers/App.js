import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';

import Mainpage from '../components/Mainpage';

import './App.css';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots(dispatch))
  }
}

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    return (
      <Mainpage {...this.props} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
