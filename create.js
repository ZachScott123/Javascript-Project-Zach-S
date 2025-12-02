//create file
"use strict"

const getElement = selector => document.querySelector(selector);

let creating = false;
let questionInput;
let answerInput;

export function createQuestion(data) {
    const createBtn = getElement("#create");
    const fields = getElement("#create-fields");

    if (!creating) {
        creating = true;
        
        createBtn.textContent = "Submit New Question";

        fields.innerHTML = `
            <input id="new-question" placeholder="Type your new Question...">
            <input id="new-answer" placeholder="Type your Answer...">
        `;

        questionInput = getElement("#new-question");
        answerInput = getElement("#new-answer")

        return;
    }

    const question = questionInput.value.trim();
    const answer = answerInput.value.trim().toLowerCase();

    if (question == "" || answer == "") {

        if (question == "") {
            questionInput.value = "";
            questionInput.placeholder = "Please enter a Question...";
        }

        if (answer == "") {
            answerInput.value = "";
            answerInput.placeholder = "Please enter an Answer...";
        }

        return;
    }

    data.questions.push(question);
    data.answers.push(answer);

    fields.innerHTML = "";
    createBtn.textContent = "Create New Question";
    creating = false;

};

export function createBg() {

    const carImg = getElement("#car-bg");

    const carImagesCount = 8;

    const index = Math.floor(Math.random() * carImagesCount) + 1; 

    carImg.src = `pics/pic${index}.jpg`;

};