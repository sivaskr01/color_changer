import React from 'react'
import colorNames from 'colornames'

const Input = ({color,setColor,isDarkText,setHexColor,setIsDarkText}) => {
  return (
        <form onSubmit={(e)=>{e.preventDefault()}}>
           <input
             autoFocus
             type='text'
             id='add color'
             autoComplete='off'
             placeholder='Add Color Name'
             required
             value={color}
             onChange={(e)=>{
                setColor(e.target.value);
                setHexColor(colorNames(e.target.value));
             }}
           />
           <button
            type='button'
            onClick={()=>setIsDarkText(!isDarkText)}
           >
             Toggle Text Color
           </button>
        </form>
    
  )
}

export default Input