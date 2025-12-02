//Automotive Trivia Final Project Game
//main file

import { loadQuestion, answerCheck } from './handler.js';
import { createQuestion, createBg } from './create.js';

"use strict"

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

    createBg();

    const data = {
    questions: [ "What was the first mass-produced automobile?", //Ford Model T
                "Which car company invented the modern-day seatbelt?", //Volvo
                "What does SUV stand for?", //Sport Utility Vehicle
                "What does ATV stand for?", //All Terrain Vehicle
                "What is the highest-octane commercially available gas type in NL?", //91
                "When was the first Front-Wheel-Drive car built?", //1909
                "Which was the first car company to manufacture a 'Super Car'?", //Lamborghini
                "Which mainstream car company is primarily known for their reliability?", //Honda
                "When was the first electric vehicle produced?", //1832
                "What is the best selling car model in the world?", //Corolla
                "When was the first speeding ticket issued?", //1902
                "Who invented the term 'Tune-Up' as in to tune up your car?", //Henry Ford
                "How many total car models contain factory cd-players now?", //3
                "Which car brand was the first to incorporate LED running lights?", //Audi
                "In an automatic vehicle, your drive selectors include P-R-N-D-L, what does the L stand for?", //Low
                "Which economy car is known for its uniquely small size?", //Mini
                "Who was Ferrari's founder?", //Enzo Ferrari
                "What was the first thing manufactured by Lamborghini?", //Tractor
                "Which car brand's logo displays a 'Prancing Horse'?", //Ferrari
                "Which sub-brand is known for its racing horse logo?", //Mustang
                "What is the name second half of Mercedes' car company's name?", //Benz
                "Which car manufacturer is known for adonishing the spirit of ecstasy on its vehicle's hood?", //Rolls Royce
                "Which sports car company notoriously took inspiration for their sports car from the Volkswagen Beetle?", //Porsche
                "What is the name of the race series in which drivers only take left-turns?", //Nascar
                "What is the name of the highly intense race series, using cutting edge tech, loved worldwide?", //F1
                "Which car brand logo is made up of three diamond shapes?", //Mitsubishi
                "Which car brand is known for their flat-profile 'Boxer' engines?", //Subaru
                "Which hypercar brand is known for its iconic 'Ghost Squadron'?" // Koenigsegg
                ],
    answers:     [ "ford model t",
                "volvo",
                "sport utility vehicle",
                "all terrain vehicle",
                "91",
                "1909",
                "lamborghini",
                "honda",
                "1832",
                "corolla",
                "1902",
                "henry ford",
                "3",
                "audi",
                "low",
                "mini",
                "enzo ferrari",
                "tractor",
                "ferrari",
                "mustang",
                "benz",
                "rolls royce",
                "porsche",
                "nascar",
                "f1",
                "mitsubishi",
                "subaru",
                "koenigsegg"
    ],
    correctQuestions: [],
    usedQuestions: [],
    currentQuestion: 0,
    answerCount: 0,
    correctCount: 0,
    answerInput: getElement("#answer-input"),
    answerSubmit: getElement("#answer-submit"),
    questionOutput: getElement("#question"),
    createBtn: getElement("#create"),
    loadQuestion: null
};

    data.loadQuestion = () => loadQuestion(data);

    loadQuestion(data);

    data.answerSubmit.addEventListener("click", (event) => {

        event.preventDefault();

        answerCheck(data);
    });

    data.createBtn.addEventListener("click", () => {

        createQuestion(data);

    });
    
});
