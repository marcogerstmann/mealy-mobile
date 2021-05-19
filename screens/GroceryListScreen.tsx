import * as React from 'react';
import { StyleSheet } from 'react-native';
import GroceryListCheckItem from '../components/GroceryList/GroceryListCheckItem';

import { View } from '../components/Themed';
import { fetchGroceryList } from '../services/GroceryListService';

export default function GroceryListScreen() {
  const groceryList = fetchGroceryList();

  return (
    <View style={styles.container}>
      {
        groceryList.map(groceryListItem =>
          <GroceryListCheckItem
            key={groceryListItem.id}
            text={groceryListItem.text}
          />
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
