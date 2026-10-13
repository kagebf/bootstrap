// Пример пользовательских скриптов JavaScript для сайта.
document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.querySelector("#nameInput");
  const greetButton = document.querySelector("#greetButton");
  const greetResult = document.querySelector("#greetResult");

  greetButton.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (!name) {
      greetResult.textContent = "Пожалуйста, введите имя.";
      greetResult.className = "alert alert-warning mt-3 mb-0";
      nameInput.focus();
      return;
    }
    greetResult.textContent = `Привет, ${name}! JavaScript успешно выполнил скрипт.`;
    greetResult.className = "alert alert-success mt-3 mb-0";
  });

  document.querySelectorAll(".quiz-option").forEach((button) => {
    button.addEventListener("click", () => {
      const result = document.querySelector("#quizResult");
      if (button.dataset.answer === "correct") {
        result.textContent = "Верно! addEventListener() добавляет обработчик события.";
        result.className = "mt-3 fw-semibold text-success";
      } else {
        result.textContent = "Не совсем. Попробуйте ещё раз.";
        result.className = "mt-3 fw-semibold text-danger";
      }
    });
  });
});
