import React from 'react'
import { Men_list } from '../assets/assets'

const Men = () => {
  return (
    <div className='content'>
            {Men_list.map((item)=>{
                return(
                    <div>
                        <div className='content_item'>
                            <img src={item.image} alt="" />
                            <p>{item.price}</p>
                            <br />
                        </div> 
                        <button>Add To Cart</button>
                    </div>              
                )        
            })}
            
        </div>
  )
}

export default Men