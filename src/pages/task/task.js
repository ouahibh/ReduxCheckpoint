import "./task.css";
import React from "react";
import { Card } from "@material-ui/core";

const Task = (props) => {
  return (
    <Card style={{ backgroundColor: "#ecf0efd3", borderRadius:'2rem 1rem 2rem'}} className={"taskCard"}>
      <div className={"textCard"}>
        <h3>Id: {props.id} </h3>
        <h3>Description : {props.description} </h3>
        <h3>Is Done : {props.isDone} </h3>
        <h3>Date Creation : {props.date}</h3>
        <h3>Status : {props.status}</h3>
      </div>
    </Card>
  );
};

export default Task;
