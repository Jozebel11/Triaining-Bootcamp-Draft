import React from 'react'
import './Home.css'
import Spline from '@splinetool/react-spline';

const Home = () => {
  return (
    <div className='home'>
        <Spline className='spline' scene="https://prod.spline.design/btythcQCBjRPErpC/scene.splinecode" />
    </div>
  )
}

export default Home