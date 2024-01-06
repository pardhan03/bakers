import React from 'react'
import { CupCakeImages } from '../Images/CupCakeImages'
const FirstContainer = () => {
  return (
    <div>
        <div className="capcake_container">
            {CupCakeImages.map(()=>(
                <div
                className="cupcake_images"
                >
                    <img className="cake-image" src={CupCakeImages.path} alt="cake_images" />
                    <h2 className="cake-title">Cup Cake</h2>
                    <h3 className="cake-text">Lorem lpsum is simply</h3>
                    <button className="cup_button">More detail</button>
                </div>
            ))}
        </div>
        <div className="cup_text">
            <img src='https://restroking.dexignzone.com/react/static/media/cake1.a135215d.jpg' alt='pic'/>
            <h4 className='it_text'>It’s a party and you’re invited</h4>
            <p className='join_text'>Join DexignZone Bakery™ to earn Gold level benefits like free Cakes and food, get free refills, pay and order with your phone, and more.</p>
            <p className='deals_text'>Exclusive deals on Cakes, delivered straight to your inbox Join Now</p>
        </div>
    </div>
  )
}

export default FirstContainer