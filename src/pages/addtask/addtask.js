import "./addtask.css";
import React from "react";
import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pushTask } from "../../store/store";

const AddTask = () => {
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [checked, setChecked] = useState(false);
  let history = useHistory();
  const tasks = useSelector((state) => state.list.tasks);
  const dispatch = useDispatch();
  const addTask = useCallback((list) => dispatch(pushTask(list)), [dispatch]);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const add = () => {
    const task = {
      id,
      description,
      date,
      status,
      isDone: checked
    };
    let newList = [...tasks];
    newList.push(task);
    addTask(newList);
    setStatus("");
    setDate("");
    setId("");
    setChecked(false);
    history.push("/listtask");
  };
  return (
    <div className={"addTaskC"}>
      <h1>Add task</h1>
      <Card
        className={"mylistcard"}
        style={{ backgroundColor: "#FFFDF8", borderRadius: "1rem 3rem 1rem" }}
      >
        <div className={"sous-card"}>
          <TextField
            value={id}
            onChange={(event) => setId(event.target.value)}
            style={{ width: "100%" }}
            label="Id"
          />
          <TextField
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            style={{ width: "100%" }}
            label="Description"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Is Done"
          />
          <TextField
            label="Date de création"
            type="datetime-local"
            defaultValue="01/01/2021h08:00"
            InputLabelProps={{
              shrink: true,
            }}
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
          <Select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <MenuItem value={"TODO"}>Todo</MenuItem>
            <MenuItem value={"DOING"}>Doing</MenuItem>
            <MenuItem value={"DONE"}>Done</MenuItem>
          </Select>
          <Button
            onClick={add}
            style={{ width: "30%", alignSelf: "center", marginTop: 10 }}
            variant="contained"
            color="primary"
          >
            Envoyer
          </Button>
        </div>
      </Card>
      <Link to={"listtask"}>Go To List Tasks</Link>
    </div>
  );
};

export default AddTask;
