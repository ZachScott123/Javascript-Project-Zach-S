//Automotive Trivia Final Project Game
//main file

import { loadQuestion, answerCheck } from './handler.js';

"use strict"

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

    const data = {
    questions: [ "What was the first mass-produced automobile?", //Ford Model T
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
                "In an automatic vehicle, your drive selectors include P-R-N-D-L, what does the L stand for?", //Low
                "Which car brand is known for its immensley small size?", //BMW
                "Who was Ferrari's founder?", //Enzo Ferrari
                "What was the first thing manufactured by Lamborghini?", //Tractor
                "Which car brand's logo displays a 'Prancing Horse'?", //Ferrari
                "Which sub-brand is known for its racing horse logo?", //Mustang
                "What is the name of any South Korean car company?", //Kia or Hyundai
                "Which car manufacturer is known for it premium luxury?", //Bentley or Rolls Royce
                "Which sports car's design was heavily influenced by the Volkswagen Beetle?", //Porsche 911 or 911
                "What is the name of the race series in which drivers only take left-turs?", //Nascar
                "What is the name of the highly intense race series, using cutting edge tech, loved worldwide?", //F1 or Formula 1
                "Which car brand logo is made up of three diamond shapes?", //Mitsubishi
                "Which car brand is known for their flat-profile 'Boxer' engines?" //Subaru
                ],
    correctQuestions: [],
    usedQuestions: [],
    currentQuestion: 0,
    answerCount: 0,
    correctCount: 0,
    answerInput: getElement("#answer-input"),
    answerSubmit: getElement("#answer-submit"),
    questionOutput: getElement("#question"),
    loadQuestion: null
};

    data.loadQuestion = () => loadQuestion(data);

    loadQuestion(data);

    data.answerSubmit.addEventListener("click", (event) => {

        event.preventDefault();

        answerCheck(data)
    });
});
