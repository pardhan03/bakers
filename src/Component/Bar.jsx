import React, { useState } from 'react'

const Bar = ({Icon}) => {
    const[select,setSelect]=useState(false);
  return (
    <div className="wrapper">
        <div className="accordion">
            <div className="item">
                <div className="title" onMouseUp={()=>setSelect(!select)}>
                    <p className='head_title'>{Icon}</p>
                    <span>
                        <img 
                            alt='arrow' 
                            src='https://static.vecteezy.com/system/resources/previews/006/827/566/non_2x/down-arrow-icon-sign-symbol-logo-vector.jpg'
                            className='arrow'
                        />
                    </span>
                </div>
                <div className={
                    select ? 'content-show' : 'conten'
                }>
                    Home
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bar