import merge from 'lodash/merge';
import { UPDATE_FILTER, RESET_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  bounds: {},
  minPrice: 1,
  maxPrice: 1250
});

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_FILTER:
      const newFilter = {
        [action.filter]: action.value
      };
      return merge({}, state, newFilter);
    case RESET_FILTER:
    debugger
      return merge({}, state, {minPrice: defaultFilters.minPrice}, {maxPrice: defaultFilters.maxPrice});
    default:
    return state;
  }
};

export default filtersReducer;
