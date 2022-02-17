import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index, hexColor}) => {
  const [alert,setAlert] = useState(false);
  //El rgb es un arreglo, por eso lo transformo para usarlo como color
  const bcg = rgb.join(',');
  //Otra alternativa para mostrar el hexa: const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;
  
  useEffect(()=>{
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000);
    return()=>clearTimeout(timeout)
  },[alert])

  return (
    <article
      className={`color ${index>9 && 'light-color'}`}
      style={{background:`rgb(${bcg})`}}
      onClick={
        ()=>{
        setAlert(true)
        navigator.clipboard.writeText(hexValue)
      }}
    >
      <p className='weight'>{weight}%</p>
      <p className='hex'>{hexValue}</p>
      {alert && <p className='copied'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
