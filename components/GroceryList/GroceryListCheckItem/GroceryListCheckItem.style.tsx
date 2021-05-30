import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  swipeRightView: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center'
  },
  swipeRightText: {
    textAlign: 'right',
    color: 'white',
    paddingHorizontal: 10,
    fontWeight: '600'
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  },
  listItemText: {
    fontSize: 19,
  },
  listItemCheckbox: {
    margin: 8,
  }
});
