# Tasks: Todo Phase 2 - The Mutator

## Implementation Plan

### 1. Initialization
- [x] Create `script.js` in the root directory.
- [x] Link `script.js` to `index.html` (at the bottom of `<body>`).

### 2. HTML Structure Enhancements
- [x] Add `<div id="view-mode">` with the "Add New Task" button.
- [x] Add `<div id="input-mode" class="hidden">` with the input, "Submit," and "Cancel" buttons.
- [x] Replace the static `<ul>` items with a container ready for dynamic list items.

### 3. Styling Enhancements
- [x] Create the `.hidden { display: none; }` CSS class for UI state management.
- [x] Style the "Input Mode" to use a layout that looks good on the full-width screen (centered row).
- [x] Style the "Edit" and "Delete" buttons within the `<li>` (small, distinct colors).
- [x] Use `display: flex` and `justify-content: space-between` on `<li>` so buttons stay on the far right.

### 4. JavaScript Logic (State & Core)
- [x] Create an empty `let todos = []` array.
- [x] Implement `toggleState(mode)` to show/hide respective view/input areas.
- [x] Implement `render()`: Clear list, loop through array, and append `<li>` with actions.
- [x] Implement `submitAdd()`: Add current input to array, call `render()`, and revert to View Mode.
- [x] Implement `deleteTodo(id)`: Remove ID from array and re-render (with a custom Modal confirmation).
- [x] Implement `editTodo(id)`: Inline edit - replace `<li>` content with an input field and Save/Cancel buttons.

### 5. Interaction & Events
- [x] Add listener for "Add New Task" to call `toggleState('input')`.
- [x] Add listener for "Submit" button click.
- [x] Add listener for "Cancel" button click.
- [x] Add listener on `<ul>` (event delegation) for Delete and Edit actions.

### 6. Verification
- [x] Confirm adding a task works via click.
- [x] Confirm deleting a task removes it from the screen and array.
- [x] Confirm editing a task updates the text correctly.
