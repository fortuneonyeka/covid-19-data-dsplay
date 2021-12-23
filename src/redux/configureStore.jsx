import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import covidAFReducer from './covid-19/covid-19';

const store = createStore(covidAFReducer, applyMiddleware(thunk, logger));

export default store;
