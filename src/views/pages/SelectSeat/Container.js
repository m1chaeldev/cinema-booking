import React, { Component, Fragment } from "react";
// Style
// import styles from "./styles";
// Redux
import { connect } from "react-redux";
// Component
import SelectSeatComponent from "./Component";
// Action
import { ticketActions } from "../../../redux/actions"

class SelectSeatContainer extends Component {
  render() {
    return (
      <Fragment>
        <SelectSeatComponent  {...this.props} />
      </Fragment>
    );
  }
}

const mapActionToProps = {
  postTicket: ticketActions.postTicket
};

const mapStateToProps = state => {
  return {
    ticket: state.history.data
  };
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(SelectSeatContainer);