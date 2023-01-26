import { Routes, Route } from 'react-router-dom'
import Main from './components/main';
import Author from './components/Author';
import Nav from './components/Navbar';
import Edit from './components/editForm';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <div className="App mx-auto">
      <Nav />
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/:id' element={<Author/>}/>
        <Route path='/:id/:author/edit' element={<Edit/>}/>
        <Route path='/author/edit/:id' element={<EditAuthor/>}/>
      </Routes>
    </div>
  );
}

export default App;
