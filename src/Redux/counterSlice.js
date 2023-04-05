import { createSlice } from '@reduxjs/toolkit'

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

export const { likeChange } = counterSlice.actions

export default counterSlice.reducer