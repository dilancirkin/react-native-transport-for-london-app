import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  list_tab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn_tab: {
    width: Dimensions.get('window').width / 3.5,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#445963',
    borderRadius: 10,
    padding: 7,
    margin: 15,
    justifyContent: 'center',
    backgroundColor: '#e0e0e0',
  },
  text_tab: {
    color: '#445963',
    fontSize: 12,
  },
  btn_active: {
    backgroundColor: '#E68380',
  },
});