
  
import {StyleSheet,Dimensions} from 'react-native';

import colors from '../../styles/colors';
import spacing from '../../styles/spacing';
import radius from '../../styles/radius';

const baseStyles = StyleSheet.create({
  button_container: {
    padding: spacing.medium,
    margin: spacing.medium,
    borderRadius: radius.smooth,
    borderWidth: 0.8,
    borderColor: '#EBEBEB',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
  },
  title: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 14,
  },
});
export default {
  default: StyleSheet.create({
    list_tab: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    btn_tab: {
      width: Dimensions.get('window').width / 3.5,
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: colors.tomato,
      borderRadius: 10,
      padding: 7,
      margin: 15,
      justifyContent: 'center',
      backgroundColor: '#e0e0e0',
    },
    text_tab: {
      color: colors.tomato,
      fontSize: 14,
    },
    btn_active: {
      backgroundColor: '#E68380',
    },
  }),

  secondary: StyleSheet.create({
    button_container: {
      ...baseStyles.button_container,
      width: 100,
      height: 100,
      flexDirection: 'column',
    },
    title: {
      ...baseStyles.title,
      marginBottom: spacing.medium,
    },
    icon: {
      color: colors.text,
    },
  }),
};