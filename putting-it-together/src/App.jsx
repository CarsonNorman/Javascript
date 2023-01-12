import Card from './components/card';
import './App.css';

function App() {
  const info = [
    {
      fname : 'Harold',
      lname: 'Smithsonian',
      age: 412,
      hcolor: 'gold'

    },
    {
      fname: 'Smith',
      lname: 'Haroldonian',
      age: 7,
      hcolor: 'bald'
    }
  ]
  return (
    <div className="App">
      { info.map(person => {
        return(
          
          <Card person={person} key={person.fname}/>
        )
      })
      }
    </div>
  );
}

export default App;
