document.addEventListener("DOMContentLoaded", () => {
  const enButton = document.getElementById("en-button");
  const frButton = document.getElementById("fr-button");
  const elements = document.querySelectorAll("[data-en]");

  const switchLanguage = (language) => {
    elements.forEach((element) => {
      element.textContent = element.getAttribute(`data-${language}`);
    });
  };

  enButton.addEventListener("click", () => switchLanguage("en"));
  frButton.addEventListener("click", () => switchLanguage("fr"));
});
