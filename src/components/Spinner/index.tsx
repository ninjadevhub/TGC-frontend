import React from 'react';
import Loader from 'react-loader-spinner';

const Spinner = () => {
    return (
        <Loader
            type='Oval'
            color='#00BFFF'
            height={50}
            width={50}
        />
    );
};

export default Spinner;
