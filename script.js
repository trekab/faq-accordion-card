const questions = document.querySelectorAll(".faq");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    if (question.classList.value.includes("selected")) {
      question.classList.remove("selected");
    } else {
      question.classList.add("selected");
    }
  });
});
