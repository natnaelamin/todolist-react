import React, { useEffect, useState } from "react";
import Submit from "./Submit";
import List from "./List";
import Swal from 'sweetalert2';
import './My.css';

function Todolist() {
const [todos, setTodos] = useState(()=> {
const localValue = localStorage.getItem("ITEMS")

if (localValue == null) return []

return JSON.parse(localValue)

});

const [deleteAll, setDeleteAll] = useState(false);

const handleAddTodo = (newTodo) => {
setTodos([...todos, newTodo]);
};

const deleteTodo = (id) => {
setTodos((currentTodos) => {
return currentTodos.filter((todo) => todo.id !== id);
});
};

const handleDeleteAll = () => {
    setDeleteAll(true);
  };

  useEffect(() => {
    if (deleteAll) {
      if (todos.length === 0) {
        Swal.fire("There are no todos!");
        setDeleteAll(false);
        return;
      }
  
      const confirmDelete = Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("ITEMS");
          setTodos([]);
          setDeleteAll(false);
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
        } else {
          setDeleteAll(false);
        }
      });
    } else {
      localStorage.setItem("ITEMS", JSON.stringify(todos));
    }
  }, [todos, deleteAll]);

return (
  <div className="all">
    <h1>TodoList</h1>
    <Submit onAddTodo={handleAddTodo} />
    <List todos={todos} removeTodo={deleteTodo} />
    <button className="delall" onClick={handleDeleteAll}>Delete All</button>
  </div>
);
}

export default Todolist;