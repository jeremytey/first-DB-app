# First DB App  
Vanilla JavaScript + IndexedDB

## Overview
This project introduces client-side data persistence using **IndexedDB**. Modern browsers include a full database engine that supports object stores, indexing, and transactions. The goal is to learn the IndexedDB flow while keeping the UI and business logic modular.

- A control panel with **Load DB**, **Query DB**, and **Clear DB** buttons  
- A notification panel for user-facing messages  
- A scrollable log area that records all actions  
- A results panel that displays customer records retrieved from the DB

The project comes with a `Customer` class that handles:
- Initial population of customer data  
- Clearing the database  

You will extend the class with a `queryAllRows()` method and build a UI that interacts with the class through clean event handlers.

---

## Features

### Required
- Load the DB with default customer records  
- Query all customer rows and display them  
- Clear all customer rows  
- Display status messages for each operation  
- Maintain a running log of all notifications  
- Show results or an “empty” message when no data exists  
- Scrollable panels for logs and results

### Bonus
- Button states change based on the last operation performed  
- Add new fields: **date of last order**, **total sales for the year**  
- Add a retrospective section (see below)

---

## Tech Stack
- Vanilla JavaScript (ES modules recommended)
- IndexedDB (browser-native database)
- HTML + CSS (minimal)

