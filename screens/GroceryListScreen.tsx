import * as React from 'react';
import { StyleSheet } from 'react-native';
import GroceryListCheckItem from '../components/GroceryList/GroceryListCheckItem';

import { ScrollView } from '../components/Themed';
import { fetchGroceryList } from '../services/GroceryListService';

export default function GroceryListScreen() {
  const groceryList = fetchGroceryList();

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
