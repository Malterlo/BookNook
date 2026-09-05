import { useState } from "react";

const TaskList = ({ tasks }) => {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [taskList, setTaskList] = useState(tasks);

  const handleTaskComplete = (taskId) => {
    setCompletedTasks([...completedTasks, taskId]);
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
