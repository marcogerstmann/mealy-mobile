import * as React from 'react';
import { useState } from 'react';
import GroceryListCheckItem from '../../components/GroceryList/GroceryListCheckItem/GroceryListCheckItem.component';

import { fetchGroceryList } from '../../services/GroceryListService';
import { ScrollView } from '../../components/Themed';
import styles from './GroceryListScreen.styles';

export default function GroceryListScreen() {
  const [groceryList] = useState(fetchGroceryList());

  return (
    <ScrollView style={styles.container}>
      {
        groceryList.map(groceryListItem =>
          <GroceryListCheckItem
            key={groceryListItem.id}
            text={groceryListItem.text}
          />
        )
      }
    </ScrollView>
  );
}
