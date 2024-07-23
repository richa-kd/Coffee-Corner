document.addEventListener("DOMContentLoaded", () => {
  const baseButtons = document.querySelectorAll('input[name="base"]');
  const milkButtons = document.querySelectorAll('input[name="milk"]');
  const syrupButtons = document.querySelectorAll('input[name="syrup"]');
  const totalPriceElement = document.getElementById("total-price");
  const submitButton = document.getElementById("submit-btn");

  const updateTotalPrice = () => {
    const basePrice = parseFloat(
      document.querySelector('input[name="base"]:checked').dataset.price
    );
    const milkPrice = parseFloat(
      document.querySelector('input[name="milk"]:checked').dataset.price
    );
    const syrupPrice = parseFloat(
      document.querySelector('input[name="syrup"]:checked').dataset.price
    );

    const totalPrice = basePrice + milkPrice + syrupPrice;
    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
  };

  const handleOptionChange = () => {
    updateTotalPrice();
  };

  baseButtons.forEach((button) =>
    button.addEventListener("change", handleOptionChange)
  );
  milkButtons.forEach((button) =>
    button.addEventListener("change", handleOptionChange)
  );
  syrupButtons.forEach((button) =>
    button.addEventListener("change", handleOptionChange)
  );

  submitButton.addEventListener("click", () => {
    const base = document.querySelector('input[name="base"]:checked').value;
    const milk = document.querySelector('input[name="milk"]:checked').value;
    const syrup = document.querySelector('input[name="syrup"]:checked').value;

    alert(`You have customized your drink with:
        Base: ${base},
        Milk: ${milk},
        Syrup: ${syrup}
        Total Price: $${parseFloat(
          totalPriceElement.textContent.split("$")[1]
        ).toFixed(2)}`);
  });

  updateTotalPrice();
});
