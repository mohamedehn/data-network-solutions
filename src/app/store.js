import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageReducer';

// Créez le store Redux en passant un objet de reducers à configureStore
const store = configureStore({
  reducer: {
    language: languageReducer,
    // ...autres reducers
  },
});


export default store;
