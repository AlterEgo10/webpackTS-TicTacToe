//import React from 'react'
import React from 'react';
import { Outlet } from 'react-router-dom'
import Tabs from '../Tabs/Tabs'
import Menu from '../Menu';
import OneBestMovie from '../OneBestMovie';

export default function MainLayout() {

  return (
    <div>
      <Menu />
      <OneBestMovie/>
      <Tabs/>
      {/* <MoviesSeries/> */}
    <Outlet/>
    </div>
  )
}
