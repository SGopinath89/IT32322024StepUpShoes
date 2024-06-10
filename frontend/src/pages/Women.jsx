import React from 'react'
import { Women_list } from '../assets/assets'

const Women = () => {
  return (
    <div className='content'>
            {Women_list.map((item)=>{
                return(
                    <div>
                        <div className='content_item'>
                            <img src={item.image} alt="" />
                            <p>{item.price}</p>
                            <br />
                        </div> 
                       
                        <button>VIEW</button>
                    </div>              
                )        
            })}
            
        </div>
  )
}

export default Women