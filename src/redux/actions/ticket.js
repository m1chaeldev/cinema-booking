export function postTicket(form) {
  return dispatch => {
    dispatch({
      type: "POST_TICKET",
      payload: form
    });
  };
}

export function deleteTicket(index) {
  return dispatch => {
    dispatch({
      type: "DELETE_TICKET",
      payload: index
    });
  };
}
