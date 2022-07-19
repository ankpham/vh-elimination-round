import React, {useState, useRef, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';

const SelectCategoryAndPoints = () => {

    const {grade} = useParams();

    const pointsContainer = useRef(null);
    const categoryContainer = useRef(null);

    const [points, setPoints] = useState(1);
    const [category, setCategory] = useState(1);

    const [prevPoints, setPrevPoints] = useState(1);
    const [prevCategory, setPrevCategory] = useState(1);

    const setActive = (func, int) => {
    
        if (func === "points") {
            if (prevPoints !== null) {
                pointsContainer.current.children[prevPoints-1].classList = "select";
            }
            setPrevPoints(int);
            setPoints(int)
            pointsContainer.current.children[int-1].classList = "select active";
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
        if (points === 1) {
            pointsContainer.current.children[0].classList = "select active";
        }
        else {
            pointsContainer.current.children[0].classList = "select";
        }
        if (category === 1) {
            categoryContainer.current.children[0].classList = "select active";
        }
        else {
            categoryContainer.current.children[0].classList = "select";
        }

    }, [points, category, pointsContainer, categoryContainer])

    return (
        <>
        <div className="selection">
            <div className="container">
                <h1 className='heading'>Selection</h1>
                <div className='selection-container'>
                    <div ref={categoryContainer} className="category">
                        <span className="select" onClick={() => setActive("category", 1)}>Category 1</span>
                        <span className="select" onClick={() => setActive("category", 2)}>Category 2</span>
                        <span className="select" onClick={() => setActive("category", 3)}>Category 3</span>
                        <span className="select" onClick={() => setActive("category", 4)}>Category 4</span>
                        <span className="select" onClick={() => setActive("category", 5)}>Category 5</span>
                    </div>
                    <div ref={pointsContainer} className="points">
                        <span className="select" onClick={() => setActive("points", 1)}>10</span>
                        <span className="select" onClick={() => setActive("points", 2)}>20</span>
                        <span className="select" onClick={() => setActive("points", 3)}>30</span>
                        <span className="select" onClick={() => setActive("points", 4)}>40</span>
                        <span className="select" onClick={() => setActive("points", 5)}>50</span>
                    </div>
                </div>
                <Link className="link to-view-question" to={"/view-question/" + grade + "/" + category + "/" + points}>View Question</Link>
            </div>
        </div>
        </>
    )
}

export default SelectCategoryAndPoints;