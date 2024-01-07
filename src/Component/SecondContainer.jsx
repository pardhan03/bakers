import React from 'react'
import second from '../Images/sec1.jpg'
import cookie from '../Images/cookie.png'
import sec2 from '../Images/sec02.png'
import sec3 from '../Images/sec03.png'
import sec4 from '../Images/sec04.png'
import sec5 from '../Images/sec05.png'
import sec6 from '../Images/sec01.png'
const SecondContainer = () => {
  return (
    <div className='second_container'>
       <h1>What do we offer for you</h1>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae ipsa eos doloribus maxime. Fugit non quibusdam inventore voluptas. Alias an</p>
        <div className='second_inn'>
            <div id='sec_u'>
                <img className='sec_img' src={second}/>
            </div>
            <div>
                <div id='second_d'>
                    <div id='new_d'>
                        <img id='seco' src={cookie}/>
                        <h4>Pancakes</h4>
                    </div>
                    <p>lorem lpsum is dummy</p>
                </div>
                <div id='second_d'>
                    <div id='new_d'>
                        <img id='seco' src={sec2}/>
                        <h4>Pumpkin cakes</h4>
                    </div>
                    <p>lorem lpsum is dummy</p>
                </div>
                <div id='second_d'>
                    <div id='new_d'>
                        <img id='seco' src={sec3}/>
                        <h4>muffin</h4>
                    </div>
                    <p>lorem lpsum is dummy</p>
                </div>
            </div>
            <div>
                <div id='second_d'>
                    <div id='new_d'>
                        <img id='seco' src={sec4}/>
                        <h4>Pumpkin cake</h4>
                    </div>
                    <p>lorem lpsum is dummy</p>
                </div>
                <div id='second_d'>
                    <div id='new_d'>
                        <img id='seco' src={sec5}/>
                        <h4>Cake Service</h4>
                    </div>
                    <p>lorem lpsum is dummy</p>
                </div>
                <div id='second_d'>
                    <div id='new_d'>
                        <img id='seco' src={sec6}/>
                        <h4>Birthday cake</h4>
                    </div>
                    <p>lorem lpsum is dummy</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecondContainer