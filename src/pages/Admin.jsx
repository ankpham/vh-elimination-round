import React from 'react';
import {Link} from 'react-router-dom';

const Admin = () => {
    return (
        <>
        <div className="admin">
            <div className="container">
                <Link className="link back-to-selection" to="/">Back To Selection</Link> 
                <h1>Admin</h1>
            </div>
        </div>
        </>
    )
}

export default Admin;