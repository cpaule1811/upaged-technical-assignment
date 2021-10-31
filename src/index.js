import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import shiftsInvitedReducer from './reducers/shiftsInvitedSlice';
import upcomingShiftsReducer from './reducers/upcomingShiftsSlice';

const store = configureStore({
  reducer: {
    shiftsInvitedReducer,
    upcomingShiftsReducer,
  }
})

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

