import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';;
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  image: {
    height: 100,
    width: width / 2 - spacing.large * 2,
    resizeMode: 'cover',
    margin: spacing.large,
    justifyContent: 'flex-end',
    borderRadius: radius.soft,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#171474',
  },
  title: {

    fontWeight: 'bold',
    color: 'white',
    backgroundColor:'#171474'
  },
  button: {
    right: spacing.large,
    top: spacing.large,
    height: spacing.giant,
    width: spacing.giant,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: radius.smooth,
    position: 'absolute',
  },
  image_color_container: {
    backgroundColor: '#00000022',
    position: 'absolute',
    alignItems:'center',
    left: spacing.zero,
    right: spacing.zero,
    bottom: spacing.zero,
    top: spacing.zero,
  },
  linear: {
    bottom: 20,

       alignItems:'center',


  },
});
export default styles;