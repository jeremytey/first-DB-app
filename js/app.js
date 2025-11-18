// ===== app.js =====
import { loadDB, clearDB, queryAllRows } from "./db.js";
import { updateStatus, addLog, renderResults } from "./dom.js";

document.addEventListener("DOMContentLoaded", () => {
  const loadBtn = document.getElementById("loadBtn");
  const queryBtn = document.getElementById("queryBtn");
  const clearBtn = document.getElementById("clearBtn");

  // intial buttons disabled 
  queryBtn.disabled = true;
  clearBtn.disabled = true;

  // Load DB, populate with initial data
  loadBtn.addEventListener("click", async () => {
    updateStatus("Loading database...");
    addLog("Starting DB load...");

    await loadDB();

    updateStatus("Database loaded.");
    addLog("DB load finished.");

    loadBtn.disabled = true;
    queryBtn.disabled = false;
    clearBtn.disabled = false;
  });

  // Query DB and render results
  queryBtn.addEventListener("click", async () => {
    updateStatus("Querying database...");
    addLog("Query started...");

    const rows = await queryAllRows();
    renderResults(rows);

    updateStatus("Query complete.");
    addLog(`Returned ${rows.length} rows.`);
  });

  // Clear DB
  clearBtn.addEventListener("click", async () => {
    updateStatus("Clearing database...");
    addLog("Clear started...");

    await clearDB();

    updateStatus("Database cleared.");
    addLog("Clear finished.");

    document.getElementById("resultList").innerHTML = "";
    queryBtn.disabled = true;
    clearBtn.disabled = true;
    loadBtn.disabled = false;
  });
});
