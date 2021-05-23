import * as React from 'react';

import { Text, View } from '../../components/Themed';
import styles from './DishesScreen.styles';

export default function DishesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerichte</Text>
    </View>
  );
}
