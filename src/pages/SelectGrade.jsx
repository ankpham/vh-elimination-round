import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';


const SelectGrade = () => {

    const gradeContainer = useRef(null);

    const [grade, setGrade] = useState(0);

    const [prevGrade, setPrevGrade] = useState(0);

    const setActive = (func, int) => {
    
        if (func === "grade") {
            if (prevGrade !== null) {
                gradeContainer.current.children[prevGrade].classList.remove("active");
            }
            setPrevGrade(int);
            setGrade(int)
            gradeContainer.current.children[int].classList.add("active");
        }
    }

    useEffect(() => {
        if (grade === 0) {
            gradeContainer.current.children[0].classList.add("active");
        }
        else {
            gradeContainer.current.children[0].classList.remove("active");
        }

    }, [grade, gradeContainer])

    return (
        <>
        <div className="selection">
            <div className="container">
                <nav className='header'/>
                <nav className='header'/>
                <div className='selection-container-grade'>
                    <div ref={gradeContainer} className="grade">
                        <span className="select background-yellow" onClick={() => setActive("grade", 0)}>Lớp MG</span>
                        <span className="select background-orange" onClick={() => setActive("grade", 1)}>Lớp VL</span>
                        <span className="select background-red" onClick={() => setActive("grade", 2)}>Lớp 1</span>
                        <span className="select background-darkred" onClick={() => setActive("grade", 3)}>Lớp 2</span>
                        <span className="select background-purple" onClick={() => setActive("grade", 4)}>Lớp 3</span>
                        <span className="select background-navy" onClick={() => setActive("grade", 5)}>Lớp 4</span>
                        <span className="select background-lightblue" onClick={() => setActive("grade", 6)}>Lớp 5</span>
                        <span className="select background-cyan" onClick={() => setActive("grade", 7)}>Lớp 6</span>
                        <span className="select background-green" onClick={() => setActive("grade", 8)}>Lớp 7</span>
                    </div>
                </div>
                <Link className="link next" to={"/select-category-and-points/" + grade}>
                    &#10132;
                </Link>
            </div>
        </div>
        </>
    )
}

export default SelectGrade;