import React from 'react';

export default props => (
    <div>
        <h3>Car name: {props.name}</h3>
        <p>
            Yaer: <strong>{props.year}</strong>
        </p>
    </div>
)