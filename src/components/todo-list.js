import React from 'react';
import TodoListItem from "./todo-list-item";

export default ({todos}) => {
    const items = todos.map((item)=>{
        const {id, ...rest} = item;
        return <li key={id}><TodoListItem {...rest}/></li>
    })
    return (
        <ul>
            {items}
            


        </ul>
    )
};

