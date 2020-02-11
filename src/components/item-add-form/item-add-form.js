import React from 'react';
import './item-add-form.css';

export default class ItemAddForm extends React.Component {
    render() {
        //const { onAdd } = this.props;

        return (
            <form className="item-add-form d-flex">
                <input type="text" 
                className="form-control" 
                onChange={this.onLabelChange}
                placeholder="What needs to be done" />
                <button onClick={() => this.props.onItemAdded('test')}
                 className="btn btn-outline-secondary text-nowrap" >Add Item</button>
            </form>)
    }
}