import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/Counter/counterSlice';
import userReducer from '../features/Auth/userSlice';

const rootReducer = {
  count: counterReducer,
  user: userReducer,
};
const store = configureStore({
  reducer: rootReducer,
  user: userReducer,
});

export default store;
