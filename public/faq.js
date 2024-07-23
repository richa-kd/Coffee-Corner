document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const arrow = question.querySelector(".arrow");

      if (answer.style.display === "block") {
        answer.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
      } else {
        document
          .querySelectorAll(".faq-answer")
          .forEach((a) => (a.style.display = "none"));
        document
          .querySelectorAll(".arrow")
          .forEach((a) => (a.style.transform = "rotate(0deg)"));

        answer.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
      }
    });
  });
});
