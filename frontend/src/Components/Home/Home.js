import React from 'react'
import './home.css'

const Home = ({fWidth}) => {
  return (
    <div style={{width: fWidth ? "80vw" : "92vw"}} className='home'>
        <div className='home_card'>
            <h2>35</h2>
            <p>Parking Lots</p>
        </div>
        <div className='home_card'>
            <h2>685</h2>
            <p>Number Of Vehicle Parked</p>
        </div>
        <div className='home_card'>
            <h2>315</h2>
            <p>Parking Slots</p>
        </div>
    </div>
  )
}

export default Home