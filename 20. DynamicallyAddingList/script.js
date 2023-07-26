// Pre-existing array of list items
const itemList = [
    "HTML",
    "CSS",
    "Version Control System",
    "Javascript",
    "ReactJs",
    "Networking",
    "Database",
    "NodeJs",
    "ExpressJs"
  ];
  
  let currentIndex = 0;
  
  document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("addButton");
    const listContainer = document.getElementById("listContainer");
    const message = document.getElementById("message");
  
    addButton.addEventListener("click", () => {
      if (currentIndex < itemList.length) {
        const listItem = document.createElement("li");
        listItem.textContent = itemList[currentIndex];
        listContainer.appendChild(listItem);
        currentIndex++;
      }
  
      if (currentIndex === itemList.length) {
        message.textContent = "All items have been added.";
        addButton.disabled = true;
      }
    });
  });
  