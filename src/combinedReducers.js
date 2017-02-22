import { combineReducers } from 'redux'
import HeroReducers from './Hero/Hero.reducers'

const reducers = {};
for (let [key, value] of HeroReducers) reducers[key] = value;


export default combineReducers(reducers);