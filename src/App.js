import Box from './Box';
import Input from './Input';
import { useState } from 'react';

function App() {

  const[color, setColor]=useState('') 
  const[hexColor, setHexColor]=useState('')
  const[isDarkText, setIsDarkText]=useState(true)
  

  
  return (
    <div className="App">
      <Box
       title="Color Changer"
       color={color}    
       hexColor={hexColor}
       isDarkText={isDarkText}   
      />
      <Input
       color={color}    
       setHexColor={setHexColor}
       isDarkText={isDarkText}   
       setColor={setColor}
       setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
