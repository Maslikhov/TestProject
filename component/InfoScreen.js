
import React, {useState,useEffect } from 'react';
import {View ,
Image,
Text,
TextInput,
SafeAreaView
} 
from 'react-native';
import { Button, Menu, Divider, Provider } from 'react-native-paper';

import {launchImageLibrary} from 'react-native-image-picker';

import AsyncStorage from '@react-native-async-storage/async-storage';

import AllTry from './allTry';

const InfoScreen = () => {
  const [visible, setVisible] = useState(false);
  const [photos, setPhotos]= useState();
  const [message, setMessage] = useState("");
  
  const handleChosePhoto = () => {
    const options = {
      noData: false,
    };

    launchImageLibrary(options,response => {
      const [result] =  response.assets.map(response=>response.uri);
      
      setPhotos(result);
    });
  };
  const setUser = async () => {
    try {
      const jsonValue = JSON.stringify(photos)
      await AsyncStorage.setItem('plus', jsonValue)
    }
    catch (error) {
      console.log(error);
    };
  };
  
  const getUser = async () => {
    try {
      const asyncGet = await AsyncStorage.getItem('plus')
      const userData = JSON.parse (asyncGet)
      console.log('userData' + userData)

      return(setPhotos(userData))      
     }
      catch (error) {
        console.log(error);  
      };
    };

  useEffect(() => 
  {
    getUser()
  }
  , []);
  
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View
        style={{
          paddingTop: 50,
        }}>
        <Image
        {...setUser()}
          source={{ uri: photos }}
          style={{ width: 180, height: 180,justifyContent:'center',marginLeft:100,marginTop:-40,marginBottom:20,borderRadius:100}} />
        <Menu
          style={{justifyContent:'center',backgroundColor:'black'}}
          visible={visible}
          onDismiss={closeMenu}
          anchor={
          <Button onPress={openMenu} style={{backgroundColor:'black'}} buttonColor='black' textColor='white' >
            Maslikhova Yanina
          </Button>}>
          <Menu.Item onPress={() => {}} title="ян" />
          <Menu.Item onPress={AllTry} title="lets Try" />
          <Divider />
          <Menu.Item onPress={handleChosePhoto} title="Change Photos" />
        </Menu>
      <SafeAreaView 
        style={{
        marginTop:60,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:30, 
        borderWidth:2,
        borderRadius:10,
        padding:6,
        borderColor:'grey',
        flexDirection:'row'}}>
        <TextInput
          multiline={true}
          keyboardType='phone-pad'
          style={{fontSize:20,}}
          placeholder="enter your message here"
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
      </SafeAreaView>
      </View>
    </Provider>
  );
};

export default InfoScreen;