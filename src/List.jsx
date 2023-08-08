import React from "react";
import FlipMove from "react-flip-move";
import './My.css';

function List({ todos, removeTodo }) {
const deleteTodo = (id) => {
removeTodo(id);
};

return (
<ul >
<FlipMove duration={800} easing="ease-out">
{todos.map((todo) => (
<li className="lists" key={todo.id}>
    <input className="check" type="checkbox" />
    
<label>
{todo.text}
</label>
{todo.priority === 'high' && <span className="star-blue">*</span> }
    {todo.priority === 'medium' && <span className="star-green">*</span> }
    {todo.priority === 'low' && <span></span> }
<button className="btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
</li>
))}
</FlipMove>
</ul>
);
}

export default List;