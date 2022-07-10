import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';

const AdminLogin = () => {
    const username = useRef(null);
    const password = useRef(null);
    const [auth, setAuth] = useState(false);

    const Authenticate = () => {
        if (username.current.value === "user" &&  password.current.value === "pass") {
            setAuth(true)
        }
    }

    useEffect(() => {
        if (auth === true) {
            window.location = '/admin/2iu80qpo0w23'
        }
    })

    return (
        <div className="home">
            <div className="container">
                <Link className="link back-to-selection" to="/">Back To Selection</Link> 
                <h1 className='heading'>Login</h1>
                <div>
                    <div className="form-row">
                        <input ref={username} className='input-text' type="text" name="username" placeholder='Username'/>
                    </div>
                    <div className="form-row">
                        <input ref={password} className='input-text' type="password" name="password" placeholder='Password'/>
                    </div>
                    <div className="form-row">
                        <button onClick={() => Authenticate()} className='submit'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin;