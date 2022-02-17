import React, { useState,useEffect } from 'react';
import Values from 'values.js';
import SingleColor from '../SingleColor'

export const FinderForm = () => {

const [color, setColor] = useState('');
const [error, setError] = useState(false);
const [list, setList] = useState(new Values('#161276').all(10));


const handleSubmit = (e)=>{
  e.preventDefault()
  try{
    let colors = new Values(color).all(10)
    setList(colors)
  }catch(error){
    setError(true);
    console.log(error)
  }
}

useEffect(() => {
  setError(false);
}, [color])


  return (
    <>
        <div className='finder-container'> 
          <h1>Color Generator</h1>
          <form onSubmit={handleSubmit}>
            <input 
              className={`${error ? 'error': null}`}  
              type="text" 
              placeholder='Try #161276' 
              value= {color} 
              onChange = {(e)=>setColor(e.target.value)}
            
            />
            <button type="submit">Submit</button>
            {error && <p className='text-error'>Please enter a valid hex color</p>}
          </form>
        </div>

        <div className='color-container'>
          {/* index lo traigo para usarlo como key */}
          {list.map((color,index)=>{
            return (
              <SingleColor 
                key={index} 
                {...color} 
                index={index}
                hexColor={color.hex}
              />
            )
          })}
      </div>
    </>
  )
}
