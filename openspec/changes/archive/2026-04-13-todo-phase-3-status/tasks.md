# Tasks: Todo Phase 3 - The Status

## Implementation Plan

### 1. Styling Enhancements
- [x] Create the `.completed` CSS class in `style.css`.
- [x] Add `text-decoration: line-through` and `color: #888` for children of `.completed`.
- [x] Add `opacity: 0.6` and `background: #f8f9fa` for the `.completed` row itself.
- [x] Add `display: none` for `.edit-btn` inside a `.completed` row.
- [x] (Optional) Add `@keyframes` for a strike animation for the line decoration.

### 2. JavaScript Logic (State & Rendering)
- [x] Implement `toggleTodo(id)`: Find the todo in the `todos` array and flip its `completed` boolean.
- [x] Update `render()` to add the `.completed` class to the `<li>` if `todo.completed` is true.
- [x] Update `render()` to set the `checked` attribute on the checkbox input based on its state.

### 3. Interaction & Events
- [x] Update the `<ul>` event listener to detect changes on the checkbox.
- [x] Wire the checkbox change to call `toggleTodo(id)`.

### 4. Verification
- [ ] Confirm ticking a checkbox applies the strikethrough and fade style.
- [ ] Confirm ticking a checkbox hides the "Edit" button.
- [ ] Confirm unticking a checkbox restores the "Edit" button and removes styling.
- [ ] Confirm deleting a completed task still works.
