import {StyleSheet} from 'react-native';
import * as defaultStyle from '../style';

const STYLESHEET_ID = 'stylesheet.calendar.yearList';

export default function getStyle(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: appStyle.calendarBackground
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    arrow: {
      paddingHorizontal: 20,
      ...appStyle.arrowStyle
    },
    headerTextWrapper: {
      alignItems: 'center'
    },
    headerText: {
      fontSize: appStyle.textMonthFontSize,
      fontFamily: appStyle.textMonthFontFamily,
      fontWeight: appStyle.textMonthFontWeight,
      color: appStyle.monthTextColor
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
