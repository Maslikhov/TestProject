import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';


export const store = configureStore({
 reducer: { ...reducer },
 middleware:[],
 devTools: process.env.NODE_ENV !== 'production',
});
