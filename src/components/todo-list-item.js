import React from 'react';
export default ({label, important = false}) => {

    const liStyle = {
        color: important ? "tomato" : 'black'
    }

    return (
        <span style={liStyle}>{label}</span>
    )
};
