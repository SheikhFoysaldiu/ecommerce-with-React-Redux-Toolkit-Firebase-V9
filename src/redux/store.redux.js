import { applyMiddleware } from 'redux';
import logger from 'redux-logger'

import reducer from './reducers/reducers.redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
const middleware = [logger]
export const store = configureStore(
  reducer,  composeWithDevTools(
    applyMiddleware(...middleware)
  ));