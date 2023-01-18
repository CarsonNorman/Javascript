import Info from './components/Info'
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Direct from './components/direct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Info/>}/>
        <Route path='/:item/:id' element={<Direct/>} />
      </Routes>
    </div>
  );
}

export default App;
