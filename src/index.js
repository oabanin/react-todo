import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todo-list';
import AppHeader from './components/app-header';
import SeachPanel from './components/search-panel';



const isLoggedIn = true;
const loginBox = <span>Login Box</span>;
const alert = '<script>alert()</script>'
const App = () => {
    const todoData = [
        { label: "drink cofee", important: false, id: 1 },
        { label: "watch tv", important: true, id: 2 },
        { label: "have a lunch", important: false, id: 3 }
    ];
    return (
        <div>
            <AppHeader />
            {true}
            {alert}<br />
            {false}
            {undefined}
            {}
            {loginBox}
            <SeachPanel date={new Date()} />
            <TodoList todos={todoData} items={['Learn React', 'Build Awesome App']} />
        </div>)
};


ReactDOM.render(<App />,
    document.getElementById('root'));