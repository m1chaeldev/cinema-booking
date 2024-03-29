import React, { Component, Fragment } from "react";
// Style
// import styles from "./styles";
// Redux
import { connect } from "react-redux";
// Component
import HomePage from "./Component";
// Action
// import { examActions } from "../../../redux/actions"

class HomePageContainer extends Component {
  render() {
    return (
      <Fragment>
        <HomePage {...this.props} />
      </Fragment>
    );
  }
}

const mapActionToProps = {
};

const mapStateToProps = state => {
  return {
    movies: state.movie,
  };
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(HomePageContainer);