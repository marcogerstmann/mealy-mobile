import * as React from 'react';
import { observer } from 'mobx-react';
import Checkbox from 'expo-checkbox';

import { Text, View } from '../../Themed';
import { useRootStore } from '../../../store/provider/RootStoreProvider';
import styles from './GroceryListCheckItem.style';

interface GroceryListCheckItemProps {
  groceryListItemId: number;
  text: string;
  isChecked: boolean;
}

export default observer((props: GroceryListCheckItemProps) => {

  const store = useRootStore();

  const checkboxStateChange = (checkState: boolean) =>
    store.groceryList.setCheckState(props.groceryListItemId, checkState);

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
