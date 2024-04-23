document.addEventListener('DOMContentLoaded', function () {
    const score = localStorage.getItem('quizScore');

    if (score !== null) {
        const resultsContainer = document.getElementById('resultsContainer');
        resultsContainer.innerHTML = `<p>Your score: ${score}/5</p>`;
    }

    const retakeQuizButton = document.getElementById('retakeQuiz');
    retakeQuizButton.addEventListener('click', function () {
        localStorage.removeItem('quizScore');
        window.location.href = 'index.html';
    });
});
