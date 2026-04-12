# Design: Todo Phase 2 - The Mutator

## Architecture
A more dynamic environment where JavaScript manages the "State" (an array of todo objects).

## UI Structure
The existing `#web-container` will alternate between two visual states: **View Mode** and **Input Mode**.

### Component Map
1. **View Mode Area**:
   - "Add New Task" button: Large button that switches the app to Input Mode.
2. **Input Mode Area (Hidden by default)**:
   - Text Input: Box to type the new task.
   - "Submit" button: Adds the task and returns to View Mode.
   - "Cancel" button: Discards input and returns to View Mode.
3. **Task List (Dynamic)**:
   - Checkbox (status handled in Phase 3).
   - Task text content.
   - Action buttons: "Edit" and "Delete."

## Logic Flow
1. **Show Input**:
   - Trigger: "Add New Task" button click.
   - Action: Hide View Mode Area, Show Input Mode Area, focus the input field.
2. **Submit Add**:
   - Trigger: "Submit" button click.
   - Action: Push new todo to array, refresh list, Hide Input Mode Area, Show View Mode Area.
3. **Delete/Edit**:
   - Logic as previously defined: Update array based on ID, call re-render.

## UI State Management
- Use CSS class `.hidden { display: none; }` to toggle visibility.
- All state changes must trigger a call to the `render()` function to synchronize the array with the DOM.

## Interaction Logic
- Use **Event Delegation** on the `<ul>` to handle clicks on dynamically created delete/edit buttons.
- Ensure the input is cleared and refocused after a successfull addition.
