document.getElementById("change-text").addEventListener("click", () => {
  document.getElementById("main-title").textContent = "Your Child’s Home Away From Home!";
});

document.getElementById("change-style").addEventListener("click", () => {
  document.body.style.backgroundColor = "#fce4ec"; // soft pink
});

document.getElementById("toggle-box").addEventListener("click", () => {
  const boxContainer = document.getElementById("box-container");
  const existingBox = document.getElementById("box");

  if (existingBox) {
    boxContainer.removeChild(existingBox);
  } else {
    const newBox = document.createElement("div");
    newBox.id = "box";
    newBox.textContent = "Play Time!";
    boxContainer.appendChild(newBox);
  }
});
