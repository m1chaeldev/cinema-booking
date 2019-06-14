import { combineReducers } from 'redux';
import movie from "./movies";
import history from "./history";

const rootReducers = combineReducers({
    movie,
    history
});

export default rootReducers;
