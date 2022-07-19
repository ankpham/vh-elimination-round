import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <div className='container'>
                <h1 className='heading'>Niên Học 2022-23</h1>
                <h1 className='sub-heading'>Vòng Loại</h1>
                <Link className="start-link link" to="/select-grade">Bắt Đầu</Link>
            </div>
            <Link className="link admin" to="/admin-login">Admin</Link> 
        </div>
    )
}

export default Home;