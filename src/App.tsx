import React, {useEffect, useState} from 'react';
import './styles/App.scss';
import './styles/utils/_normalize.scss';
import {Background} from './components/Background/Background';
import {Modal} from './components/Modal/Modal';
import {Countdown} from './components/Countdown/Countdown';
import {Link, useNavigate} from 'react-router-dom';
import {TimedOffModal} from './components/TimedOffModal/TimedOffModal';

function App() {
    const [isPhoneModalActive, setIsPhoneModalActive] = useState(true);
    const [isTimedOff, setIsTimedOff] = useState(false);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [isStarted, setIsStarted] = useState(false);
    const [enteredAnswers, setEnteredAnswers] = useState<any>([]);
    const [seconds, setSeconds] = useState(+window.localStorage.timeLeft || 1800);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [result, setResult] = useState(75);

    const navigate = useNavigate();

    useEffect(() => {
        const cookies = document.cookie.split('=')[1];
        if (cookies === 'true') {
            setIsTimedOff(true);
        }
        navigate('/0');
    }, []);

    useEffect(() => {
        if (isPhoneModalActive || isTimedOff) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [isPhoneModalActive, isTimedOff]);

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
        e.preventDefault();
        e.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return (
        <div className="App">
            <div className="app_main">
                <div className="header">
                    <div className="header_content">
                        <Link to={'/'}>
                            <img
                                src="https://i.ibb.co/Ht2kc89/header.png"
                                alt="vandal academy"
                                className="header_logo"
                            />
                            <p className="header_title">Академія Vandal Vape</p>
                        </Link>
                    </div>
                </div>

                <div className="main_content">
                    <div className="countdown">
                        <p className="timer">Залишилось часу: {
                            isStarted
                                ? <Countdown setIsTimedOff={setIsTimedOff} seconds={seconds} />
                                : '30:00'}
                        </p>
                    </div>

                    <div className="content_box">
                        <Background
                            setIsStarted={setIsStarted}
                            setQuestionNumber={setQuestionNumber}
                            setEnteredAnswers={setEnteredAnswers}
                            enteredAnswers={enteredAnswers}
                            phoneNumber={phoneNumber}
                            result={result}
                            setResult={setResult}
                        />
                    </div>

                    {isStarted &&
                        <div className="questions_counter">
                            <p className="questions_counter_text">{`Питання ${questionNumber}/40`}</p>
                        </div>
                    }

                    {isPhoneModalActive && <Modal setActive={setIsPhoneModalActive} setPhoneNumber={setPhoneNumber}/>}
                    {
                        isTimedOff &&
                        <TimedOffModal
                            result={result}
                            enteredAnswers={enteredAnswers}
                            phoneNumber={phoneNumber}
                            setResult={setResult}
                        />
                    }
                </div>

                <div className="footer"></div>
            </div>
        </div>
    );
}

export default App;
