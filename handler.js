//handler file
"use strict"

const getElement = selector => document.querySelector(selector);

export function loadQuestion(data) {
    let index
    do {
        index = Math.floor(Math.random() * data.questions.length);
    } while (data.usedQuestions.includes(index) && data.usedQuestions.length < data.questions.length);

    data.currentQuestion = index;
    data.questionOutput.textContent = data.questions[index];

    data.answerInput.value = "";
    data.answerInput.focus();

    data.usedQuestions.push(index);
};

export function answerCheck(data) {
    const userAnswer = data.answerInput.value.trim().toLowerCase();

    if (userAnswer == "" || data.answerCount >= 10) return; 

    let isCorrect = false;

    switch (data.currentQuestion) {
        case 0:
            if (userAnswer == "ford model t") isCorrect = true; break;
        case 1:
            if (userAnswer == "volvo") isCorrect = true; break;
        case 2:
            if (userAnswer == "sport utility vehicle") isCorrect = true; break;
        case 3:
            if (userAnswer == "all terrain vehicle") isCorrect = true; break;
        case 4:
            if (userAnswer == "91") isCorrect = true; break;
        case 5:
            if (userAnswer == "1909") isCorrect = true; break;
        case 6:
            if (userAnswer == "lamborghini") isCorrect = true; break;
        case 7:
            if (userAnswer == "honda" || userAnswer == "toyota") isCorrect = true; break;
        case 8:
            if (userAnswer == "1832") isCorrect = true; break;
        case 9:
            if (userAnswer == "corolla") isCorrect = true; break;
        case 10:
            if (userAnswer == "1902") isCorrect = true; break;
        case 11:
            if (userAnswer == "henry ford") isCorrect = true; break;
        case 12:
            if (userAnswer == "3") isCorrect = true; break;
        case 13:
            if (userAnswer == "audi") isCorrect = true; break;
        case 14:
            if (userAnswer == "low") isCorrect = true; break;
        case 15:
            if (userAnswer == "mini") isCorrect = true; break;
        case 16:
            if (userAnswer == "enzo ferrari" || userAnswer == "enzo") isCorrect = true; break;
        case 17:
            if (userAnswer == "tractor") isCorrect = true; break;
        case 18:
            if (userAnswer == "ferrari") isCorrect = true; break;
        case 19:
            if (userAnswer == "mustang") isCorrect = true; break;
        case 20:
            if (userAnswer == "kia" || userAnswer == "hyundai") isCorrect = true; break;
        case 21:
            if (userAnswer == "bentley" || userAnswer == "rolls royce") isCorrect = true; break;
        case 22:
            if (userAnswer == "porsche 911" || userAnswer == "911") isCorrect = true; break;
        case 23:
            if (userAnswer == "nascar") isCorrect = true; break;
        case 24:
            if (userAnswer == "f1" || userAnswer == "formula 1") isCorrect = true; break;
        case 25:
            if (userAnswer == "mitsubishi") isCorrect = true; break;
        case 26:
            if (userAnswer == "subaru") isCorrect = true; break;
    }

    if (isCorrect) {
        data.correctCount++
        data.correctQuestions.push(data.questions[data.currentQuestion]);
    }

    data.answerCount++

    getElement("#answer-count").textContent = "Remaining: " + (10 - data.answerCount);
    getElement("#correct-count").textContent = data.correctCount;

    if (data.answerCount >= 10) {
        data.questionOutput.textContent = `Congratulations, you got ${data.correctCount} questions correct!`

        data.answerInput.value = "";
        data.answerInput.disabled = true;
        data.answerSubmit.disabled = true;

        const correctDiv = document.createElement("div");
        correctDiv.id = "correct-questions";
        correctDiv.innerHTML = "<h2>Questions that were correctly answered:</h2>";
        
        const ul = document.createElement("ul");
        data.correctQuestions.forEach(index => {
            const li = document.createElement("li")
            li.textContent = index;
            ul.appendChild(li);
        });

        correctDiv.appendChild(ul);
        getElement("#game-box").appendChild(correctDiv);

    } else{
        data.loadQuestion();
    }
    
};