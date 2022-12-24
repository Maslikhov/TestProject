import React, {useState, useEffect,useLayoutEffect } from 'react';

import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  Alert
} from 'react-native';

import {launchImageLibrary} from 'react-native-image-picker';

import Icon from 'react-native-vector-icons/FontAwesome';

import AntDesign from 'react-native-vector-icons/AntDesign';

import Spinner from 'react-native-loading-spinner-overlay';

import AsyncStorage from '@react-native-async-storage/async-storage';

import AllTry from './allTry';

const PhotoPage = () => {  
  const [photos, setPhotos]= useState([]);
  const [loading, setLoading] = useState(true);  

  const handleChosePhoto = () => {
    const options = {

      noData: false,
    };

    launchImageLibrary(options,response => {
      const [seletedPhoto] =  response.assets;
      setPhotos([...photos, seletedPhoto]);
    });
  };

  const setImage = async () => {
    try {
      const jsonValue = JSON.stringify(photos)
      await AsyncStorage.setItem('image', jsonValue)
    }
    catch (error) {
      console.log(error);
    };
  };
  
  const getImage = async () => {
    try {
      const asyncGet = await AsyncStorage.getItem('image')
      const userData = JSON.parse (asyncGet)
      
      return(setPhotos(userData))      
     }
      catch (error) {
        console.log(error);  
      };
    };
  const deleteItem = (index) => () => {
    setPhotos([...photos.slice(0, index), ...photos.slice(index + 1)]);
  };

  useEffect(() => 
  {
    getImage()
  }
  , []);

  const alertDelete = (index) =>{
    Alert.alert(
      "Delete Image?",
      '',
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", 
          onPress:(deleteItem(index))
        }
      ]
    );
  };
  
  const photoSize = photos.length;
 
  return (
    <View style={styles.container}>
      <View>{AllTry}</View>
      <Text style={{justifyContent:'center',position:'absolute',top:100,right:190,fontSize:30, color:'white', backgroundColor:'black',overflow:'hidden',borderRadius:5 }}>
          {photoSize}
      </Text>
      <ScrollView 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        contentContainerStyle={{ alignItems:'center', flexGrow: 1, justifyContent: 'center' }}
      > 
        <Spinner
          visible={false}
        />
          {photos.map((photo, index) => {
            return (
              <ImageBackground
              {...setImage()}
                key={index}
                source={{uri: photo.uri}}
                style={{position:'relative', width: 300, height: 300, alignItems: 'center', justifyContent: 'center',marginRight:30, overflow:'hidden',borderRadius:10 }} >
                  <AntDesign 
                    style={{position:'absolute',top:10,right:10}} 
                    size={35} 
                    color={"black" } 
                    name={"closecircle"} 
                    key={index} 
                    onPress={()=>{alertDelete(index)}}/>
              </ImageBackground>
            )
          }
          )}
      </ScrollView> 
      <Icon.Button 
        size={20} 
        backgroundColor={'silver'} 
        color={"black"} 
        name={'plus'} 
        style={{alignItems:'center',left:4}} 
        onPress={handleChosePhoto}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    alignContent:'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
  input: {
    fontSize:20,
    margin: 5,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
 },
});

export default PhotoPage;