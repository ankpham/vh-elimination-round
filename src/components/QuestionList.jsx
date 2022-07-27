import React from 'react';

const Question = (props) => {
    return (
        <>
        {props.data.map((question,index) => {
            return (
                <div className="question" key={index}>
                    <p>Round: {question.round}</p>
                    <p>Grade: {question.grade === 0 ? 'MG' : question.grade}</p>
                    <p>Category: {question.category}</p>
                    <p>Question: {question.question}</p>
                    <p>Type: {question.type}</p>
                    <p>Correct Choice: {question.correctChoice}</p>
                    {question.otherChoices.map((choices, idx) => {
                        return (
                            <div key={idx}>
                                <p>Answer Choice: {choices}</p>
                            </div>
                        )
                    })}
                </div>
            )
        })}
        </>
    )
}

export default Question;