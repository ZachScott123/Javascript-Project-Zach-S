//handler file

export function loadQuestion(currentQuestion) {
    currentQuestion = Math.floor(Math.random() * questions.length);
    getElement("#question").textContent = questions[currentQuestion];
    getElement("#answer-input").value = "";
    getElement("#answer-input").focus();
};

export function answerCheck(currentQuestion) {
    if (answerCount >= 10) {
        return;
    } 
    else if (getElement("#answer-input").value == "") {
        return;
    }
    else {
        const userAnswer = getElement("#answer-input").value.trim().toLowerCase();

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

        getElement("#answer-count").textContent = "Remaining: " + (10 - answerCount);
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
};