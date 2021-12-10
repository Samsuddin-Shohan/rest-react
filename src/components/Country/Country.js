import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props);
    return (
        <div className='country'>
           <h3>Country Name: {props.name}</h3>
           <p>Area is {props.area} & popoulation is {props.population}</p>
        </div>
    );
};

export default Country;