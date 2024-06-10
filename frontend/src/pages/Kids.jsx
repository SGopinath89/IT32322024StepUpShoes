import React from 'react'
import { Kids_list } from '../assets/assets'

const Kids = () => {
  return (
    <div className='content'>
            {Kids_list.map((item)=>{
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

export default Kids