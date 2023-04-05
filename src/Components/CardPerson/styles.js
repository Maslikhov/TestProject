import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  touchebleLike:{ 
  justifyContent: 'center',
  paddingHorizontal: 7
},
cardContainer:{
  borderWidth: 1, 
  borderRadius: 20, 
  width: 350, 
  height: 400,
  marginTop: 30,
  shadowColor: 'grey',
  shadowOpacity: 1,
  shadowRadius: 1,
  shadowOffset: {
    width: 1,
    height: 1
  }
},
nameBox:{
  borderBottomWidth: 1, 
  width: 349,
  height: 100,
  alignItems: 'center'
},
genderBox:{
  width: 174, 
  height: 200, 
  borderRightWidth: 1,
  alignItems: 'center'
},
yearBox:{
  width: 174, 
  height: 200,
  alignItems: 'center'
},
yearGendeContainer:{
  width: 350 ,
  height: 200 ,
  flexDirection:'row',
  borderBottomWidth: 1
},
likeBox:{
  width: 349, 
  height: 100, 
  alignItems:'center',
  justifyContent:'center'
},
cardText:{
  paddingTop: 5,
  fontSize: 25,
  fontWeight: '600'
},
fetchInform:{
  fontSize: 34
},
})