import Main from './components/Main'
import Item from './components/Item';

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

      
      </Routes>
    </div>
  );
}

export default App;
