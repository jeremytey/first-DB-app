// ===== app.js =====
// event listeners and orchestration
import { Customer } from "./db.js";
import { updateStatus, addLog, renderResults } from "./dom.js";

const DBNAME = "customer_db";

// Query button handler (you must fill in the actual logic in db.js)
const queryDB = async () => {
  // pseudocode:
  // update status "query started"
  // call customer.queryAllRows()
  // if no rows → render "no results"
  // else render rows
  // update status "query finished"
  // add log entries in between
};

document.addEventListener("DOMContentLoaded", () => {
  // get elements
  const loadBtn = document.getElementById("loadBtn");
  const queryBtn = document.getElementById("queryBtn");
  const clearBtn = document.getElementById("clearBtn");

  // on Load DB
  loadBtn.addEventListener("click", () => {
    // pseudocode:
    // update status "loading db..."
    // addLog("start load")
    // call loadDB()
    // update status "load complete"
    // update button states
  });

  // on Query DB
  queryBtn.addEventListener("click", queryDB);

  // on Clear DB
  clearBtn.addEventListener("click", () => {
    // pseudocode:
    // update status "clearing db..."
    // call clearDB()
    // update status "db cleared"
    // update button states
    // clear results panel
  });
});
