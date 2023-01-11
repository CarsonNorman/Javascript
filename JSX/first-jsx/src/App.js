import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <h3>Things I need to do</h3>
      <ul id='list' onClick >
        <li>My homework</li>
        <li>My laundry</li>
        <li>Apply for jobs</li>
      </ul>
    </div>
  );
}

export default App;
