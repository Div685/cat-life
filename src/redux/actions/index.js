import { ADD_ITEMS, LOAD_ITEMS } from './actionTypes';

export const addItems = (items = []) => ({
  type: ADD_ITEMS,
  items,
});

export const loadItems = () => ({
  type: LOAD_ITEMS,
});
