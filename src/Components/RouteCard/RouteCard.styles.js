import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#454455',
    borderRadius: 10,
   
    shadowColor: 'black',
    shadowRadius: 10,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },
  station: {
    color:'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  direction: {
    color: colors.tomato,
    fontStyle: 'italic',
    opacity: 0.6,
    fontSize: 15,
    right:5
  },
  title: {
    color:'white',
    fontSize: 12,
   
  },
  footer: {color:'white'},
  dislikeContainer: {},
  dislikeCountContainer: {},
  dislikeCountText: {},
  dislikeText: {},
});