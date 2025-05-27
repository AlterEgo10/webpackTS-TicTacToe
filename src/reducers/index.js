import { combineReducers } from "@reduxjs/toolkit";
import movieSeriesSlice from './movieSeriesSlice'

const rootReducer = combineReducers({
 // moviesSeriesSave: saveSlice,//передаем редюсеры
  moviesSeries:movieSeriesSlice,
})

export default rootReducer 