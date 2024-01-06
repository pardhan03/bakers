import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CallIcon from '@mui/icons-material/Call';
import photo from '../Images/download8.jpg'
const EighthContainer = () => {
  return (
    <div className='eight_mains'>
      <div className='Eighth_container'>
        <img id='eight' src={photo} alt='photo'/>
      </div>
      <div className='eight_inner'>
        <div id='insider'>
          <h3>Contact us</h3>
        </div>
        <div id='insider'>
          <h3>Recent posts</h3>
        </div>
        <div id='insider'>
          <h3>Quick Links</h3>
        </div>
        <div id='insider'>
          <h3>Opening hours</h3>
        </div>
      </div>
    </div>
  )
}

export default EighthContainer