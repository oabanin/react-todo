import React from 'react';
export default (props) => {
    console.log(props);
    const searchText = 'Type Here to seracj';
    const searchStyle = {
        fontSize: "20px"
    }
    return (<input
        style={searchStyle}
        autoComplete=""
        placeholder={props.date} />)
};