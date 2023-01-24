import Main from './components/Main'
import Item from './components/Item';
import Update from './components/update';
import {
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Item />} />
        <Route path="/update/:id" element={<Update />} />

      
      </Routes>
    </div>
  );
}

export default App;
