import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../reduxStore";

export default function ReduxTodo() {
  const [text, setText] = useState("");
  const list = useSelector((state) => state.todos.value);
  const dispatch = useDispatch();

  return (
    <div className="flex-1 border p-4 shadow rounded">
      <h2 className="font-bold text-red-600 mb-2">Redux Toolkit</h2>
      <input 
        className="border p-1 w-full mb-2" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Что сделать?"
      />
      <button 
        className="bg-red-500 text-white w-full py-1 mb-4"
        onClick={() => {
          if (text) {
            dispatch(increment(text)); // text станет тем самым action.payload
            setText("");
          }
        }}
      >
        Добавить
      </button>
      {list.map((item, i) => (
        <div key={i} className="flex justify-between border-b py-1">
          {item} 
          <button onClick={() => dispatch(decrement(i))} className="text-red-500">x</button>
        </div>
      ))}
    </div>
  );
}