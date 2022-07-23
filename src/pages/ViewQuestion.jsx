import React from 'react';
import {TbLetterA, TbLetterB, TbLetterC} from 'react-icons/tb';
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
                        <div hidden>
                            <h5>Lớp {convertedGrade}</h5>
                            <h5>Category {category}</h5>
                            <h5>{points} Points</h5>
                        </div>
                        <h1 className='question-heading'>This is a question</h1>
                    </div>
                    <ul className="choices">
                        <div className='choice-container'>
                            <TbLetterA className='letter-icon'/><li className='border-yellow'>Choice 1</li>
                        </div>
                        <div className='choice-container'>
                            <TbLetterB className='letter-icon'/><li className='border-yellow'>Choice 2</li>
                        </div>
                        <div className='choice-container'>
                            <TbLetterC className='letter-icon'/><li className='border-yellow'>Choice 3</li>
                        </div>
                    </ul>
                </div>

            </div>
        </div>
        </>
    )
}

export default ViewQuestion;