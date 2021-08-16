import { ADD_ITEMS, LOAD_ITEMS } from '../actions/actionTypes';

const defaultItemsReducer = {
  items: [],
};

const itemsReducers = (state = defaultItemsReducer, action) => {
  switch (action.type) {
    case ADD_ITEMS:
      return {
        ...state,
        items: action.items,
      };
    case LOAD_ITEMS:
      return {};
    default:
      return state;
  }
};

export default itemsReducers;
