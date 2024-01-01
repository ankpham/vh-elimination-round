import React, {useRef, useEffect, useState, useMemo} from 'react';
import usedQuestions from '../database/used-questions.json';
import {Link, useParams} from 'react-router-dom';

const SelectCategoryAndPoints = () => {
    const heading = useRef();
    const categoryElement = useRef();
    const optQuestion1 = useRef();
    const optQuestion2 = useRef();
    const optQuestion3 = useRef();
    const optQuestion4 = useRef();
    const optCategory = useRef(null);

    const {grade} = useParams();

    const [headingText, setHeadingText] = useState(null);

    let gradeMapping = useMemo(() => 
        new Map([
            ["mg", "background-yellow"], ["vl", "background-orange"], ["1", "background-red"], 
            ["2", "background-pink"], ["3", "background-orchid"], ["4", "background-purple"], 
            ["5", "background-lightblue"], ["6", "background-cyan"], ["7", "background-green"]
        ])
    , [])

    useEffect(() => {
        if (grade === "mg") {
            setHeadingText("Lớp Mẫu Giáo")
        }
        else if (grade === "vl") {
            setHeadingText("Lớp Vỡ Lòng")
        }
        else {
            setHeadingText("Lớp " + (grade))
        }

        heading.current.classList.add(gradeMapping.get(grade))
        
        //removes categories/points depending on grades
        if (grade === "mg" || grade === "vl" || grade === "1") {
            optCategory.current.remove();
        }
        else {
            optQuestion1.current.remove();
            optQuestion2.current.remove();
            optQuestion3.current.remove();
            optQuestion4.current.remove();
        }

        //remove used questions
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
                <Link className="link back-to-selection-right" to={"/select-grade/"}>Trở Về Trang Đầu</Link> 
                <h1 ref={heading} className='heading'>{headingText}</h1>
                <div className='selection-container-category-points'>
                    <div ref={categoryElement} className="category">
                        <div className="column-container">
                            <div className='column'>
                                <div className='select-heading-container select background-orchid border-orchid'>
                                    <span>Gia Đình</span>
                                </div>
                                <Link onClick={() => newUsedQuestion(1,1)} to={"/view-question/" + grade + "/1/10"} className="select border-orchid">10</Link>
                                <Link onClick={() => newUsedQuestion(1,2)} to={"/view-question/" + grade + "/1/20"} className="select border-orchid">20</Link>
                                <Link onClick={() => newUsedQuestion(1,3)} to={"/view-question/" + grade + "/1/30"} className="select border-orchid">30</Link>
                                <Link onClick={() => newUsedQuestion(1,4)} to={"/view-question/" + grade + "/1/40"} className="select border-orchid">40</Link>
                                <Link onClick={() => newUsedQuestion(1,5)} to={"/view-question/" + grade + "/1/50"} className="select border-orchid">50</Link>
                                <Link ref={optQuestion1} onClick={() => newUsedQuestion(1,6)} to={"/view-question/" + grade + "/1/60"} className="select border-orchid">60</Link>
                            </div>
                        </div>
                        <div className="column-container">
                            <div className='column'>
                                <div className='select-heading-container select background-lightblue border-lightblue'>
                                    <span>Ngữ Vựng Chính Tả</span>
                                </div>
                                <Link onClick={() => newUsedQuestion(2,1)} to={"/view-question/" + grade + "/2/10"} className="select border-lightblue">10</Link>
                                <Link onClick={() => newUsedQuestion(2,2)} to={"/view-question/" + grade + "/2/20"} className="select border-lightblue">20</Link>
                                <Link onClick={() => newUsedQuestion(2,3)} to={"/view-question/" + grade + "/2/30"} className="select border-lightblue">30</Link>
                                <Link onClick={() => newUsedQuestion(2,4)} to={"/view-question/" + grade + "/2/40"} className="select border-lightblue">40</Link>
                                <Link onClick={() => newUsedQuestion(2,5)} to={"/view-question/" + grade + "/2/50"} className="select border-lightblue">50</Link>
                                <Link ref={optQuestion2} onClick={() => newUsedQuestion(2,6)} to={"/view-question/" + grade + "/2/60"} className="select border-lightblue">60</Link>
                            </div>
                        </div>
                        <div className="column-container">
                            <div className='column'>
                                <div className='select-heading-container select background-yellow border-yellow'>
                                    <span>Món Ăn</span>
                                </div>
                                <Link onClick={() => newUsedQuestion(3,1)} to={"/view-question/" + grade + "/3/10"} className="select border-yellow">10</Link>
                                <Link onClick={() => newUsedQuestion(3,2)} to={"/view-question/" + grade + "/3/20"} className="select border-yellow">20</Link>
                                <Link onClick={() => newUsedQuestion(3,3)} to={"/view-question/" + grade + "/3/30"} className="select border-yellow">30</Link>
                                <Link onClick={() => newUsedQuestion(3,4)} to={"/view-question/" + grade + "/3/40"} className="select border-yellow">40</Link>
                                <Link onClick={() => newUsedQuestion(3,5)} to={"/view-question/" + grade + "/3/50"} className="select border-yellow">50</Link>
                                <Link ref={optQuestion3} onClick={() => newUsedQuestion(3,6)} to={"/view-question/" + grade + "/3/60"} className="select border-yellow">60</Link>
                            </div>
                        </div>
                        <div className="column-container">
                            <div className='column'>
                                <div className='select-heading-container select background-red border-red'>
                                    <span>Phong Tục Tập Quán</span>
                                </div>
                                <Link onClick={() => newUsedQuestion(4,1)} to={"/view-question/" + grade + "/4/10"} className="select border-red">10</Link>
                                <Link onClick={() => newUsedQuestion(4,2)} to={"/view-question/" + grade + "/4/20"} className="select border-red">20</Link>
                                <Link onClick={() => newUsedQuestion(4,3)} to={"/view-question/" + grade + "/4/30"} className="select border-red">30</Link>
                                <Link onClick={() => newUsedQuestion(4,4)} to={"/view-question/" + grade + "/4/40"} className="select border-red">40</Link>
                                <Link onClick={() => newUsedQuestion(4,5)} to={"/view-question/" + grade + "/4/50"} className="select border-red">50</Link>
                                <Link ref={optQuestion4} onClick={() => newUsedQuestion(4,6)} to={"/view-question/" + grade + "/4/60"} className="select border-red">60</Link>
                            </div>
                        </div>
                        <div ref={optCategory} className="column-container">
                            <div className='column'>
                                <div className='select-heading-container select background-green border-green'>
                                    <span>Lịch Sử Địa Lý</span>
                                </div>
                                <Link onClick={() => newUsedQuestion(5,1)} to={"/view-question/" + grade + "/5/10"} className="select border-green">10</Link>
                                <Link onClick={() => newUsedQuestion(5,2)} to={"/view-question/" + grade + "/5/20"} className="select border-green">20</Link>
                                <Link onClick={() => newUsedQuestion(5,3)} to={"/view-question/" + grade + "/5/30"} className="select border-green">30</Link>
                                <Link onClick={() => newUsedQuestion(5,4)} to={"/view-question/" + grade + "/5/40"} className="select border-green">40</Link>
                                <Link onClick={() => newUsedQuestion(5,5)} to={"/view-question/" + grade + "/5/50"} className="select border-green">50</Link>
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