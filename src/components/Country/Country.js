import React from 'react';

const Country = (props) => {
    console.log(props.country)
    const { name, area, population, region, flags } = props.country;
    return (
        <div style={{ backgroundColor: 'yellow', border: '5px solid red', borderRadius: '10px', margin: '10px' }}>
            <h1>Name:{name.common}</h1>
            <img style={{ width: '150px' }} src={flags.png} alt="" />
            <h5>Population:{population}</h5>
            <p>Area:{area}</p>
            <h5>Region{region}</h5>
        </div>
    );
};

export default Country;