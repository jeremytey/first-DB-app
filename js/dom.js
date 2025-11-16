// ===== dom.js =====

// update small status panel
export function updateStatus(message) {
  const statusElement = document.getElementById("statusMsg");
  statusElement.innerHTML= '';
  statusElement.textContent = message;
}

// add entries to the log panel
export function addLog(message) {
  // pseudocode:
  // append a new <div> with timestamp + message
  // maintain scroll-to-bottom behavior
}

// show query results
export function renderResults(customers) {
  // pseudocode:
  // if array empty → show "No results"
  // else iterate and build divs for each customer
  // format: userid, name, email, last order date, sales total
}
