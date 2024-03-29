import axios from 'axios';
import React, {useMemo, useState, useEffect, useRef} from 'react';
import party from 'party-js';
import Timer from './Timer';
import {TbLetterA, TbLetterB, TbLetterC} from 'react-icons/tb';
import {BsCheckLg, BsXLg} from 'react-icons/bs';
import { useParams, Link } from "react-router-dom";
import { PlayAudio } from '../components/PlayAudio';
import { RandomizeChoices } from '../components/RandomizeChoices';
import { SetChoiceAtBottom } from '../components/SetChoiceAtBottom';

const ViewQuestion567 = () => {
    const timerElementMC = useRef(null);
    const timerElementOER = useRef(null);
    const questionContainer = useRef(null);
    const questionElement = useRef(null);
    const correctElement = useRef(null);
    const wrongElement1 = useRef(null);
    const wrongElement2 = useRef(null);
    const correctContainer = useRef(null);
    const wrongContainer1 = useRef(null);
    const wrongContainer2 = useRef(null);
    const [multipleChoiceDisplayStyle, setMultipleChoiceDisplayStyle]= useState("none");
    const [multipleChoiceAnswersDisplayStyle, setMultipleChoiceAnswersDisplayStyle] = useState("none");
    const [openEndedDisplayStyle, setOpenEndedDisplayStyle] = useState(null);
    const [openEndedAnswerDisplayStyle, setOpenEndedAnswerDisplayStyle] = useState("none")
    const [openEndedAnswerButtonDisplayStyle, setOpenEndedAnswerButtonDisplayStyle] = useState(null);
    const [letterIcon, setLetterIcon] = useState('');

    const [question, setQuestion] = useState('no question');
    const [oerAnswer, setOerAnswer] = useState('no answer');
    const [choice1, setChoice1] = useState('no choice');
    const [choice2, setChoice2] = useState('no choice');
    const [choice3, setChoice3] = useState('no choice');
    const [questionElementStyle, setquestionElementStyle] = useState({display: 'none'});

    const { grade, category, points } = useParams();

    let selectionMapping = useMemo(() => 
        new Map([
            ["1-1", "border-red"], ["1-2", "border-red"], ["1-3", "border-red"], 
            ["1-4", "border-red"], ["2-1", "border-yellow"], ["3-1", "border-green"]
        ])
    , [])

    let selectionMappingBackground = useMemo(() => 
        new Map([
            ["1-1", "background-red"], ["1-2", "background-red"], ["1-3", "background-red"], 
            ["1-4", "background-red"], ["2-1", "background-yellow"], ["3-1", "background-green"]
        ])
    , [])

    //Confetti Effect
    const setConfetti = () => {
        party.confetti(questionContainer.current, {
            count: party.variation.range(50, 100),
            size: party.variation.range(2, 2.5),
            spread: party.variation.range(80, 130)
        });
        party.sparkles(questionContainer.current, {
            count: party.variation.range(50, 100),
            size: party.variation.range(2, 2.5),
            spread: party.variation.range(80, 130)
        });
    }

    const displayIcon = (questionLocation) => {
        if (questionLocation === 'correct') {
            correctContainer.current.childNodes[1].classList.add('active-x-check');
            timerElementMC.current.remove();
            timerElementOER.current.remove();
        }
        else if (questionLocation === 'wrong1') {
            wrongContainer1.current.childNodes[1].classList.add('active-x-check');
        }
        else if (questionLocation === 'wrong2') {
            wrongContainer2.current.childNodes[1].classList.add('active-x-check');
        }
    }

    const user = "089e-weni-098w";
    const pass = "0842-0983-ibjw-2q9w";
    
    //New line for oer snswers
    const newLine = (str) => {
        let newArr = str.split("*newline*");

        let arrOfObjects = [];

        for (let i = 0;i < newArr.length;i++) {
            arrOfObjects.push({
               data: newArr[i] 
            })
        }

        let answer = (
            <>
            {arrOfObjects.map((item) => (
                <div>
                    {item.data}<br></br>
                </div>
            ))}
            </>
        )

        return answer;
    }

    useEffect(()=>{
        correctContainer.current.classList.add(selectionMapping.get(category))
        wrongContainer1.current.classList.add(selectionMapping.get(category))
        wrongContainer2.current.classList.add(selectionMapping.get(category))
        setLetterIcon(selectionMappingBackground.get(category))
        
        axios.get('http://vhbackend.hvmatl.org:8080/get/question/round/1/category/' + category + 
        '/grade/' + grade + '/points/' + points, {auth: { username: user, password: pass}}
        ).then((response) => {
            if (response.data.type + "" === "oer") {
                setOpenEndedDisplayStyle("block")
                setOpenEndedAnswerButtonDisplayStyle("block")
                setMultipleChoiceDisplayStyle("none")
                setMultipleChoiceAnswersDisplayStyle("none")
                setOerAnswer(response.data.correctChoice)
            }
            else {
                setOpenEndedDisplayStyle("none")
                setOpenEndedAnswerButtonDisplayStyle("none")
                setMultipleChoiceDisplayStyle("block")
                setMultipleChoiceAnswersDisplayStyle("block")
            }

            setQuestion(response.data.question);
            let arr = [response.data.correctChoice,response.data.otherChoices[0],response.data.otherChoices[1]]

            setChoice1(arr[0]);
            setChoice2(arr[1]);
            setChoice3(arr[2]);
            setquestionElementStyle({})
        })
    }, [category, points, grade]);
    
    const correctChoice = (
        <div ref={correctContainer} onClickCapture={() => PlayAudio('ding')} onClick={() => {
            setConfetti(true)
            displayIcon('correct')
        }} className={selectionMapping.get(category)}><p ref={correctElement} className="question-text">{choice1}</p><BsCheckLg className="inactive-check"/></div>
    )

    const otherChoice1 = (
        <div ref={wrongContainer1} onClickCapture={() => PlayAudio("buzzer")} onClick={() => {
            displayIcon('wrong1')
        }} className={selectionMapping.get(category)}><p ref={wrongElement1} className="question-text">{choice2}</p><BsXLg className='inactive-x'/></div>
    )

    const otherChoice2 = (
        <div ref={wrongContainer2} onClickCapture={() => PlayAudio('buzzer')} onClick={() => {
            displayIcon('wrong2')
        }} className={selectionMapping.get(category)}><p ref={wrongElement2} className="question-text">{choice3}</p><BsXLg className='inactive-x'/></div>
    )

    let arr = RandomizeChoices(correctChoice,otherChoice1,otherChoice2);
    
    //For questions with this answer choice
    if (choice1.trim() === "Cả hai câu đều đúng." || choice1.trim() === "Không có câu đúng") {
        arr = SetChoiceAtBottom(arr, correctChoice);
    }
    else if (choice2.trim() === "Cả hai câu đều đúng." || choice2.trim() === "Không có câu đúng") {
        arr = SetChoiceAtBottom(arr, otherChoice1);
    }
    else if (choice3.trim() === "Cả hai câu đều đúng." || choice3.trim() === "Không có câu đúng") {
        arr = SetChoiceAtBottom(arr, otherChoice2);
    }
    
    const displayA = arr[0];
    const displayB = arr[1];
    const displayC = arr[2];

    const multipleChoice = (
            <>
            <div style={{display: multipleChoiceDisplayStyle}} className='question-row'>
                <div hidden>
                    <h5>Lớp {grade}</h5>
                    <h5>Category {category}</h5>
                    <h5>{points} Points</h5>
                </div>
                <div ref={timerElementMC} className='timer'>
                    <Timer/>
                </div>
                <h1 ref={questionElement} className='question-heading'>{question} <b style={{color: 'yellow'}} className='question-heading'>{'(' + points + ' Điểm)'}</b></h1>
            </div>
            <div style={{display: multipleChoiceAnswersDisplayStyle}} className="choices">
                <div className='choice-container'>
                    <TbLetterA className={'letter-icon ' + letterIcon}/>{displayA}
                </div>
                <div className='choice-container'>
                    <TbLetterB className={'letter-icon ' + letterIcon}/>{displayB}
                </div>
                <div className='choice-container'>
                    <TbLetterC className={'letter-icon ' + letterIcon}/>{displayC}
                </div>
            </div>
            </>
    )

    const openEnded = (
        <>
        <div style={{display: openEndedDisplayStyle}} className='question-row'>
            <div hidden>
                <h5>Lớp {grade}</h5>
                <h5>Category {category}</h5>
                <h5>{points} Points</h5>
            </div>
            <div ref={timerElementOER} className='timer'>
                <Timer/>
            </div>
            <h1 ref={questionElement} className='question-heading'>{question} <b style={{color: 'yellow'}} className='question-heading'>{'(' + points + ' Điểm)'}</b></h1>
            <h1 onClick={() => {
                setOpenEndedAnswerDisplayStyle("block")
                setOpenEndedAnswerButtonDisplayStyle("none")
                timerElementMC.current.remove();
                timerElementOER.current.remove();
            }} style={{display: openEndedAnswerButtonDisplayStyle,color: 'green', cursor: 'pointer', border: '1px solid green', padding: '5px', marginTop: "15vh"}} className='question-heading'>Câu Trả Lời Đúng</h1>
            <h1 style={{display: openEndedAnswerDisplayStyle}} className='question-heading oer-answer'>{newLine(oerAnswer)}</h1>
        </div>
        </>
    )

    return (
        <>
        <div className='view-question'> 
            <div id="container" className='container'>
                <div ref={questionContainer} style={questionElementStyle} className='question'>
                    {multipleChoice}
                    {openEnded}
                </div>
                <Link className="link back-to-selection" to={"/select-category-and-points-567/" + grade}>Trở Về Trang Đầu</Link> 
            </div>
        </div>
        </>
    )
}

export default ViewQuestion567;