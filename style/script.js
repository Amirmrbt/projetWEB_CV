const quizForm = document.getElementById('quiz-form');
const resultsContainer = document.getElementById('results');

const answers = {
    Question1: 'Amir Mrabet',
    Question2: '26',
    Question3: 'Cycling',
    Question4: 'FSEGS',
    Question5: '2022',
    Question6: 'IT',
    Question7: 'Agricultar',
    Question8: 'Dropshipping',
    Question9: 'IIT',
    Question10: 'Absolutely YES'
};

quizForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let score = 0;
    let output = '';

    for (const question in answers) {
        const answer = answers[question];
        const selected = quizForm.elements[question];
        let userAnswer;

        selected.forEach(radio => {
            if (radio.checked) {
                userAnswer = radio.value;
            }
        });

        if (userAnswer === answer) {
            score++;
            output += `<p> ${question} is correct</p>`;
        } else {
            output += `<p> ${question} is incorrect. The correct answer is ${answer}</p>`;
        }

    }
    resultsContainer.innerHTML = `<p>You scored ${score} out of ${Object.keys(answers).length}</p>`;
    resultsContainer.innerHTML += output;

});