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
            ["5", "background-lightblue"], ["6", "background-cyan"], ["7", "background-green"]
        ])
    , [])

    useEffect(() => {
        setHeadingText("Lớp " + (grade))

        heading.current.classList.add(gradeMapping.get(grade))

        //remove used questions
        let data;
        switch(grade) {
            case '5': data = usedQuestions.g5
            break;
            case '6': data = usedQuestions.g6
            break;
            case '7': data = usedQuestions.g7
            break;
            default: console.log("broken")
        }
        console.log(grade)
        for (let i = 0;i<data.length;i++) {
            for (let a = 0;a<data[i].length;a++) {
                console.log('bob' + data[i][a])
                categoryElement.current.childNodes[i].firstElementChild.childNodes[data[i][a]].classList.add('selection-used');
            }
        }
    }, [grade, heading, gradeMapping])

    //adds used questions
    function newUsedQuestion(category, points) {
        switch(grade) {
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
                <Link className="link back-to-selection-right" to={"/select-grade/"}>Trở Về Trang Đầu</Link> 
                <h1 ref={heading} className='heading'>{headingText}</h1>
                <div className='selection-container-category-points-567'>
                    <div ref={categoryElement} className="category">
                        <div className="column-container">
                            <div className='column'>
                                <div className='select-heading-container select background-red border-red'>
                                    <span>Tết Nguyên Đán (1)</span>
                                </div>
                                <Link onClick={() => newUsedQuestion(1,1)} to={"/view-question-567/" + grade + "/1-1/10"} className="select border-red">10</Link>
                                <Link onClick={() => newUsedQuestion(1,2)} to={"/view-question-567/" + grade + "/1-1/20"} className="select border-red">20</Link>
                                <Link onClick={() => newUsedQuestion(1,3)} to={"/view-question-567/" + grade + "/1-1/30"} className="select border-red">30</Link>
                                <Link onClick={() => newUsedQuestion(1,4)} to={"/view-question-567/" + grade + "/1-1/40"} className="select border-red">40</Link>
                                <Link onClick={() => newUsedQuestion(1,5)} to={"/view-question-567/" + grade + "/1-1/50"} className="select border-red">50</Link>
                            </div>
                        </div>
                        <div className="column-container">
                            <div className='column'>
                                <div className='select-heading-container select background-red border-red'>
                                    <span>Tết Nguyên Đán (2)</span>
                                </div>
                                <Link onClick={() => newUsedQuestion(2,1)} to={"/view-question-567/" + grade + "/1-2/10"} className="select border-red">10</Link>
                                <Link onClick={() => newUsedQuestion(2,2)} to={"/view-question-567/" + grade + "/1-2/20"} className="select border-red">20</Link>
                                <Link onClick={() => newUsedQuestion(2,3)} to={"/view-question-567/" + grade + "/1-2/30"} className="select border-red">30</Link>
                                <Link onClick={() => newUsedQuestion(2,4)} to={"/view-question-567/" + grade + "/1-2/40"} className="select border-red">40</Link>
                                <Link onClick={() => newUsedQuestion(2,5)} to={"/view-question-567/" + grade + "/1-2/50"} className="select border-red">50</Link>
                            </div>
                        </div>
                        <div className="column-container">
                            <div className='column'>
                                <div className='select-heading-container select background-red border-red'>
                                    <span>Tết Nguyên Đán (3)</span>
                                </div>
                                <Link onClick={() => newUsedQuestion(3,1)} to={"/view-question-567/" + grade + "/1-3/10"} className="select border-red">10</Link>
                                <Link onClick={() => newUsedQuestion(3,2)} to={"/view-question-567/" + grade + "/1-3/20"} className="select border-red">20</Link>
                                <Link onClick={() => newUsedQuestion(3,3)} to={"/view-question-567/" + grade + "/1-3/30"} className="select border-red">30</Link>
                                <Link onClick={() => newUsedQuestion(3,4)} to={"/view-question-567/" + grade + "/1-3/40"} className="select border-red">40</Link>
                                <Link onClick={() => newUsedQuestion(3,5)} to={"/view-question-567/" + grade + "/1-3/50"} className="select border-red">50</Link>
                            </div>
                        </div>
                        <div className="column-container">
                            <div className='column'>
                                <div className='select-heading-container select background-red border-red'>
                                    <span>Tết Nguyên Đán (4)</span>
                                </div>
                                <Link onClick={() => newUsedQuestion(4,1)} to={"/view-question-567/" + grade + "/1-4/10"} className="select border-red">10</Link>
                                <Link onClick={() => newUsedQuestion(4,2)} to={"/view-question-567/" + grade + "/1-4/20"} className="select border-red">20</Link>
                                <Link onClick={() => newUsedQuestion(4,3)} to={"/view-question-567/" + grade + "/1-4/30"} className="select border-red">30</Link>
                                <Link onClick={() => newUsedQuestion(4,4)} to={"/view-question-567/" + grade + "/1-4/40"} className="select border-red">40</Link>
                                <Link onClick={() => newUsedQuestion(4,5)} to={"/view-question-567/" + grade + "/1-4/50"} className="select border-red">50</Link>
                            </div>
                        </div>
                        <div className="column-container">
                            <div className='column'>
                                <div className='select-heading-container select background-yellow border-yellow'>
                                    <span>Tết Trung Thu</span>
                                </div>
                                <Link onClick={() => newUsedQuestion(5,1)} to={"/view-question-567/" + grade + "/2-1/10"} className="select border-yellow">10</Link>
                                <Link onClick={() => newUsedQuestion(5,2)} to={"/view-question-567/" + grade + "/2-1/20"} className="select border-yellow">20</Link>
                                <Link onClick={() => newUsedQuestion(5,3)} to={"/view-question-567/" + grade + "/2-1/30"} className="select border-yellow">30</Link>
                                <Link onClick={() => newUsedQuestion(5,4)} to={"/view-question-567/" + grade + "/2-1/40"} className="select border-yellow">40</Link>
                            </div>
                        </div>
                        <div className="column-container">
                            <div className='column'>
                                <div className='select-heading-container select background-green border-green'>
                                    <span>Lịch Sử Địa Lý</span>
                                </div>
                                <Link onClick={() => newUsedQuestion(6,1)} to={"/view-question-567/" + grade + "/3-1/10"} className="select border-green">10</Link>
                                <Link onClick={() => newUsedQuestion(6,2)} to={"/view-question-567/" + grade + "/3-1/20"} className="select border-green">20</Link>
                                <Link onClick={() => newUsedQuestion(6,3)} to={"/view-question-567/" + grade + "/3-1/30"} className="select border-green">30</Link>
                                <Link onClick={() => newUsedQuestion(6,4)} to={"/view-question-567/" + grade + "/3-1/40"} className="select border-green">40</Link>
                                <Link onClick={() => newUsedQuestion(6,5)} to={"/view-question-567/" + grade + "/3-1/50"} className="select border-green">50</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SelectCategoryAndPoints;