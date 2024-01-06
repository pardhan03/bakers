import React from 'react'
import Bar from './Bar'
const Header = () => {
  return (
    <div className="header">
        <div className='left_side'>
            <Bar Icon="Home"/>
            <Bar Icon="Pages"/>
            <Bar Icon="Our Menu"/>
        </div>
        <div className='right_side'>
            <Bar Icon="Blog"/>
            <Bar Icon="Shop"/>
            <Bar Icon="Contact us"/>
        </div>
    </div>
  )
}

export default Header