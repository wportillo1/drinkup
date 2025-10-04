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