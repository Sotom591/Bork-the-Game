import { FETCHED_PLAYER } from '../actions';

const playerDataReducer = (state = [], action) => {
  switch (action.type) {
    case FETCHED_PLAYER:
      return action.player
    default:
      return state;
  }
}


export default playerDataReducer
