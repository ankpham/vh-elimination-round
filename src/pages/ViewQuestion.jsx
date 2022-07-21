import React from 'react';
import { useParams, Link } from "react-router-dom";

const ViewQuestion = () => {

    const { grade, category, points } = useParams();

    let convertedGrade = 0;

    if (grade === "0") {
        convertedGrade = "MG"
    }
    else if (grade === "1") {
        convertedGrade = "VL"
    }
    else {
        convertedGrade = (parseInt(grade) - 1).toString()
    }

    return (
        <>
        <div className='view-question'> 
            <div id="container" className='container'>
                <Link className="link back-to-selection" to="/select-grade">Back To Selection</Link> 
                <div className='question'>
                    <div className='question-row'>
                        <h5>Lớp {convertedGrade}</h5>
                        <h5>Category {category}</h5>
                        <h5>{points} Points</h5>
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