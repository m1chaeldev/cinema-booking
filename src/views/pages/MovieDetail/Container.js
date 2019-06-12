import React, { Component, Fragment } from "react";
// Style
// import styles from "./styles";
// Redux
import { connect } from "react-redux";
// Component
import MovieDetailComponent from "./Component";
// Action
// import { examActions } from "../../../redux/actions"

class MovieDetailContainer extends Component {
  render() {
    return (
      <Fragment>
        <MovieDetailComponent {...this.props} />
      </Fragment>
    );
  }
}

const mapActionToProps = {
  // getTagsAction,
};

const mapStateToProps = state => {
  return {
    data: state.movie.data,
  };
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(MovieDetailContainer);