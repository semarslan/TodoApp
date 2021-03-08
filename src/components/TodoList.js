import React from 'react';
import TodoItem from "./TodoItem";

const TodoList = (props) => {
    return (
        <div>
            <ul className={"list-group"}>
                {
                    props.items.map((item, index) =>
                        <TodoItem deleteItem={props.deleteItem} key={index} item={item}/>
                    )
                }
            </ul>
            {
                props.items.length > 0
                    ?
                    <p>
                        <button className={"btn btn-outline-danger mt-4 float-end btn-sm"}
                                onClick={props.clearItems}>ClearItems
                        </button>
                    </p>
                    :
                    <p className="alert-warning">Add item to start</p>
            }

        </div>
    )
}

export default TodoList;