import { useState } from "react"

export default function ThingsToDo() {

  const [tasks, setTasks] = useState([])

  function addTask() {

    const title = prompt("Task name")

    if (!title) return

    setTasks([...tasks, { title }])

  }

  return (

    <div>

      <div className="pageHeader">

        <h1>Things To Do</h1>

        <button className="primaryBtn" onClick={addTask}>
          + Add Task
        </button>

      </div>

      {tasks.map((task, i) => (

        <div className="taskCard" key={i}>
          {task.title}
        </div>

      ))}

    </div>

  )

}