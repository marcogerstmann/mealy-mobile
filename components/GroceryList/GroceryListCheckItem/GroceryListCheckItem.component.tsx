import * as React from 'react';
import { observer } from 'mobx-react-lite';
import Checkbox from 'expo-checkbox';
import i18n from 'i18n-js';

import { Text, View } from '../../Themed';
import styles from './GroceryListCheckItem.style';
import { useStore } from '../../../store/providers/RootStoreProvider';
import { Swipeable } from 'react-native-gesture-handler';

interface GroceryListCheckItemProps {
  groceryListItemId: number;
  text: string;
  isChecked: boolean;
}

export default observer((props: GroceryListCheckItemProps) => {
  const { groceryListStore } = useStore();

  const onRenderRightActions = () => {
    return (
      <View style={styles.swipeRightView}>
        <Text style={styles.swipeRightText}>
          {i18n.t('common.delete')}
        </Text>
      </View>
    )
  };

  const onSwipeFromRight = (id: number) =>
    groceryListStore.delete(id);

  const checkboxStateChange = (checkState: boolean) =>
    groceryListStore.setCheckState(props.groceryListItemId, checkState);

  return (
    <Swipeable
      renderRightActions={onRenderRightActions}
      onSwipeableRightOpen={() => onSwipeFromRight(props.groceryListItemId)}>
      <View style={styles.listItem}>
        <Checkbox
          onValueChange={checkboxStateChange}
          value={props.isChecked}
          style={styles.listItemCheckbox}
        />
        <Text style={styles.listItemText}>{props.text}</Text>
      </View>
    </Swipeable>
  );
});
