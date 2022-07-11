import { combineReducers } from '@reduxjs/toolkit'
import homeReducer from '@modules/HomePageModule/slice'
import authReducer from '@modules/AuthPageModule/slice'

const rootReducer = combineReducers({
  home: homeReducer,
  auth: authReducer
})

export default rootReducer
