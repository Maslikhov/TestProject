import React,{useState} from "react";
import { TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createSlice, configureStore } from '@reduxjs/toolkit';
import styles from "./styles";

const ButtonLike = () => {
  const [liked, setLiked] = useState(false);

  const counterSlice = createSlice({
    name: 'likeState',
    initialState: {
      value: {liked}
    },
    reducers: {
      Button1: state => {
        setLiked(!liked)
      }
    }
  })

  const { Button1 } = counterSlice.actions

  const store = configureStore({
    reducer: counterSlice.reducer
  })
  store.subscribe(() => console.log(store.getState()))

  console.log(inform)

  return(
    <TouchableOpacity
      isOn={liked}
      onPress={isOn =>  
        store.dispatch(Button1()) 
      }
      style={styles.touchebleLike}
    >
      <Ionicons
        name={liked ? "heart" : "heart-outline"}
        size={40}
        color={liked ? "red" : "black"} 
      />
    </TouchableOpacity>
  )
}
export default ButtonLike;