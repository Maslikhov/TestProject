import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    paddingTop: 50,
  },
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

})
