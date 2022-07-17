import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <div className='container'>
                <Link className="start-link link" to="/elimination-round">Start Elimination Round</Link>
            </div>
        </div>
    )
}

export default Home;