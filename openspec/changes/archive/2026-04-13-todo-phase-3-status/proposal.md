# Proposal: Todo Phase 3 - The Status

## Background
Phase 2 transformed our static page into a "Mutator" capable of adding, editing, and deleting tasks. However, the checkboxes—while visually present—are currently non-functional and do not reflect or update the internal state of the tasks.

## Problem
Users cannot mark tasks as completed. Without this visual and logical feedback, the todo list fails to fulfill its primary purpose of tracking progress.

## Scope
- **In-Scope**:
  - **Visual Completion**: Implementation of CSS styles to provide visual feedback (strikethrough and fade) when a task is completed.
  - **State Toggle**: JavaScript logic to toggle the `completed` property of a todo object in the state array.
  - **Dynamic UI**: Hiding the "Edit" button for completed tasks to prevent modification of finished work.
  - **Animations**: Subtle "strike-and-fade" transition when a task status changes.

## Success Criteria
- Tapping a checkbox correctly toggles the `completed` state in the `todos` array.
- Completed tasks visually show a line through the text and a slight fade effect.
- The "Edit" button disappears when a task is marked as completed.
- Unticking a completed task restores its original appearance and the "Edit" button.
