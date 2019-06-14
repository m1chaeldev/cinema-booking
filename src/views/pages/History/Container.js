import React, { Component, Fragment } from "react";
// Style
// import styles from "./styles";
// Redux
import { connect } from "react-redux";
// Component
import HistoryComponent from "./Component";
// Action
import { ticketActions } from "../../../redux/actions"

class NotFoundContainer extends Component {
  render() {
    return (
      <Fragment>
        <HistoryComponent {...this.props} />
      </Fragment>
    );
  }
}

const mapActionToProps = {
  deleteTicket: ticketActions.deleteTicket
};

const mapStateToProps = state => {
  return {
    movie: state.movie,
    data: state.history.data
  };
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(NotFoundContainer);