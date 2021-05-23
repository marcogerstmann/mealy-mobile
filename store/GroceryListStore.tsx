import { makeAutoObservable} from 'mobx'
import { GroceryListItem } from '../models/GroceryListItem';
import { RootStore } from './RootStore';

export class GroceryListStore {

  protected root: RootStore;

  private groceryList: GroceryListItem[] = [];

  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
  }

  init(): void {
    this.groceryList = [
      {
        id: 1,
        text: 'Tokolade'
      },
      {
        id: 2,
        text: 'Orangen'
      },
      {
        id: 3,
        text: 'Kartoffeln'
      },
      {
        id: 4,
        text: 'Kaffee'
      },
      {
        id: 5,
        text: 'Bier'
      },
      {
        id: 6,
        text: 'Tiziwasser'
      },
      {
        id: 7,
        text: 'Scrollen'
      },
      {
        id: 8,
        text: 'Scrollen'
      },
      {
        id: 9,
        text: 'Scrollen'
      },
      {
        id: 10,
        text: 'Scrollen'
      },
      {
        id: 11,
        text: 'Scrollen'
      },
      {
        id: 12,
        text: 'Scrollen'
      },
      {
        id: 13,
        text: 'Scrollen'
      },
      {
        id: 14,
        text: 'Scrollen'
      },
      {
        id: 15,
        text: 'Scrollen'
      },
      {
        id: 16,
        text: 'Scrollen'
      },
      {
        id: 17,
        text: 'Scrollen'
      },
      {
        id: 18,
        text: 'Scrollen'
      }
    ];
  }

  get getGroceryList(): GroceryListItem[] {
    return this.groceryList;
  }

  addGroceryListItem(item: GroceryListItem): void {
    this.groceryList.push(item);
  }
  
  setCheckState(id: number, checkState: boolean): void {
    const item = this.groceryList.find(gli => gli.id === id);
    if (item) {
      item.isChecked = checkState;
    }
  }
}
