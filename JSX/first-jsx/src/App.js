import logo from './logo.svg';
import './App.css';


function App() {
  let tasks = ['do something', 'do something else', 'do one last thing']
  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <h3>Things I need to do</h3>
      <ul id='list' onClick >
        {tasks.map(task => <li>{task}</li>)}
      </ul>
    </div>
  );
}

export default App;
