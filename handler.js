//handler file
"use strict"

const getElement = selector => document.querySelector(selector);

export function loadQuestion(data) {
    data.currentQuestion = Math.floor(Math.random() * data.questions.length);
    data.questionOutput.textContent = data.questions[data.currentQuestion];
    data.answerInput.value = "";
    data.answerInput.focus();
};

export function answerCheck(data) {
    const userAnswer = data.answerInput.value.trim().toLowerCase();

    if (userAnswer == "" || data.answerCount >= 10) return; 

    switch (data.currentQuestion) {
        case 0:
            if (userAnswer == "ford model t") data.correctCount++; break;
        case 1:
            if (userAnswer == "volvo") data.correctCount++; break;
        case 2:
            if (userAnswer == "sport utility vehicle") data.correctCount++; break;
        case 3:
            if (userAnswer == "all terrain vehicle") data.correctCount++; break;
        case 4:
            if (userAnswer == "91") data.correctCount++; break;
        case 5:
            if (userAnswer == "1909") data.correctCount++; break;
        case 6:
            if (userAnswer == "lamborghini") data.correctCount++; break;
        case 7:
            if (userAnswer == "honda" || userAnswer == "toyota") data.correctCount++; break;
        case 8:
            if (userAnswer == "1832") data.correctCount++; break;
        case 9:
            if (userAnswer == "corolla") data.correctCount++; break;
        case 10:
            if (userAnswer == "1902") data.correctCount++; break;
        case 11:
            if (userAnswer == "henry ford") data.correctCount++; break;
        case 12:
            if (userAnswer == "3") data.correctCount++; break;
        case 13:
            if (userAnswer == "audi") data.correctCount++; break;
        case 14:
            if (userAnswer == "low") data.correctCount++; break;
        case 15:
            if (userAnswer == "bmw") data.correctCount++; break;
        case 16:
            if (userAnswer == "enzo ferrari" || userAnswer == "enzo") data.correctCount++; break;
        case 17:
            if (userAnswer == "tractor") data.correctCount++; break;
    }

    data.answerCount++

    getElement("#answer-count").textContent = "Remaining: " + (10 - data.answerCount);
    getElement("#correct-count").textContent = data.correctCount;

    if (data.answerCount >= 10) {
        data.questionOutput.textContent = `Congratulations, you got ${data.correctCount} questions correct!`
        getElement("#answer-submit").disabled = true;
        data.answerInput.value = "";
        data.answerInput.disabled = true;
    } else{
        data.loadQuestion();
    }
    
};