import * as React from 'react';
import { observer } from 'mobx-react-lite';
import Checkbox from 'expo-checkbox';

import { Text, View } from '../../Themed';
import styles from './GroceryListCheckItem.style';
import { useStore } from '../../../store/providers/RootStoreProvider';

interface GroceryListCheckItemProps {
  groceryListItemId: number;
  text: string;
  isChecked: boolean;
}

export default observer((props: GroceryListCheckItemProps) => {
  const { groceryListStore } = useStore();

  const checkboxStateChange = (checkState: boolean) =>
    groceryListStore.setCheckState(props.groceryListItemId, checkState);

  return (
    <View style={styles.section}>
      <Checkbox
        onValueChange={checkboxStateChange}
        value={props.isChecked}
        style={styles.checkbox}
      />
      <Text style={styles.paragraph}>{props.text}</Text>
    </View>
  );
});
