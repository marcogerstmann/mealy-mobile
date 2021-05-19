import * as React from 'react';
import { StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';

import { Text, View } from '../Themed';

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

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paragraph: {
    fontSize: 19,
  },
  checkbox: {
    margin: 8,
  },
});
