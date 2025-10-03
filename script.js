var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

 function toggleCustomization(drink) {
    const el = document.getElementById(drink + "-customization"); 
  el.style.display = (el.style.display === "block") ? "none" : "block"; 
  } 

  // Collapsible menus
  document.addEventListener("click", function(e) {
    if (e.target.classList.contains("collapsible")) { 
      e.target.classList.toggle("active"); 
      let content = e.target.nextElementSibling; 
        if (content.style.maxHeight) { 
            content.style.maxHeight = null; 
        } else { 
          content.style.maxHeight = content.scrollHeight + "px"; 
        } 
    } 
}); 