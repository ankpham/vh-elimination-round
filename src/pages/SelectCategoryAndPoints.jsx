import React, {useRef, useEffect, useState, useMemo} from 'react';
import usedQuestions from '../database/used-questions.json';
import {Link, useParams} from 'react-router-dom';

const SelectCategoryAndPoints = () => {
    const heading = useRef();
    const categoryElement = useRef();

    const {grade} = useParams();

    const [headingText, setHeadingText] = useState(null);

    let gradeMapping = useMemo(() => 
        new Map([
            ["mg", "background-yellow"], ["vl", "background-orange"], ["1", "background-red"], 
            ["2", "background-darkred"], ["3", "background-purple"], ["4", "background-navy"], 
            ["5", "background-lightblue"], ["6", "background-cyan"], ["7", "background-green"]
        ])
    , [])

    useEffect(() => {
        if (grade === "mg") {
            setHeadingText("Lớp MG")
        }
        else if (grade === "vl") {
            setHeadingText("Lớp VL")
        }
        else {
            setHeadingText("Lớp " + (grade))
        }

        heading.current.classList.add(gradeMapping.get(grade))
        
        let data;
        switch(grade) {
            case 'mg': data = usedQuestions.mg 
            break;
            case 'vl': data = usedQuestions.vl
            break;
            case '1': data = usedQuestions.g1
            break;
            case '2': data = usedQuestions.g2
            break;
            case '3': data = usedQuestions.g3
            break;
            case '4': data = usedQuestions.g4
            break;
            case '5': data = usedQuestions.g5
            break;
            case '6': data = usedQuestions.g6
            break;
            case '7': data = usedQuestions.g7
            break;
            default: console.log("broken")
        }

        for (let i = 0;i<data.length;i++) {
            for (let a = 0;a<data[i].length;a++) {
                console.log('bob' + data[i][a])
                categoryElement.current.childNodes[i].childNodes[data[i][a]].classList.add('selection-used');
            }
        }

    }, [grade, heading, gradeMapping])

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
        <div className="selection">
            <div className="container category">
                <Link className="link back-to-selection" to={"/select-grade/"}>Trở Về Trang Đầu</Link> 
                <h1 ref={heading} className='heading'>{headingText}</h1>
                <div className='selection-container-category-points'>
                    <div ref={categoryElement} className="category">
                        <div className='column'>
                            <span className="select border-yellow">Category 1</span>
                            <Link onClick={() => newUsedQuestion(1,1)} to={"/view-question/" + grade + "/1/10"} className="select border-yellow">10</Link>
                            <Link onClick={() => newUsedQuestion(1,2)} to={"/view-question/" + grade + "/1/20"} className="select border-yellow">20</Link>
                            <Link onClick={() => newUsedQuestion(1,3)} to={"/view-question/" + grade + "/1/30"} className="select border-yellow">30</Link>
                            <Link onClick={() => newUsedQuestion(1,4)} to={"/view-question/" + grade + "/1/40"} className="select border-yellow">40</Link>
                            <Link onClick={() => newUsedQuestion(1,5)} to={"/view-question/" + grade + "/1/50"} className="select border-yellow">50</Link>
                        </div>
                        <div className='column'>
                            <span className="select border-red">Category 2</span>
                            <Link onClick={() => newUsedQuestion(2,1)} to={"/view-question/" + grade + "/2/10"} className="select border-red">10</Link>
                            <Link onClick={() => newUsedQuestion(2,2)} to={"/view-question/" + grade + "/2/20"} className="select border-red">20</Link>
                            <Link onClick={() => newUsedQuestion(2,3)} to={"/view-question/" + grade + "/2/30"} className="select border-red">30</Link>
                            <Link onClick={() => newUsedQuestion(2,4)} to={"/view-question/" + grade + "/2/40"} className="select border-red">40</Link>
                            <Link onClick={() => newUsedQuestion(2,5)} to={"/view-question/" + grade + "/2/50"} className="select border-red">50</Link>
                        </div>
                        <div className='column'>
                            <span className="select border-green">Category 3</span>
                            <Link onClick={() => newUsedQuestion(3,1)} to={"/view-question/" + grade + "/3/10"} className="select border-green">10</Link>
                            <Link onClick={() => newUsedQuestion(3,2)} to={"/view-question/" + grade + "/3/20"} className="select border-green">20</Link>
                            <Link onClick={() => newUsedQuestion(3,3)} to={"/view-question/" + grade + "/3/30"} className="select border-green">30</Link>
                            <Link onClick={() => newUsedQuestion(3,4)} to={"/view-question/" + grade + "/3/40"} className="select border-green">40</Link>
                            <Link onClick={() => newUsedQuestion(3,5)} to={"/view-question/" + grade + "/3/50"} className="select border-green">50</Link>
                        </div>
                        <div className='column'>
                            <span className="select border-orange">Category 4</span>
                            <Link onClick={() => newUsedQuestion(4,1)} to={"/view-question/" + grade + "/4/10"} className="select border-orange">10</Link>
                            <Link onClick={() => newUsedQuestion(4,2)} to={"/view-question/" + grade + "/4/20"} className="select border-orange">20</Link>
                            <Link onClick={() => newUsedQuestion(4,3)} to={"/view-question/" + grade + "/4/30"} className="select border-orange">30</Link>
                            <Link onClick={() => newUsedQuestion(4,4)} to={"/view-question/" + grade + "/4/40"} className="select border-orange">40</Link>
                            <Link onClick={() => newUsedQuestion(4,5)} to={"/view-question/" + grade + "/4/50"} className="select border-orange">50</Link>
                        </div>
                        <div className='column'>
                            <span className="select border-cyan">Category 5</span>
                            <Link onClick={() => newUsedQuestion(5,1)} to={"/view-question/" + grade + "/5/10"} className="select border-cyan">10</Link>
                            <Link onClick={() => newUsedQuestion(5,2)} to={"/view-question/" + grade + "/5/20"} className="select border-cyan">20</Link>
                            <Link onClick={() => newUsedQuestion(5,3)} to={"/view-question/" + grade + "/5/30"} className="select border-cyan">30</Link>
                            <Link onClick={() => newUsedQuestion(5,4)} to={"/view-question/" + grade + "/5/40"} className="select border-cyan">40</Link>
                            <Link onClick={() => newUsedQuestion(5,5)} to={"/view-question/" + grade + "/5/50"} className="select border-cyan">50</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SelectCategoryAndPoints;