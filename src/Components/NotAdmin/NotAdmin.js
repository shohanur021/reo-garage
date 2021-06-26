import React from 'react';

const NotAdmin = () => {
    const errorStyle = {
        color:'#EB302A',
        textAlign:'center',
        marginTop:'5px'
    }
    return (
        <div style={errorStyle}>
            <h2>You are not admin</h2>
        </div>
    );
};

export default NotAdmin;