import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import CardPerson from '../../Components/CardPerson';
import getPeople from '../../ApiService/'
import TopCounter from '../../Components/TopCounter';

const HomeScreen = () => {
  const [data,setData] = useState()
  
  
  return (
    <View style={styles.container}>
      <TopCounter/>
      <CardPerson/>
    </View>
  )
 };

export default HomeScreen;

