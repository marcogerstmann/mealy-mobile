import * as React from 'react';
import { observer } from 'mobx-react';
import GroceryListCheckItem from '../../components/GroceryList/GroceryListCheckItem/GroceryListCheckItem.component';

import { ScrollView } from '../../components/Themed';
import styles from './GroceryListScreen.styles';
import { useRootStore } from '../../store/provider/RootStoreProvider';

export default observer(() => {
  const store = useRootStore();

  return (
    <ScrollView style={styles.container}>
      {
        store.groceryList.getGroceryList.map(groceryListItem =>
          <GroceryListCheckItem
            key={groceryListItem.id}
            groceryListItemId={groceryListItem.id}
            text={groceryListItem.text}
            isChecked={!!groceryListItem.isChecked}
          />
        )
      }
    </ScrollView>
  );
});
