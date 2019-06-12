import React, { Component, Fragment } from "react";
// Style
// import styles from "./styles";
// Redux
import { connect } from "react-redux";
// Component
import NotFoundComponent from "./Component";
// Action
// import { examActions } from "../../../redux/actions"

class NotFoundContainer extends Component {
  render() {
    return (
      <Fragment>
        <NotFoundComponent />
      </Fragment>
    );
  }
}

const mapActionToProps = {
  // getTagsAction,
};

const mapStateToProps = state => {
  return {
    // tagData: state.tag,
  };
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(NotFoundContainer);