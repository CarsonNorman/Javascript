import NewTask from './components/NewTask'
import Task from './components/Task';
import { useState } from 'react';

function App() {
  const [form, setForm] = useState(false)
  const [taskList, setTaskList] = useState([])
  const handleAdd = (task) =>{
    const temp = [...taskList, task]
    temp.map((task, idx) => { task.key = idx; task.id = idx})
    setTaskList(temp)
    setForm(false);
  }
  const handleDelete = (key) =>{
    console.log('ran')
    console.log(key)
    setTaskList(taskList.filter(task => task.key !== key))
  }
  return (
    <div className="App mx-auto w-25 card pb-3 mt-5">
      {taskList.map((task) => <Task {...{...task}} handleDelete={handleDelete}/>)}
      {form && <NewTask handleAdd={handleAdd} />}
      {!form && <button type="submit" onClick={() => setForm(true)} className='w-25 mx-auto mt-3'>Add new task</button>}
    </div>
  );
}

export default App;
