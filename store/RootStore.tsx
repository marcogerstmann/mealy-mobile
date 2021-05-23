import { GroceryListStore } from './GroceryListStore';

export class RootStore {
  
  groceryList: GroceryListStore;

  constructor() {
    this.groceryList = new GroceryListStore(this);

    this.groceryList.init();
  }
}
