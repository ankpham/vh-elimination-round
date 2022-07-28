import React, {useRef, useEffect, useState, useMemo} from 'react';
import {Link, useParams} from 'react-router-dom';

const SelectCategoryAndPoints = () => {
    const heading = useRef();

    const {grade} = useParams();

    const [headingText, setHeadingText] = useState(null);

    let gradeMapping = useMemo(() => 
        new Map([
            ["0", "background-yellow"], ["1", "background-orange"], ["2", "background-red"], 
            ["3", "background-darkred"], ["4", "background-purple"], ["5", "background-navy"], 
            ["6", "background-lightblue"], ["7", "background-cyan"], ["8", "background-green"]
        ])
    , [])

    useEffect(() => {
        if (grade === "0") {
            setHeadingText("Lớp MG")
        }
        else if (grade === "1") {
            setHeadingText("Lớp VL")
        }
        else {
            setHeadingText("Lớp " + (grade-1))
        }

        heading.current.classList.add(gradeMapping.get(grade))
        
    }, [grade, heading, gradeMapping])

    return (
        <>
        <div className="selection">
            <div className="container">
                <h1 ref={heading} className='heading'>{headingText}</h1>
                <div className='selection-container-category-points'>
                    <div className="category">
                        <div className='column'>
                            <span className="select border-yellow">Category 1</span>
                            <Link to={"/view-question/" + grade + "/1/10"} className="select border-yellow">10</Link>
                            <Link to={"/view-question/" + grade + "/1/20"} className="select border-yellow">20</Link>
                            <Link to={"/view-question/" + grade + "/1/30"} className="select border-yellow">30</Link>
                            <Link to={"/view-question/" + grade + "/1/40"} className="select border-yellow">40</Link>
                            <Link to={"/view-question/" + grade + "/1/50"} className="select border-yellow">50</Link>
                        </div>
                        <div className='column'>
                            <span className="select border-red">Category 2</span>
                            <Link to={"/view-question/" + grade + "/2/10"} className="select border-red">10</Link>
                            <Link to={"/view-question/" + grade + "/2/20"} className="select border-red">20</Link>
                            <Link to={"/view-question/" + grade + "/2/30"} className="select border-red">30</Link>
                            <Link to={"/view-question/" + grade + "/2/40"} className="select border-red">40</Link>
                            <Link to={"/view-question/" + grade + "/2/50"} className="select border-red">50</Link>
                        </div>
                        <div className='column'>
                            <span className="select border-green">Category 3</span>
                            <Link to={"/view-question/" + grade + "/3/10"} className="select border-green">10</Link>
                            <Link to={"/view-question/" + grade + "/3/20"} className="select border-green">20</Link>
                            <Link to={"/view-question/" + grade + "/3/30"} className="select border-green">30</Link>
                            <Link to={"/view-question/" + grade + "/3/40"} className="select border-green">40</Link>
                            <Link to={"/view-question/" + grade + "/3/50"} className="select border-green">50</Link>
                        </div>
                        <div className='column'>
                            <span className="select border-orange">Category 4</span>
                            <Link to={"/view-question/" + grade + "/4/10"} className="select border-orange">10</Link>
                            <Link to={"/view-question/" + grade + "/4/20"} className="select border-orange">20</Link>
                            <Link to={"/view-question/" + grade + "/4/30"} className="select border-orange">30</Link>
                            <Link to={"/view-question/" + grade + "/4/40"} className="select border-orange">40</Link>
                            <Link to={"/view-question/" + grade + "/4/50"} className="select border-orange">50</Link>
                        </div>
                        <div className='column'>
                            <span className="select border-cyan">Category 5</span>
                            <Link to={"/view-question/" + grade + "/5/10"} className="select border-cyan">10</Link>
                            <Link to={"/view-question/" + grade + "/5/20"} className="select border-cyan">20</Link>
                            <Link to={"/view-question/" + grade + "/5/30"} className="select border-cyan">30</Link>
                            <Link to={"/view-question/" + grade + "/5/40"} className="select border-cyan">40</Link>
                            <Link to={"/view-question/" + grade + "/5/50"} className="select border-cyan">50</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SelectCategoryAndPoints;