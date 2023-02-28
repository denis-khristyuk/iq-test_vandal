import React, {useEffect, useState} from 'react';
import './Past_word.scss';

type Props = {
    taskWord: string;
    setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
    taskNo: number;
}

export const Past_word: React.FC<Props> = (Props) => {
    const { taskWord, setQuestionNumber, taskNo } = Props;
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        setQuestionNumber(taskNo);
    }, []);

    return (
        <div className="pastWord">
            <p className="pastWord_task">{taskWord}</p>
            <p className="pastWord_condition">
                Вставте слово, яке є закінченням першого слова та початком другого.
            </p>

            <div className="figures_divider"></div>

            <div className="pastWord_input">
                <p className="pre-input-text">Введіть відповідь у поле:</p>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="modal_input"
                    placeholder="Відповідь..."
                />
            </div>

            <div className="buttons">
            </div>

        </div>
    );
};
