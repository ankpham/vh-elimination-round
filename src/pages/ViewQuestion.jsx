import React from 'react';
import { useParams, Link } from "react-router-dom";

const ViewQuestion = () => {

    const { grade, category } = useParams();

    return (
        <>
        <div className='view-question'> 
            <div className='container'>
                <Link className="link back-to-selection" to="/">Back To Selection</Link> 
                <div className='question'>
                    <div className='question-row'>
                        <h5>Grade {grade}</h5>
                        <h5>Category {category}</h5>
                        <h1 className='question-heading'>This is a question</h1>
                    </div>
                    <ul className="choices">
                        <li>Choice 1</li>
                        <li>Choice 2</li>
                        <li>Choice 3</li>
                    </ul>
                </div>

            </div>
        </div>
        </>
    )
}

export default ViewQuestion;