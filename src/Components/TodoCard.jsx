import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearTodo,
  deleteAllDuplicates,
  todoClicked,
  toggleStatus,
} from "../Redux/action";
import ClearIcon from "@mui/icons-material/Clear";
import { useRef } from "react";
import { BsCircle } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
export const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  const [hoverDetele, setHoverDelete] = useState(false);
  const [state, setState] = useState(false);
  const [stateChange, setStateChange] = useState(todo.inputData);
  const ref = useRef(todo.inputData);
  const { clicked } = useSelector((store) => store);
  const [check, setCheck] = useState(false);
  //esc key

  //doubleClick
  const handleClick = (e) => {
    switch (e.detail) {
      case 1:
        //change1

        dispatch(todoClicked(false));
        break;
      case 2:
        if(!todo.status){
          setState(!state); //I am making true
          dispatch(todoClicked(true));
        }
 
        break;

      default:
        return;
    }
  };
  useEffect(() => {
    if (!clicked && state) {
      // console.log("change");
      setState(false);
    }
  }, [clicked]);
  //console.log("outer",todo.inputData,state?"true":"false",clicked?"true":"false")

  return (
    <div
      key={todo.id}
      className="todo-div"
      onMouseEnter={() => {
        if (!state) {
          setHoverDelete(true);
        }
      }}
      onMouseLeave={() => setHoverDelete(false)}
    >
      {!state ? (
        check||todo.status ? (
          <AiOutlineCheckCircle
            style={{ width: "30px", height: "30px" }}
            onClick={() => {
              dispatch(toggleStatus({ id: todo.id, query: "toggle" }));
              setCheck(false);
            }}
            className="checkbox-round"
          />
        ) : (
          <BsCircle
            style={{ width: "25px", height: "25px" }}
            className="checkbox-round"
            onClick={() => {
              dispatch(toggleStatus({ id: todo.id, query: "toggle" }));
              setCheck(true);
            }}
          />
        )
      ) : null}
      {state ? (
        <input
          value={stateChange}
          className="change-input"
          onChange={(e) => setStateChange(e.target.value)}
          onKeyPress={(e) => {
            if (e.code == "Enter") {
              if (stateChange == "") {
                dispatch(clearTodo(todo.id));
              } else {
                dispatch(
                  toggleStatus({
                    id: todo.id,
                    query: "change",
                    updatedData: stateChange,
                  })
                );
                dispatch(todoClicked(false));
                setState(false);
              }
            }
          }}
        />
      ) : (
        <p
          className="title"
          style={{ textDecoration: todo.status ? "line-through" : "none" }}
          onClick={handleClick}
        >
          {todo.inputData}
        </p>
      )}

      {hoverDetele ? (
        <ClearIcon
          className="clear"
          onClick={() => {
            dispatch(deleteAllDuplicates(todo.inputData));
          }}
        />
      ) : null}
    </div>
  );
};

//style={{textDecoration:todo.status?"lineThrough":"none"}}
