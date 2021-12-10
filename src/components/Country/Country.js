import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country);
   
    const { name,flags,area,population } = props.country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
           <h3>Country Name: {name.common}</h3>
           <p>Area is {area} & popoulation is {population}</p>
        </div>
    );
};

export default Country;