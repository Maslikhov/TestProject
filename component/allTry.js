import React from 'react';

import { useState, useEffect } from 'react';

import { StyleSheet, Text ,View} from 'react-native';

import {Calendar} from 'react-native-calendars';


function AllTry(){
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);


  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.timeText}>
        {date.toLocaleTimeString()}
      </Text>
      </View>
      <View>
      <Calendar
        style={{
          borderWidth: 1,
          borderRadius:10,
          borderColor: 'gray',
          height: 350
        }}
        theme={{
          monthTextColor: 'black',
          indicatorColor: 'black',
          textDayFontWeight: '500',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
        }}
      />
      </View>
    </View>
  );
}
const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      paddingTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    timeText: {
      fontSize: 50,
      color: 'black',
      paddingBottom:100
    },

  });
export default AllTry;


