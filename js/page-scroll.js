let mysBtn = document.getElementById("scrollbuttonid");

window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mysBtn.style.display = "flex"; // Use flex to match your CSS
  } else {
    mysBtn.style.display = "none";
  }
});
