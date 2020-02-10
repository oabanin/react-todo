import React from 'react';

export default class AddItem extends React.Component {
    render() {
        const {onAdd} = this.props;

        return (<button onClick={() => onAdd({ label: 'PIZDFA', important: false, id: 999 })}>Add item</button>)
    }
}