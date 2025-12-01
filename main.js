//Automotive Trivia Final Project Game
"use strict"

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

    const questions = [ "What was the first mass-produced automobile?", //Ford Model T
                        "Which car company invented the modern-day seatbelt?", //Volvo
                        "What does SUV stand for?", //Sport Utility Vehicle
                        "What does ATV stand for?", //All Terrain Vehicle
                        "What is the highest-octane commercially available gas type in NL?", //91
                        "When was the first Front-Wheel-Drive car built?", //1909
                        "Which was the first car company to manufacture a 'Super Car'?", //Lamborghini
                        "Which mainstream car company is primarily known for their reliability?", //Honda or Toyota
                        "When was the first electric vehicle produced?", //1832
                        "What is the best selling car model in the world?", //Corolla
                        "When was the first speeding ticket issued?", //1902
                        "Who invented the term 'Tune-Up' as in to tune up your car?", //Henry Ford
                        "How many total car models contain factory cd-players now?", //3
                        "Which car brand was the first to incorporate LED running lights?", //Audi
                        "In an automatice vehicle, your drive selectors include P-R-N-D-L, what does the L stand for?", //Low
                        "Which car brand's logo is based on a pair of propellers?", //BMW
                        "Who was Ferrari's founder?", //Enzo Ferrari
                        "What was the first thing manufactured by Lamborghini?" //Tractor
    ];

    let currentQuestion = 0;

    function loadQuestion() {
        currentQuestion = Math.floor(Math.random() * questions.length);
        getElement("#question").textContent = questions[currentQuestion];
        answerInput.value = "";
        answerInput.focus();
    };
    
    const answerInput = getElement("#answer-input");

    let answerCount = 0;
    let correctCount = 0;

    loadQuestion();

    getElement("#answer-submit").addEventListener("click", (event) => {

        event.preventDefault();

        if (answerCount >= 10) {
            return;
        } 
        else {
            const userAnswer = answerInput.value.trim().toLowerCase();

            switch (currentQuestion) {
                case 0:
                    if (userAnswer == "ford model t") correctCount++; break;
                case 1:
                    if (userAnswer == "volvo") correctCount++; break;
                case 2:
                    if (userAnswer == "sport utility vehicle") correctCount++; break;
                case 3:
                    if (userAnswer == "all terrain vehicle") correctCount++; break;
                case 4:
                    if (userAnswer == "91") correctCount++; break;
                case 5:
                    if (userAnswer == "1909") correctCount++; break;
                case 6:
                    if (userAnswer == "lamborghini") correctCount++; break;
                case 7:
                    if (userAnswer == "honda" || userAnswer == "toyota") correctCount++; break;
                case 8:
                    if (userAnswer == "1832") correctCount++; break;
                case 9:
                    if (userAnswer == "corolla") correctCount++; break;
                case 10:
                    if (userAnswer == "1902") correctCount++; break;
                case 11:
                    if (userAnswer == "henry ford") correctCount++; break;
                case 12:
                    if (userAnswer == "3") correctCount++; break;
                case 13:
                    if (userAnswer == "audi") correctCount++; break;
                case 14:
                    if (userAnswer == "low") correctCount++; break;
                case 15:
                    if (userAnswer == "bmw") correctCount++; break;
                case 16:
                    if (userAnswer == "enzo ferrari" || userAnswer == "enzo") correctCount++; break;
                case 17:
                    if (userAnswer == "tractor") correctCount++; break;
            }

            answerCount++

            getElement("#answer-count").textContent = answerCount;
            getElement("#correct-count").textContent = correctCount;

            if (answerCount >= 10) {
                getElement("#question").textContent = `Congratulations, you got ${correctCount} questions correct!`
                getElement("#answer-submit").disabled = true;
                answerInput.value = "";
                answerInput.disabled = true;
            } else{
                loadQuestion();
            }
            
        };
    });
});
