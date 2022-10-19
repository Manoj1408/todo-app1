import React, { useEffect, useState } from "react";
import "./Todo.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch } from "react-redux";
import { addTodo, clearAllCompleted, completeAlltodos } from "../Redux/action";
import { useSelector } from "react-redux";
import { TodoCard } from "./TodoCard";

export const Todo = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const { todos,clicked } = useSelector((store) => store);
  const [completed, setCompleted] = useState(false);
  const [active, setActive] = useState(false);
  const handleForm = (e) => {
    e.preventDefault();
    const data = {
      inputData,
      id: Date.now(),
      status: false,
    };
    dispatch(addTodo(data));
    setInputData("");
  };
  const handleAll = () => {
    setActive(false);
    setCompleted(false);
  };
  const handleCompleted = () => {
    setCompleted(true);
    setActive(false);
  };
  const handleActive = () => {
    setCompleted(false);
    setActive(true);
  };
  let count = 0;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].status == false) {
      count++;
    }
  }
  return (
    <div className="mainDiv">
      <p className="heading">todos</p>
      <form action="" onSubmit={(e) => handleForm(e)}>
        <div className="input-div">
          <KeyboardArrowDownIcon
            onClick={() => {
              if(!clicked){
                dispatch(completeAlltodos());
              }
             
            }}
          />
          <input
            placeholder="What needs to be done?"
            className="add-input"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          ></input>
        </div>
      </form>
      {todos
        ?.filter((todo) => {
          if (completed == false) {
            return todo;
          } else {
            if (todo.status == true) {
              return todo;
            }
          }
        })
        .filter((todo) => {
          if (active == false) {
            return todo;
          } else {
            if (todo.status == false) {
              return todo;
            }
          }
        })

        .map((todo) => {
          return <TodoCard todo={todo} key={todo.id} />;
        })}

      {todos.length > 0 ? (
        <div className="bottom-card">
          <span>{count} {count==1?"Item left":"Items left"}</span>
          <button
            className="import-button"
            onClick={handleAll}
            style={{
              background: !active && !completed ? "rgb(229, 215, 215)" : "none",
            }}
          >
            All
          </button>
          <button className="import-button" onClick={handleCompleted}
           style={{
            background: !active && completed ? "rgb(229, 215, 215)" : "none",
          }}
          >
            Completed
          </button>
          <button className="import-button" onClick={handleActive}
           style={{
            background: active && !completed ? "rgb(229, 215, 215)" : "none",
          }}
          >
            Active
          </button>
          {count != todos.length ? (
            <button
              className="import-button"
              onClick={() => {
                dispatch(clearAllCompleted());
              }}
            >
              Clear Completed
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};
