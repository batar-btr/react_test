import React from 'react';

const person = props => {
    return (
        <div className="Person">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <input type="text" placeholder="enter a name"/>
        </div>
    );
};

export default person;