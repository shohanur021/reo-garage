import React from 'react';

const NoFound = () => {
    const errorStyle = {
        color:'#EB302A',
        textAlign:'center',
        marginTop:'5px'
    }
    return (
        <div style={errorStyle}>
            <h1>Page is not found</h1>
            <h3>404 Error</h3>
        </div>
    );
};

export default NoFound;