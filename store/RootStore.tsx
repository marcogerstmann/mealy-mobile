import { types } from 'mobx-state-tree';
import GroceryListStore from './GroceryListStore';

export const RootStore = types.model({
  groceryListStore: GroceryListStore
});
