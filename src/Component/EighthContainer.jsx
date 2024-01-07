import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CallIcon from '@mui/icons-material/Call';
import photo from '../Images/download8.jpg'
const EighthContainer = () => {
  return (
    <div className='eight_mains'>
       <div id='insider'>
          <h3>Contact us</h3>
          <LocationOnIcon/>
          <CallIcon/>
          <PhoneIphoneIcon/>
          <MailIcon/>
        </div>
        <div id='insider_2'>
          <h3>Recent posts</h3>
        </div>
        <div id='insider_3'>
          <h3>Quick Links</h3>
        </div>
        <div id='insider_4'>
          <h3>Opening hours</h3>
        </div>
    </div>
  )
}

export default EighthContainer