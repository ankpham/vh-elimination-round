import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import localData from '../database/questions.json';
import Question from '../components/Question';

const Admin = () => {
    const [question, setData] = useState(localData);

    useEffect(() => {
        axios.get("http://localhost:8080/get/questions/all").then((response) => {
            setData(response.data)
            console.log(response.data)
        })
    }, [])

    return (
        <>
        <div className="admin">
            <div className="container">
                <Link className="link back-to-selection" to="/">Back To Selection</Link> 
                <h1 className='heading'>Admin</h1>
                <div className="admin-container">
                    <form className="add-question">
                        <h1 className='sub-heading'>Add a Question</h1>
                        <div className="form-row">
                            <textarea className='input-text input-question' name="question" placeholder='question'rows="2" cols="25"/>
                        </div>
                        <div className="form-row">
                            <input className='input-text' type="text" name="level" placeholder='level'/>
                            <input className='input-text' type="text" name="category" placeholder='category'/>
                        </div>
                        <div className="form-row">
                            <input type="submit"/>
                        </div>
                    </form>
                    <div className="question-list">
                        <Question data={question}/>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Admin;