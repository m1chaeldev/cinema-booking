import React, { Component, Fragment } from "react";
// Style
// import styles from "./styles";
// Redux
import { connect } from "react-redux";
// Component
import SelectSeatComponent from "./Component";
// Action
// import { examActions } from "../../../redux/actions"

class SelectSeatContainer extends Component {
  render() {
    return (
      <Fragment>
        <SelectSeatComponent  />
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
)(SelectSeatContainer);