import React from 'react';
import { Link, useParams } from 'react-router-dom';
import usedQuestions from '../database/used-questions.json';

const OptCategory = () => {
    const {grade} = useParams();

    function newUsedQuestion(category, points) {
        switch(grade) {
            case 'mg': usedQuestions.mg[category-1].push(points);console.log(usedQuestions.mg[category-1]);
            break;
            case 'vl': usedQuestions.vl[category-1].push(points);console.log(usedQuestions.vl[category-1]);
            break;
            case '1': usedQuestions.g1[category-1].push(points);console.log(usedQuestions.g1[category-1]);
            break;
            case '2': usedQuestions.g2[category-1].push(points);console.log(usedQuestions.g2[category-1]);
            break;
            case '3': usedQuestions.g3[category-1].push(points);console.log(usedQuestions.g3[category-1]);
            break;
            case '4': usedQuestions.g4[category-1].push(points);console.log(usedQuestions.g4[category-1]);
            break;
            case '5': usedQuestions.g5[category-1].push(points);console.log(usedQuestions.g5[category-1]);
            break;
            case '6': usedQuestions.g6[category-1].push(points);console.log(usedQuestions.g6[category-1]);
            break;
            case '7': usedQuestions.g7[category-1].push(points);console.log(usedQuestions.g7[category-1]);
            break;
            default: console.log("broken")
        }
        console.log(usedQuestions)
    }

    return (
        <>
           <span className="select background-green border-green">Lịch Sử Địa Lý</span>
                <Link onClick={() => newUsedQuestion(5,1)} to={"/view-question/" + grade + "/5/10"} className="select border-green">10</Link>
                <Link onClick={() => newUsedQuestion(5,2)} to={"/view-question/" + grade + "/5/20"} className="select border-green">20</Link>
                <Link onClick={() => newUsedQuestion(5,3)} to={"/view-question/" + grade + "/5/30"} className="select border-green">30</Link>
                <Link onClick={() => newUsedQuestion(5,4)} to={"/view-question/" + grade + "/5/40"} className="select border-green">40</Link>
                <Link onClick={() => newUsedQuestion(5,5)} to={"/view-question/" + grade + "/5/50"} className="select border-green">50</Link>
        </>
    )
}

export default OptCategory;