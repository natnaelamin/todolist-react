import React, { useState } from "react";
import Swal from 'sweetalert2';


function Submit({ onAddTodo }) {
  const [sub, setSub] = useState("");
  const [priority, setPriority] = useState("priority");

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (sub.trim() !== "") {
      if(priority== "priority" )  {
        Swal.fire("please select a priority!")
        return
      }
      const newTodo = {
        id: Date.now(),
        text: sub,
        
        
      priority: priority,
      };
      onAddTodo(newTodo);
      setSub("");
      setPriority("priority");
    }
  };

  return (
    <form className="form">
      <input className="input"
        type="text"
        value={sub}
        onChange={(e) => setSub(e.target.value)}
        placeholder="Type here..."
      />
      <div className="formbuttons">
        <select  className="prio" value={priority} onChange={handlePriorityChange}>
          <option disabled>priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button className="btn-sub" type="submit" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      
    </form>
  );
}

export default Submit;