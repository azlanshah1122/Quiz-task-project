// Function to handle student details form submission
document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const rollNumber = document.getElementById("rollNumber").value;
  const name = document.getElementById("name").value;
  const batch = document.getElementById("batch").value;
  const section = document.getElementById("section").value;

  const studentData = { rollNumber, name, batch, section };
  sessionStorage.setItem("studentData", JSON.stringify(studentData));
  window.location.href = "quiz.html"; // Redirect to quiz page
});

document.addEventListener("DOMContentLoaded", function () {
  const quizForm = document.getElementById("quizForm");
  const resultsContainer = document.getElementById("resultsContainer");

  quizForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(quizForm);
    let score = 0;

    formData.forEach((value, key) => {
      const correctAnswer = document.getElementById(key + "Correct").value;
      if (value === correctAnswer) {
        score++;
      }
    });

    const studentData = JSON.parse(sessionStorage.getItem("studentData"));
    const { name, rollNumber, batch, section } = studentData;

    const resultHTML = `
        <div class="result-item">
          <span>Name:</span> ${name}
        </div>
        <div class="result-item">
          <span>Roll Number:</span> ${rollNumber}
        </div>
        <div class="result-item">
          <span>Batch:</span> ${batch}
        </div>
        <div class="result-item">
          <span>Section:</span> ${section}
        </div>
        <div class="result-item">
          <span>Score:</span> ${score} out of 5
        </div>
      `;

    resultsContainer.innerHTML = resultHTML;
    document.getElementById("retakeQuiz").style.display = "block";
  });
});
