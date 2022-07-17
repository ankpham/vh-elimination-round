import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';

const EliminationRound = () => {

    const levelContainer = useRef(null);
    const categoryContainer = useRef(null);

    const [level, setLevel] = useState(0);
    const [category, setCategory] = useState(1);

    const [prevLevel, setPrevLevel] = useState(0);
    const [prevCategory, setPrevCategory] = useState(1);

    const setActive = (func, int) => {
    
        if (func === "grade") {
            if (prevLevel !== null) {
                levelContainer.current.children[prevLevel].classList = "select";
            }
            setPrevLevel(int);
            setLevel(int)
            levelContainer.current.children[int].classList = "select active";
        }
        else {
            if (prevCategory !== null) {
                categoryContainer.current.children[prevCategory-1].classList = "select";
            }
            setPrevCategory(int);
            setCategory(int)
            categoryContainer.current.children[int-1].classList = "select active";
        }

    }

    useEffect(() => {
        if (level === 0) {
            levelContainer.current.children[0].classList = "select active";
        }
        else {
            levelContainer.current.children[0].classList = "select";
        }
        if (category === 1) {
            categoryContainer.current.children[0].classList = "select active";
        }
        else {
            categoryContainer.current.children[0].classList = "select";
        }

    }, [level, category, levelContainer])

    return (
        <>
        <div className="elimination-round">
            <div className="container">
                <h1 className='heading'>Selection</h1>
                <div className='selection-container'>
                    <div ref={levelContainer} className="grade">
                        <span className="select" onClick={() => setActive("grade", 0)}>Lớp MG</span>
                        <span className="select" onClick={() => setActive("grade", 1)}>Lớp 1</span>
                        <span className="select" onClick={() => setActive("grade", 2)}>Lớp 2</span>
                        <span className="select" onClick={() => setActive("grade", 3)}>Lớp 3</span>
                        <span className="select" onClick={() => setActive("grade", 4)}>Lớp 4</span>
                        <span className="select" onClick={() => setActive("grade", 5)}>Lớp 5</span>
                        <span className="select" onClick={() => setActive("grade", 6)}>Lớp 6</span>
                        <span className="select" onClick={() => setActive("grade", 7)}>Lớp 7</span>
                        <span className="select" onClick={() => setActive("grade", 8)}>Lớp 8</span>
                    </div>
                    <div ref={categoryContainer} className="category">
                        <span className="select" onClick={() => setActive("category", 1)}>Category 1</span>
                        <span className="select" onClick={() => setActive("category", 2)}>Category 2</span>
                        <span className="select" onClick={() => setActive("category", 3)}>Category 3</span>
                        <span className="select" onClick={() => setActive("category", 4)}>Category 4</span>
                        <span className="select" onClick={() => setActive("category", 5)}>Category 5</span>
                    </div>
                </div>
                <Link className="link to-view-question" to={"/view-question/" + level + "/" + category}>View Question</Link>
            </div>
            <Link className="link admin" to="/admin-login">Admin</Link> 
        </div>
        </>
    )
}

export default EliminationRound;