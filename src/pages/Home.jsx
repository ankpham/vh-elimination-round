import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';

const Home = () => {

    const levelContainer = useRef(null);
    const categoryContainer = useRef(null);

    const [level, setLevel] = useState(1);
    const [category, setCategory] = useState(1);

    const [prevLevel, setPrevLevel] = useState(null);
    const [prevCategory, setPrevCategory] = useState(null);

    const setActive = (func, int) => {
    
        if (func === "level") {
            if (prevLevel !== null) {
                levelContainer.current.children[prevLevel-1].classList = "select";
            }
            setPrevLevel(int);
            setLevel(int)
            levelContainer.current.children[int-1].classList = "select active";
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
        if (level === 1) {
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
        <div className="home">
            <div className="container">
                <h1 className='heading'>Selection</h1>
                <div ref={levelContainer} className="level">
                    <span className="select" onClick={() => setActive("level", 1)}>Level 1</span>
                    <span className="select" onClick={() => setActive("level", 2)}>Level 2</span>
                    <span className="select" onClick={() => setActive("level", 3)}>Level 3</span>
                </div>
                <div ref={categoryContainer} className="category">
                    <span className="select" onClick={() => setActive("category", 1)}>Category 1</span>
                    <span className="select" onClick={() => setActive("category", 2)}>Category 2</span>
                    <span className="select" onClick={() => setActive("category", 3)}>Category 3</span>
                </div>
                <Link className="link" to={"/view-question/" + level + "/" + category}>View Question</Link>
            </div>
            <Link className="link admin" to="/admin-login">Admin</Link> 
        </div>
        </>
    )
}

export default Home;