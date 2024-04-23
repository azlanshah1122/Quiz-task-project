document.getElementById('quizForm').addEventListener('submit', function (e) {
    e.preventDefault();

  
    let score = 0;

    // Question 1
    if (document.getElementById('q1c').checked && document.getElementById('q1Correct').value === 'Jasmine') {
        score++;
    }

    // Question 2
    if (document.getElementById('q2a').checked && document.getElementById('q2Correct').value === 'Muhammad Ali Jinnah') {
        score++;
    }

    // Question 3
    if (document.getElementById('q3c').checked && document.getElementById('q3Correct').value === 'Lahore') {
        score++;
    }

    // Question 4
    if (document.getElementById('q4b').checked && document.getElementById('q4Correct').value === 'K2') {
        score++;
    }

    // Question 5
    if (document.getElementById('q5a').checked && document.getElementById('q5Correct').value === '1947') {
        score++;
    }
    
    // Storing the score in local storage
    localStorage.setItem('quizScore', score);
    // Redirecting to the result page
    window.location.href = 'result.html';
});
