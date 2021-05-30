import * as React from 'react';
import i18n from 'i18n-js';

import { Text, View } from '../../components/Themed';
import styles from './DishesScreen.styles';

export default function DishesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t('dishes')}</Text>
    </View>
  );
}
