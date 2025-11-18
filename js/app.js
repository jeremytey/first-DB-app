import { queryAllRows, Customer } from "./db.js";
import { updateStatus, addLog, renderResults } from "./dom.js";

const customerData = [
  { userid: 1, name: "Alice", email: "alice@example.com", lastOrderDate: "2024-01-01", salesTotal: 120 },
  { userid: 2, name: "Bob", email: "bob@example.com", lastOrderDate: "2024-02-15", salesTotal: 300 },
];
document.addEventListener("DOMContentLoaded", () => {
  const loadBtn = document.getElementById("loadBtn");
  const queryBtn = document.getElementById("queryBtn");
  const clearBtn = document.getElementById("clearBtn");

  const customerDB = new Customer("customersDB");

  queryBtn.disabled = true;
  clearBtn.disabled = true;

  // LOAD
  loadBtn.addEventListener("click", async () => {
    updateStatus("Loading database...");
    addLog("Starting DB load...");

    await customerDB.initialLoad(customerData);

    updateStatus("Database loaded.");
    addLog("DB load finished.");

    loadBtn.disabled = true;
    queryBtn.disabled = false;
    clearBtn.disabled = false;
  });

  // QUERY
  queryBtn.addEventListener("click", async () => {
    updateStatus("Querying database...");
    addLog("Query started...");

    const rows = await queryAllRows();
    renderResults(rows);

    updateStatus("Query complete.");
    addLog(`Returned ${rows.length} rows.`);
  });

  // CLEAR
  clearBtn.addEventListener("click", async () => {
    updateStatus("Clearing database...");
    addLog("Clear started...");

    await customerDB.removeAllRows();

    updateStatus("Database cleared.");
    addLog("Clear finished.");

    document.getElementById("resultList").innerHTML = "";

    queryBtn.disabled = true;
    clearBtn.disabled = true;
    loadBtn.disabled = false;
  });
});
