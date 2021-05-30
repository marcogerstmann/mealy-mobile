import * as React from 'react';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import GroceryListCheckItem from '../../components/GroceryList/GroceryListCheckItem/GroceryListCheckItem.component';

import { ScrollView } from '../../components/Themed';
import styles from './GroceryListScreen.styles';
import { useStore } from '../../store/providers/RootStoreProvider';

export default observer(() => {
  const { groceryListStore } = useStore();

  useEffect(() => {
    groceryListStore.refreshGroceryList();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {
        groceryListStore.groceryList.map(groceryListItem =>
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
