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
                        "Which car company is primarily known for their reliability?", //Honda or Toyota
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

    const answer = getElement("#answer_input");

    getElement("#submit").addEventListener("click", () => {

    });

});
