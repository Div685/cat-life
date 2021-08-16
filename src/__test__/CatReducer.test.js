import { ADD_ITEMS } from '../redux/actions/actionTypes';
import ItemsReducer from '../redux/reducers/itemsReducers';

const exampleItems = [{
  name: 'Abyssinian',
  url: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
}];

const initialState = {
  items: [],
};

const itemAction = {
  type: ADD_ITEMS,
  items: exampleItems,
};

describe('ItemsReducer', () => {
  it('it shoud check initialState', () => {
    expect(ItemsReducer(undefined, {})).toEqual(initialState);
  });

  it('should check ADD_ITEMS Action', () => {
    const result = ItemsReducer(initialState, itemAction);
    expect(result.items).toEqual(exampleItems);
  });
});
