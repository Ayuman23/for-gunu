window.onload = function () {
  document.getElementById("letterPopup").classList.add("hidden");
  document.getElementById("memoryPage").classList.add("hidden");
};

function checkName() {
  const correctName = "Vedu Baii";
  const input = document.getElementById("nameInput").value.trim();

  const funnyMessages = [
    "Nice try 😏",
    "This space is reserved 🖤",
    "Wrong name 🤭",
    "Access denied 😂"
  ];

  if (input.toLowerCase() === correctName.toLowerCase()) {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("memoryPage").classList.remove("hidden");
  } else {
    alert(funnyMessages[Math.floor(Math.random() * funnyMessages.length)]);
  }
}

function openLetter() {
  document.getElementById("letterPopup").classList.remove("hidden");
}

function closeLetter() {
  document.getElementById("letterPopup").classList.add("hidden");
}
function revealPhoto(card) {
  card.classList.add("revealed");
}
