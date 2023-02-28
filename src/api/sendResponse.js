const requestLink = 'https://www.corezoid.com/api/2/json/public/1177134/e9cd70ea2f180e0bc0d1fe7b58d1f0804ca0eba0';
const correctAnswers = [
    4,
    'чай',
    'валіза',
    '11',
    'жаба',
    '25',
    '3',
    'тісто',
    6,
    5,
    'ї',
    'шок',
    '54',
    '11',
    '27',
    ['р', 'т'],
    2,
    2,
    '18',
    '76',
    'хата',
    'лад',
    'сарай',
    'кисть',
    'п',
    ['с', 'н'],
    2,
    1,
    1,
    'грот',
    'біг',
    '64',
    'опір',
    'вівторок',
    ['є', '7'],
    'губа',
    'нива',
    1,
    6,
    1
];

export const sendResponse = async (data) => {
    await fetch(requestLink, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });
};

export const calculateResult = (enteredAnswers) => {
    let currentResult = 75;

    for (let i = 0; i <= enteredAnswers.length; i++) {
        // if answer is an array
        if (Array.isArray(correctAnswers[i])) {
            const enteredAnswer = enteredAnswers[i];
            const correctAnswer = correctAnswers[i];

            if (correctAnswer.includes(enteredAnswer[0]) && correctAnswer.includes(enteredAnswer[1])) {
                currentResult += 2.5;
            }

        }

        if (correctAnswers[i] === enteredAnswers[i]) {
            currentResult += 2.5;
        }
    }

    if (currentResult >= 160) {
        return 160;
    }

    return currentResult;
};

