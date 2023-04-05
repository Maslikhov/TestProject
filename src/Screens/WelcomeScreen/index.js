import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Images } from '../../Assets/Images';
import { RouteNames } from '../../Navigation/configs';
import localization from '../../Assets/localization.json';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const onPress = () => { 
    navigation.navigate(RouteNames.HomeScreen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image source={Images.logo} style={styles.logo}></Image>
        <Text style={styles.welcomeText}>
          {localization.welcomeTitle}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={onPress}
      >
        <Text style={styles.loginText}>
          {localization.actions.next}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
