import "./listtask.css";
import React from "react";
import Task from "../task/task";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ListTask = () => {
  const tasks = useSelector((state) => state.list.tasks);
  return (
    <div className={"mainContenair"}>
      <h1>List Tasks</h1>
      <div className={"listContainer"}>
        {tasks &&
          tasks.map(task => (
            <Task
              id={task.id}
              description={task.description}
              isDone={task.isDone}
              date={task.date}
              status={task.status}
            />
          ))}
      </div>

      <Link to={"addtask"}>
        <span>Go to Add Tasks</span>
      </Link>
    </div>
  );
};
export default ListTask;
