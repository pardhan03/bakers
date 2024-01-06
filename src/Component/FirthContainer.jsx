import React from 'react'
import Diamond from '../Images/download.jpg'
import Second from '../Images/download (1).jpg'
import third from '../Images/images.jpg'
import fourth from '../Images/images (1).jpg'
const FirthContainer = () => {
  return (
    <div>
        <div className='fourth_container'>
            <img id='image' src={Diamond} alt="first" />
            <img id='image' src={Second} alt="second" />
            <img id='image' src={third} alt="third" />
            <img id='image' src={fourth} alt="fourth" />
        </div>
        <div className="fourth_second">
          <img src='https://restroking.dexignzone.com/react/static/media/cake1.a135215d.jpg' alt='pic'/>
          <h3>We are Professional on our skills</h3>
          <p>More than 2000+ customer trusted us</p>
        </div>
        <div className='fourth_countinf'>
          <div>
            <span>50</span>
            <small>+</small>
            <p id='inner_fonts'>Years of Experience</p>
          </div>
          <div>
            <span>102</span>
            <p id='inner_fonts'>Award Wins</p>
          </div>
          <div>
            <span>36</span>
            <small>K</small>
            <p id='inner_fonts'>Happy clients</p>
          </div>
          <div>
            <span>99</span>
            <p id='inner_fonts'>Perfect Products</p>
          </div>
        </div>
    </div>
  )
}

export default FirthContainer