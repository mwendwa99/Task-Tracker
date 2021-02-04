import Header from "./components/Header"
import Tasks from "./components/Tasks"
import React, {useState} from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Meeting',
        day: 'Thursday 4th Feb 8 a.m',
        reminder: true,
    },
    {
        id: 2,
        text: 'Piano Lesson',
        day: 'Friday 5th Feb 7 a.m',
        reminder: true,
    },
    {
        id: 3,
        text: 'Swimming',
        day: 'Thursday 4th Feb 2 p.m',
        reminder: true,
    },
])
// deleting a tsk
const deleteTask = (id) => {
  setTasks(tasks.filter((item)=> item.id !== id))
}



  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? (
      <Tasks tasks= {tasks} onDelete= {deleteTask}/>) 
      : (
        'No Tasks to show'
        )}
    </div>
  );
}

export default App;
