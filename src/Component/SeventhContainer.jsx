import React from 'react'
import hello from '../Images/cake1.a135215d.jpg'
import cake1 from '../Images/pic1.jpg'
import cake2 from '../Images/pic2.jpg'
import cake3 from '../Images/pic3.jpg'

const SeventhContainer = () => {
  return (
    <div>
        <div className='seven_top'>
            <img src={hello}/>
            <h2>From the Blog</h2>
            <p>Latest news and update</p>
        </div>
        <div className='seventh_container'>
           <div id='inner_secton'>
                <img id='seven_image' src={cake1}/>
                <div>
                    <h4>Understand The Background Of Bakery Now.</h4>
                </div>
           </div>
           <div id='inner_secton'>
                <img id='seven_image' src={cake2}/>
                <div>
                    <h4>Seven Reliable Sources To Learn About Bakery.</h4>
                </div>
           </div>
           <div id='inner_secton'>
                <img id='seven_image' src={cake3}/>
                <div>
                    <h4>Seven Reliable Sources To Learn About Bakery.</h4>
                </div>
           </div>
        </div>
    </div>
  )
}

export default SeventhContainer