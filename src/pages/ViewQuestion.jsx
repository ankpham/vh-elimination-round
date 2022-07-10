import React from 'react';
import { useParams, Link } from "react-router-dom";

const ViewQuestion = () => {

    const { level, category } = useParams();

    return (
        <>
        <div className='view-question'> 
            <div className='container'>
                <Link className="link back-to-selection" to="/">Back To Selection</Link> 
                <h1 className='heading'>Question</h1>
                <h5>Level {level}</h5>
                <h5>Category {category}</h5>
            </div>
        </div>
        </>
    )
}

export default ViewQuestion;