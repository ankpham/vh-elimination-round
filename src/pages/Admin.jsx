import React, { useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import localData from '../database/questions.json';
import Question from '../components/QuestionList';

const Admin = () => {
    const roundInput = useRef(null);
    const gradeInput = useRef(null);
    const categoryInput = useRef(null);
    const pointsInput = useRef(null);
    const questionList = useRef(null);

    const [questions, setData] = useState(localData);

    const user = "089e-weni-098w";
    const pass = "0842-0983-ibjw-2q9w";

    let url = "http://localhost:8080/get/questions/all";

    const updateText = (path) => {
        axios.get(path,
            {auth: { username: user, password: pass}})
            .then((response) => {
                setData(response.data);

        })
    }

    const filter = () => {        
        axios.get(url,
            {auth: { username: user, password: pass}})
            .then((response) => {
                let arr = response.data;
                let newArr = [];
                let round = false;
                let grade = false;
                let category = false;
                let points = false;
        
                roundInput.current.value !== "0" ? round = true : round = false;
                gradeInput.current.value !== "0" ? grade = true : grade = false;
                categoryInput.current.value !== "0" ? category = true : category = false;
                pointsInput.current.value !== "0" ? points = true : points = false;
        
                for (let i = 0;i<arr.length;i++) {
                    if (
                        (round === true ? roundInput.current.value === arr[i].round : true) &&
                        (grade === true ? gradeInput.current.value === arr[i].grade : true) &&
                        (category === true ? categoryInput.current.value === arr[i].category : true) &&
                        (points === true ? pointsInput.current.value === arr[i].points : true)
                    )
                    {
                        newArr.push(arr[i]);
                    }
                }
                
                setData(newArr);
        })


    }

    useEffect(() => {
        updateText(url);
    }, [url])

    return (
        <>
        <div className="admin">
            <div className="container">
                <Link className="link back-to-selection" to="/">Back</Link> 
                <h1 className='heading'>Admin</h1>
                <div className="admin-container">
                    <div className="menu-bar">
                        <p>Filter By: </p>
                        <label htmlFor="round">Round:</label>
                        <select ref={roundInput} onChange={() => filter()} name="round">
                            <option value="0">None</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <label htmlFor="grade">Grade:</label>
                        <select ref={gradeInput} onChange={() => filter()} name="grade">
                            <option value="0">None</option>
                            <option value="mg">MG</option>
                            <option value="vl">VL</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>
                        <label htmlFor="category">Category:</label>
                        <select ref={categoryInput} onChange={() => filter()} name="category">
                            <option value="0">None</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <label htmlFor="points">Points:</label>
                        <select ref={pointsInput} onChange={() => filter()} name="points">
                            <option value="0">None</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="50">50</option>
                        </select>
                    </div>
                    <div ref={questionList} className="question-list">
                        <Question data={questions}/>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Admin;