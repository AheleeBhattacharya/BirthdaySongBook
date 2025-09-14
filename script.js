function openBook() {
    document.getElementById("cover").classList.remove("active");
    document.getElementById("page1").classList.add("active");
  }
  
  function nextPage(n) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById("page" + n).classList.add("active");
  }
  
  function closeBook() {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById("cover").classList.add("active");
  }
  