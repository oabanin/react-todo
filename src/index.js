import React from 'react';
import ReactDOM from 'react-dom';


const TodoList = (props) => {
    const items = props.items;
    const itemList = items.map((item, index) => <li key={index}>{item}</li>);
    return (
        <ul>
            {itemList}
        </ul>
    )
};

const AppHeader = () => (<h1>My Todo List</h1>);

const SeachPanel = (props) => {
    console.log(props);
    const searchText = 'Type Here to seracj';
    return (<input placeholder={props.date } />)};

const isLoggedIn = true;
const loginBox = <span>Login Box</span>;
const App = () => (
    <div>
        <AppHeader  />
        {true}
        {false}
        {undefined}
        {}
        {loginBox}
        <SeachPanel date={new Date()}/>
        <TodoList items={['Learn React', 'Build Awesome App']} />
    </div>);


ReactDOM.render(<App />,
    document.getElementById('root'));