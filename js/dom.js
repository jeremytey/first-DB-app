// ===== dom.js =====

// update small status panel
export function updateStatus(message) {
  const statusElement = document.getElementById("statusMsg");
  statusElement.innerHTML= '';
  statusElement.textContent = message;
}

// add entries to the log panel
export function addLog(message) {
  const logOutput = document.getElementById("logOutput");
  const logEntry = document.createElement("div");
  const timestamp = new Date().toLocaleTimeString();
  logEntry.textContent = `[${timestamp}] ${message}`;
  logOutput.appendChild(logEntry);
  logOutput.scrollTop = logOutput.scrollHeight;
}

// show query results
export function renderResults(customers) {
  const resultList = document.getElementById("resultList");
  resultList.innerHTML = ''; // clear previous results

  if (customers.length === 0) {
    resultList.textContent = "No results";
    return;
  } else {
    customers.forEach(customer => {
      const customerDiv = document.createElement("div");
      customerDiv.classList.add("customer-entry");
      customerDiv.textContent = `UserID: ${customer.userid}, Name: ${customer.name}, Email: ${customer.email}, Last Order Date: ${customer.lastOrderDate}, Sales Total: $${customer.salesTotal.toFixed(2)}`;
      resultList.appendChild(customerDiv);
    });
  }
}
