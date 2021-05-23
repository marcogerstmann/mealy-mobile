import * as React from 'react';
import Checkbox from 'expo-checkbox';

import { Text, View } from '../../Themed';
import styles from './GroceryListCheckItem.style';

interface GroceryListCheckItemProps {
  text: string;
}

export default function GroceryListCheckItem(props: GroceryListCheckItemProps) {
  return (
    <View style={styles.section}>
      <Checkbox
        style={styles.checkbox}
      />
      <Text style={styles.paragraph}>{props.text}</Text>
    </View>
  );
}
