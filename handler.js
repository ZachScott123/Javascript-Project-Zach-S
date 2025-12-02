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
    
    console.log(data.currentQuestion);
    console.log(userAnswer);
    console.log(data.answers[data.currentQuestion])

    if (userAnswer == data.answers[data.currentQuestion]) isCorrect = true;

    if (isCorrect) {
        data.correctCount++
        data.correctQuestions.push(data.questions[data.currentQuestion]);
    }

    data.answerCount++

    getElement("#answer-count").textContent = "Remaining: " + (10 - data.answerCount);

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