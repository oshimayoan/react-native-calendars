import React, {useMemo} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import months from 'months';
import PropTypes from 'prop-types';

import styleConstructor from './style';

function MonthList(props) {
  let styles = styleConstructor(props.theme);
  let monthNames = months.abbr;
  let selectedMonth = props.selectedDate.getMonth();

  let monthSets = useMemo(() => {
    let sets = [];
    for (let i = 0; i < 3; i++) {
      sets.push([]);
      for (let j = 0; j < 4; j++) {
        let id = 4 * i + j;
        sets[i][j] = {
          id,
          name: monthNames[id]
        };
      }
    }
    return sets;
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        {
          monthSets[0].map((month) => (
            <TouchableOpacity
              key={month.name}
              onPress={() => props.onPressMonth(month)}
              style={[styles.item, month.id === selectedMonth && styles.selected]}
            >
              <Text style={styles.text}>{month.name}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
      <View style={styles.row}>
        {
          monthSets[1].map((month) => (
            <TouchableOpacity
              key={month.name}
              onPress={() => props.onPressMonth(month)}
              style={[styles.item, month.id === selectedMonth && styles.selected]}
            >
              <Text style={styles.text}>{month.name}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
      <View style={styles.row}>
        {
          monthSets[2].map((month) => (
            <TouchableOpacity
              key={month.name}
              onPress={() => props.onPressMonth(month)}
              style={[styles.item, month.id === selectedMonth && styles.selected]}
            >
              <Text style={styles.text}>{month.name}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    </View>
  );
}

MonthList.propTypes = {
  theme: PropTypes.object,
  // Current selected date, month, and year 
  selectedDate: PropTypes.object,
  // Handler which gets executed on month press
  onPressMonth: PropTypes.func
};

export default MonthList;
