import { types } from 'mobx-state-tree';
import { GroceryListItem } from './models/GroceryListItem';

const mockGroceryList: any = [
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
    text: 'Brokkoli'
  },
  {
    id: 8,
    text: 'Eier'
  },
  {
    id: 9,
    text: 'Baguette'
  },
  {
    id: 10,
    text: 'Wasser'
  },
  {
    id: 11,
    text: 'Käse'
  },
  {
    id: 12,
    text: 'Grüner Tee'
  },
  {
    id: 13,
    text: 'Fencheltee'
  },
  {
    id: 14,
    text: 'Tomatenzeug'
  },
  {
    id: 15,
    text: 'Avocado'
  },
  {
    id: 16,
    text: 'Butter'
  },
  {
    id: 17,
    text: 'Kichererbsen'
  },
  {
    id: 18,
    text: 'Toilettenpapier'
  }
];

const GroceryListStore = types
  .model({
    groceryList: types.optional(types.array(GroceryListItem), [])
  })
  .actions(self => ({

    refreshGroceryList() {
      self.groceryList = mockGroceryList;
    },

    setCheckState(id: number, checkState: boolean) {
      const item = self.groceryList.find(gli => gli.id === id);
      if (item) {
        item.isChecked = checkState;
      }
    },

    delete(id: number) {
      self.groceryList.splice(self.groceryList.findIndex(gli => gli.id === id), 1);
    }

  }));

export default GroceryListStore;
