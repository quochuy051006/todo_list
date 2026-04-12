# Proposal: Todo Phase 2 - The Mutator

## Background
Phase 1 established the "Baseline" with a static list of seed tasks. Phase 2 moves into the "Mutation" phase, making the web page interactive and allowing users to modify the state of the list.

## Problem
The current list is static. Users need a way to add new tasks, delete existing ones, and update task text.

## Scope
- **In-Scope**:
  - UI State: Implementation of "View Mode" and "Add Mode" (hiding/showing elements).
  - HTML/CSS: "Add New Task" button for View Mode.
  - HTML/CSS: Text Input + "Submit" button for Add Mode.
  - HTML/CSS: "Delete" and "Edit" buttons for each task item.
  - JS: Create `script.js` to manage the todo data array and UI state toggling.
  - JS: Core logic functions: `showAddMode()`, `addTodo()`, `deleteTodo()`, and `editTodo()`.

## Success Criteria
- Clicking "Add New Task" hides the button and shows the input form.
- Clicking "Submit" adds the task to the list and returns to View Mode.
- Deleting and Editing tasks correctly updates the internal array and list display.
