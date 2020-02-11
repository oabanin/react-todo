import React from 'react';
import './item-add-form.css';

export default class ItemAddForm extends React.Component {
    render() {
        //const { onAdd } = this.props;

        return (
            <div className="item-add-form">
                <button onClick={() => this.props.onItemAdded('test')}
                 className="btn btn-outline-secondary">Add item</button>
            </div>)
    }
}