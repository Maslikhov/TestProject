import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
borderBox:{
  flex: 1,
  marginHorizontal: 10,
  borderWidth: 1,
  borderRadius: 20,
  shadowColor: "silver",
  shadowOpacity: 1,
  shadowRadius: 0.8,
  shadowOffset: {
    height: 0.3,
    width: 0.3
  },
  width: 110,
  height: 80,
 },
 count:{
  fontSize: 34,
  paddingLeft: 7
 },
 countText:{
  paddingTop: 10,
  paddingLeft: 7
 },
 clearButton:{
  borderColor:'red',
  borderWidth:1.5,
  borderRadius:10,
  alignItems:'flex-end',
  marginLeft:280,
  marginRight:20,
  marginBottom:20
},
buttonClear:{
  paddingHorizontal: 20,
  paddingVertical: 5 ,
  color:'red',
  fontSize: 18
},
boxContainer:{
  flexDirection:'row',
},
})