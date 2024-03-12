import React from 'react'

const Box = ({color,hexColor,isDarkText,title}) => {
  
  return (
       <section className='Box'
         style={{backgroundColor:color,
         color:(isDarkText ? "#000":"#FFF")
        }}>
            <h1 style={{ color: 'navy' }}>{title}</h1>
       <p>{color ? color:"Empty Value"}</p>
       <p>{hexColor ? hexColor:null}</p>
       </section>
    
    
  )
}
Box.defaultProps={
  color:"Empty Color Value"
}

export default Box