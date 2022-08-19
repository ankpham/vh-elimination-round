import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react';
import party from 'party-js';
import Timer from './Timer';
import {TbLetterA, TbLetterB, TbLetterC} from 'react-icons/tb';
import { useParams, Link } from "react-router-dom";
import ding from '../assets/Em Vui Em Học - Correct Answer - 1s.mp3';
import buzzer from '../assets/Em Vui Em Học - Wrong Answer Buzzer - 2s.mp3';

const ViewQuestion = () => {
    const [question, setQuestion] = useState('no question');
    const [choice1, setChoice1] = useState('no choice');
    const [choice2, setChoice2] = useState('no choice');
    const [choice3, setChoice3] = useState('no choice');

    const { grade, category, points } = useParams();

    //Confetti Effect=
    const confetti = useRef(null);

    const setConfetti = () => {
        party.confetti(confetti.current, {
            count: party.variation.range(100, 200),
            size: party.variation.range(2, 2.5),
            spread: party.variation.range(80, 160)
        });
    }

    const user = "089e-weni-098w";
    const pass = "0842-0983-ibjw-2q9w";

    useEffect(()=>{
        axios.get('http://localhost:8080/get/question/round/1/category/' + category + 
        '/grade/' + grade + '/points/' + points, {auth: { username: user, password: pass}}
        ).then((response) => {
            console.log(response.data.id)
            setQuestion(response.data.question);
            let arr = [response.data.correctChoice,response.data.otherChoices[0],response.data.otherChoices[1]]

            setChoice1(arr[0]);
            setChoice2(arr[1]);
            setChoice3(arr[2]);
        })
    }, [category, points, grade]);

    //Sound Effect
    let dingSoundEffect = new Audio(ding);
    let buzzerSoundEffect = new Audio(buzzer);

    const playDingSound = () => {
        dingSoundEffect.play();
        dingSoundEffect = new Audio(ding)
    }

    const playBuzzerSound = () => {
        buzzerSoundEffect.play();
        buzzerSoundEffect = new Audio(buzzer)
    }

    const correctChoice = (
        <li onClickCapture={() => playDingSound()} onClick={() => setConfetti(true)} className='border-yellow'>{choice1}</li>
    )

    const otherChoice1 = (
        <li onClickCapture={() => playBuzzerSound()} className='border-yellow'>{choice2}</li>
    )

    const otherChoice2 = (
        <li onClickCapture={() => playBuzzerSound()} className='border-yellow'>{choice3}</li>
    )
    
    let arr = [correctChoice,otherChoice1,otherChoice2];

    let i = arr.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    const displayA = arr[0];
    const displayB = arr[1];
    const displayC = arr[2];
    return (
        <>
        <div className='view-question'> 
            <div id="container" className='container'>
                <Link className="link back-to-selection" to="/select-grade">Back To Selection</Link> 
                <div className='question'>
                    <div className='question-row'>
                        <div hidden>
                            <h5>Lớp {grade}</h5>
                            <h5>Category {category}</h5>
                            <h5>{points} Points</h5>
                        </div>
                        <div className='timer'>
                            <Timer/>
                        </div>
                        <h1 ref={confetti} className='question-heading'>{question}</h1>
                    </div>
                    <ul className="choices">
                        <div className='choice-container'>
                            <TbLetterA className='letter-icon'/>{displayA}
                        </div>
                        <div className='choice-container'>
                            <TbLetterB className='letter-icon'/>{displayB}
                        </div>
                        <div className='choice-container'>
                            <TbLetterC className='letter-icon'/>{displayC}
                        </div>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default ViewQuestion;