import React from 'react'
import  women  from '../../assets/women.jpg'
import  men  from '../../assets/men.jfif'
import  kid  from '../../assets/kid.jpg'
import Women from '../../pages/Women'
import  './Category.css'
import { useNavigate } from 'react-router-dom'

const Cate = () => {
  const navigate =useNavigate();

  const goWomenPage = () =>{
    navigate('/Women');
  };
  const goMenPage = () =>{
    navigate('/Men');
  };
  const goKidsPage = () =>{
    navigate('/Kids');
  };
  

  return (
    <div className='category-list'>
      <div>
        <button onClick={goWomenPage}><img src={women} alt="" /></button>
        <p>WOMEN</p>
      </div>
      <div>
        <button onClick={goMenPage}><img src={men} alt="" /></button>
        <p>MEN</p>
      </div>
      <div>
        <button onClick={goKidsPage}><img src={kid} alt="" /></button>
        <p>KIDS</p>
        <br />
      </div>
    </div>
    
  )
}

export default Cate