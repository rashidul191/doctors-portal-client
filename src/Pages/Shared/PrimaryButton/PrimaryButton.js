import React from 'react';

const PrimaryButton = (props) => {
    const {children} = props
    return (
        <button className="btn btn-primary font-bold text-white uppercase bg-gradient-to-r from-primary to-secondary">
        {children}
      </button>
    );
};

export default PrimaryButton;