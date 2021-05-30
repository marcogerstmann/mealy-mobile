import { types } from 'mobx-state-tree';

export const GroceryListItem = types.model('GroceryListItem', {
  id: types.number,
  text: types.string,
  isChecked: types.optional(types.boolean, false)
});
