import React, { useState } from "react";
import { useStore } from "../zustandStore";

export default function ZustandTodo() {
  const [text, setText] = useState("");
  const { value, increment, decrement } = useStore();

  return (
    <div className="flex-1 border p-4 shadow rounded">
      <h2 className="font-bold text-blue-600 mb-2">Zustand</h2>
      <input 
        className="border p-1 w-full mb-2" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Что сделать?"
      />
      <button 
        className="bg-blue-500 text-white w-full py-1 mb-4"
        onClick={() => {
          if (text) {
            increment(text); 
            setText("");
          }
        }}
      >
        Добавить
      </button>
      {value.map((item, i) => (
        <div key={i} className="flex justify-between border-b py-1">
          {item} 
          <button onClick={() => decrement(i)} className="text-red-500">x</button>
        </div>
      ))}
    </div>
  );
}