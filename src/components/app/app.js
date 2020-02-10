import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-item';

import './app.css';





export default class App extends Component {
  state = {
    todoData: [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 }
    ]
  }

  addItem = (objItem)=>{
    this.setState(({todoData})=>{
    const newData = [...todoData, objItem];
    return { todoData: newData}
    })
  }

  deleteItem = (id) => {
    // BAD VARIANT (NEED FUNCTION)
    //
    // let todoData = [];
    // [...this.state.todoData]
    //   .filter((item) => item.id !== id)
    //   .forEach((obj) => todoData.push({ ...obj }));
    // this.setState({ todoData });

    //MY variant
    // this.setState((state) => {
    //   let todoData = [];
    //   [...state.todoData]
    //     .filter((item) => item.id !== id)
    //     .forEach((obj) => todoData.push({ ...obj }));
    //   return { todoData }
    // })

    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {todoData: newArray}
  });

}
render() {
  return (
    <div className="todo-app" >
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList
        onDeleted={this.deleteItem}
        todos={this.state.todoData} />
      <AddItem onAdd={this.addItem}/>
    </div>
  );
}
};
