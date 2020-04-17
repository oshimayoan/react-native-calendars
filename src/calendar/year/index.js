import React, {useMemo, useState} from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import XDate from 'xdate';

import styleConstructor from './style';

function YearList(props) {
  let styles = styleConstructor(props.theme);
  let selectedYear = XDate(props.selectedDate).getFullYear();

  let [pivotYear, setPivotYear] = useState(selectedYear);

  let yearsData = useMemo(() => {
    let years = [];
    for (let i = pivotYear - 6; i < pivotYear + 6; i++) {
      years.push(i);
    }

    let list = [];
    for (let i = 0; i < 3; i++) {
      list.push([]);
      for (let j = 0; j < 4; j++) {
        list[i][j] = years[4 * i + j];
      }
    }
    return {
      first: years[0],
      last: years[years.length - 1],
      list
    };
  }, [pivotYear, selectedYear]);

  let pressLeft = () => setPivotYear(pivotYear - 12);
  let pressRight = () => setPivotYear(pivotYear + 12);

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={pressLeft}
          style={styles.arrow}
        >
          {
            props.renderArrow
              ? props.renderArrow('left')
              : <Image source={require('../img/previous.png')}/>
          }
        </TouchableOpacity>
        <View style={styles.headerTextWrapper}>
          <Text style={styles.headerText}>
            {`${yearsData.first} - ${yearsData.last}`}
          </Text>
        </View>
        <TouchableOpacity
          onPress={pressRight}
          style={styles.arrow}
        >
          {
            props.renderArrow
              ? props.renderArrow('right')
              : <Image source={require('../img/next.png')}/>
          }
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        {
          yearsData.list[0].map((year) => (
            <TouchableOpacity
              key={year.toString()}
              onPress={() => props.onPressYear(year)}
              style={[styles.item, year === selectedYear && styles.selected]}
            >
              <Text style={styles.text}>{year}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
      <View style={styles.row}>
        {
          yearsData.list[1].map((year) => (
            <TouchableOpacity
              key={year.toString()}
              onPress={() => props.onPressYear(year)}
              style={[styles.item, year === selectedYear && styles.selected]}
            >
              <Text style={styles.text}>{year}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
      <View style={styles.row}>
        {
          yearsData.list[2].map((year) => (
            <TouchableOpacity
              key={year.toString()}
              onPress={() => props.onPressYear(year)}
              style={[styles.item, year === selectedYear && styles.selected]}
            >
              <Text style={styles.text}>{year}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    </View>
  );
}

YearList.propTypes = {
  theme: PropTypes.object,
  // Current selected date, month, and year 
  selectedDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  // Handler which gets executed on month press
  onPressYear: PropTypes.func,
  // Render a custom arrow component based on the direction ('left' | 'right)
  renderArrow: PropTypes.func
};

export default YearList;
