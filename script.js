  function toggleCustomization(id) {
    const section = document.getElementById(id + "-customization");
    section.classList.toggle("hidden");

    const qtyInput = document.getElementById(id + "-qty");
    const sizeSelect = section.querySelector("select[name='" + id + "-size']");

    if (!section.classList.contains("hidden")) {
      // Show section: enforce rules
      sizeSelect.setAttribute("required", "required");
      qtyInput.min = 1;
      if (parseInt(qtyInput.value) < 1) {
        qtyInput.value = 1;
      }
    } else {
      // Hide section: reset everything
      resetCustomization(id);
    }
  }

  function removeCustomization(id) {
    const section = document.getElementById(id + "-customization");
    section.classList.add("hidden");
    resetCustomization(id);
  }

  function resetCustomization(id) {
    const section = document.getElementById(id + "-customization");
    const qtyInput = document.getElementById(id + "-qty");
    const sizeSelect = section.querySelector("select[name='" + id + "-size']");
    
    // Reset quantity
    qtyInput.min = 0;
    qtyInput.value = 0;

    // Reset size
    sizeSelect.removeAttribute("required");
    sizeSelect.value = "";

    // Uncheck checkboxes
    section.querySelectorAll("input[type='checkbox']").forEach(cb => cb.checked = false);

    // Reset dropdowns (except size)
    section.querySelectorAll("select").forEach(sel => {
      if (sel.name !== id + "-size") sel.selectedIndex = 0;
    });
  }