import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {
  createTodoItem = (label) => {
    return {
      label,
      important: false,
      done: false,
      hide: false, //My Variant
      id: this.maxId++
    }
  }

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ],
    btn: 'All', //My Variant
    term: '', //teacher's variant
    filter: 'active' //teacher's variant (active, all,done)
  }

  //MYVARIANT
  // onSearch = (text) => {
  //   this.setState(({ todoData }) => {
  //     const newStateData = [...todoData];
  //     todoData.forEach((obj, index) => {
  //       if (obj.label.toLowerCase().includes(text.toLowerCase())) {
  //         newStateData[index] = { ...newStateData[index], hide: false };
  //       }
  //       else {
  //         newStateData[index] = { ...newStateData[index], hide: true };
  //       }

  //     });
  //     return { todoData: newStateData }
  //   });
  // }

  //TEachers Variant
  onSearchChange = (term) => {
    this.setState({ term });
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  }


  onItemAdded = (text) => {
    const newItem = this.createTodoItem(text);

    //let nextId = this.state.todoData[this.state.todoData.length-1].id + 1;

    this.setState(({ todoData }) => {
      const newData = [...todoData, newItem];
      return { todoData: newData }
    })

  }

  toggleProperty(arr, id, propname) {
    const idx = arr.findIndex((obj) => obj.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propname]: !oldItem[propname] }
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];

  }




  //MY VARIANT (BAD)
  // onlyDone = () => {
  //   this.setState(({ todoData }) => {
  //     const newStateData = [...todoData];
  //     todoData.forEach((obj, index) => {
  //       if (obj.done) {
  //         newStateData[index] = { ...newStateData[index], hide: false };
  //       }
  //       else {
  //         newStateData[index] = { ...newStateData[index], hide: true };
  //       }
  //     });
  //     return { todoData: newStateData, btn: 'Done' }
  //   });
  // }

  // onlyActive = () => {
  //   this.setState(({ todoData }) => {
  //     const newStateData = [...todoData];
  //     todoData.forEach((obj, index) => {
  //       if (!obj.done) {
  //         newStateData[index] = { ...newStateData[index], hide: false };
  //       }
  //       else {
  //         newStateData[index] = { ...newStateData[index], hide: true };
  //       }
  //     });
  //     return { todoData: newStateData, btn: 'Active' }
  //   });
  // }

  // all = () => {
  //   this.setState(({ todoData }) => {
  //     const newStateData = [...todoData];
  //     todoData.forEach((obj, index) => newStateData[index] = { ...newStateData[index], hide: false });
  //     return { todoData: newStateData, btn: 'All' }
  //   });
  // }




  onToggleDone = (id) => {
    //MY VARIANT
    // this.setState(({ todoData }) => {
    //   const idx = todoData.findIndex((obj) => obj.id === id);
    //   const newData = [...todoData];
    //   newData[idx] = { ...newData[idx], done: !newData[idx].done };
    //   return {
    //     todoData: newData
    //   }
    // }

    //Teacher's variant
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, "done") }
    });

  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, "important") }
    });
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
      return { todoData: newArray }
    });

  }


  //TEACHERS VARIANT
  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1
    });
  }

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active': 
        return items.filter((item)=>!item.done);
      case 'done':
        return items.filter((item)=>item.done);
      default:
        return items;

    }

  }


  render() {
    const { todoData, term, filter } = this.state;
    const visibleItems = this.filter(this.search(todoData, term), filter);

    const doneCount = todoData.filter((obj) => obj.done === true).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app" >
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            filter={filter}
            onFilterChange={this.onFilterChange}
            // btnActive={this.state.btn}
            // all={this.all}
            // onlyDone={this.onlyDone}
            // onlyActive={this.onlyActive}
          />
        </div>

        <TodoList
          onDeleted={this.deleteItem}
          todos={visibleItems}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant} />
        <ItemAddForm onItemAdded={this.onItemAdded} />
      </div>
    );
  }
};
