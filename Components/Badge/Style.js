import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../Assets/Styles/scalling';
import {getFontFamily} from '../../Assets/Fonts/helper';

const style = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    height: verticalScale(22),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    // fontFamily: 'Inter',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(10),
    // fontWeight: '600',
    lineHeight: scaleFontSize(12),
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default style;
