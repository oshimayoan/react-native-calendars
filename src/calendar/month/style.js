import {StyleSheet} from 'react-native';
import * as defaultStyle from '../style';

const STYLESHEET_ID = 'stylesheet.calendar.monthList';

export default function getStyle(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: appStyle.calendarBackground
    },
    row: {
      flexDirection: 'row'
    },
    item: {
      paddingVertical: 30,
      flex: 1,
      alignItems: 'center'
    },
    text: {
      fontSize: appStyle.textDayFontSize,
      fontFamily: appStyle.textDayFontFamily,
      fontWeight: appStyle.textDayFontWeight,
      color: appStyle.dayTextColor
    },
    selected: {
      backgroundColor: appStyle.selectedDayBackgroundColor 
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
