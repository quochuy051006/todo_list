# Design: Todo Phase 3 - The Status

## Architecture
The application remains purely state-driven. We'll enhance the `render()` function to accurately display the `completed: true/false` state found in our `todos` array.

## UI Components
1. **Task Item (Completed State)**:
   - **Checkbox**: Input `checked` attribute matches `todo.completed`.
   - **Span**: Receives a `text-decoration: line-through` style.
   - **Edit Button**: Hidden via CSS using a `display: none` rule.
   - **Delete Button**: Remains visible for maintenance.

2. **Transition Animation**:
   - Strike keyframes to provide a smooth "growing" line effect.
   - Opacity transition for a subtle fade-out of the task row.

## Logic Flow
1. **Toggle Task Status**:
   - **Trigger**: Change event on the `<input type="checkbox">` via event delegation on our `<ul>`.
   - **Action**: Locate the todo by `data-id`, flip its `completed` boolean value, and trigger `render()`.

2. **Conditional Rendering**:
   - The `render()` loop will now add a `.completed` class to the `<li>` element if `todo.completed` is true.

## UI State Management
- Style Rule: `.completed { opacity: 0.6; background-color: #f8f9fa; }`.
- Style Rule: `.completed span { text-decoration: line-through; color: #888; }`.
- Style Rule: `.completed .edit-btn { display: none; }`.

## Interaction Logic
- Use **Event Delegation** specifically for the 'change' event on the checkbox.
- Update `render()` to handle the `checked` property of checkboxes based on their state value.
