import React from 'react'
import Picture from '../Images/pic3.b66be145.jpg'
import cookie from '../Images/cookie.png'
const FifthContainer = () => {
  return (
    <div className='fifth_container'>
        <img src={Picture}/>
        <div className='fifth_text'>
            <h2>Limited time offer</h2>
            <p>Wedding Cake sale !</p>
            <img src={cookie} className='cookie'/>
            <p className='fifth_font'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
            <button className='fifth_button'>GET NOW</button>
        </div>
    </div>
  )
}

export default FifthContainer