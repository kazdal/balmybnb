import { RECEIVE_COORDINATES } from '../actions/coordinate_actions';

const coordinateReducer = (state = [34.026265, -118.497149], action) => {
  switch (action.type) {
    case RECEIVE_COORDINATES:
      return action.coordinates;
    default:
      return state;
  }
};

export default coordinateReducer;
