let display = document.getElementById("display");
let historyList = document.getElementById("historyList");
let darkMode = false;

function appendValue(value) {
  if (display.value === "0") display.value = "";
  display.value += value;
}

function clearDisplay() {
  display.value = "0";
}

function deleteLast() {
  display.value = display.value.slice(0, -1) || "0";
}

function calculate() {
  try {
    let result = eval(display.value);
    addToHistory(display.value + " = " + result);
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

function addToHistory(entry) {
  let li = document.createElement("li");
  li.textContent = entry;
  historyList.appendChild(li);
}

function clearHistory() {
  historyList.innerHTML = "";
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}