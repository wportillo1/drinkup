function toggleCustomization(drinkId) {
  const section = document.getElementById(drinkId + "-customization");
  section.classList.toggle("hidden");
}

// For collapsibles inside customizations
document.addEventListener("DOMContentLoaded", () => {
  let coll = document.querySelectorAll(".collapsible");
  coll.forEach(button => {
    button.addEventListener("click", function() {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});

function toggleCustomization(drink) {
  const customizationDiv = document.getElementById(drink + '-customization');
  customizationDiv.classList.toggle('hidden');
}

document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = new FormData(this);
  const drink = form.get("drink");
  const size = form.get("size");
  const toppings = form.getAll("toppings").join(", ") || "None";

  // Save order details in localStorage so thankyou.html can read it
  localStorage.setItem("orderSummary", `Drink: ${drink}\nSize: ${size}\nToppings: ${toppings}`);

  // Redirect to thank-you page
  window.location.href = "thankyou.html";
});