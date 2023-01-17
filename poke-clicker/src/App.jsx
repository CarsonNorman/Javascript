import { useState } from 'react';
import Button from './components/Button';
import Info from './components/Info';

function App() {
  const [clicked, setClicked] = useState(false)
  
  const handleClick = () =>{
    if(clicked){
    setClicked(false)
  } else{
    setClicked(true)
  }
  }
  return (
    <div className="App w-25 mx-auto d-flex justify-content-center">
      {!clicked && <Button  handleClick={handleClick}/>}
      {clicked && <Info/>}
    </div>
  );
}

export default App;
