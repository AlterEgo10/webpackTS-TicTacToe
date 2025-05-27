import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import React, { useState, useEffect, useContext } from 'react';
//import { ThemeContext } from '../helpers/ThemeContext';
const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL
 //const { language } = useContext(ThemeContext);

let API_KEY = process.env.API_KEY;

const movieSeriesSlice = createSlice({
  name:'moviesSeries',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchDataStart(state) {
      state.loading = true
      state.error = null
    },
    fetchDataSuccess(state, action) {
        console.info(action)
        state.loading = false
        state.data=action.payload
      },
        fetchDataFail(state,action) {
          state.loading = false
          state.error=action.payload
        },

  }
})

export const { fetchDataStart, fetchDataSuccess, fetchDataFail } = movieSeriesSlice.actions

export default movieSeriesSlice.reducer


export const fetchMovies = () => async (dispatch) => {

 dispatch(fetchDataStart())
  try {
  
   // const response = await fetch( `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=${language}&page=1`)
   // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en&page=1`)
    const data = await response.json()
    console.log(response)
    dispatch(fetchDataSuccess(data.results))
  } catch (error) {
    dispatch(fetchDataFail(error.message))
  }
}

export const fetchSeries = () => async (dispatch) => {

  dispatch(fetchDataStart())
   try {
   
    // const response = await fetch( `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=${language}&page=1`)
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
     const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en&page=1`)
      
     const data = await response.json()
     console.log(response)
     dispatch(fetchDataSuccess(data.results))
   } catch (error) {
     dispatch(fetchDataFail(error.message))
   }
 }



