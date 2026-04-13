/**
 * script.js - Todo Phase 3: The Status
 * Internal state is managed via an array of objects.
 * UI is updated by re-rendering the task list based on that state.
 */

/* --- State --- */
let todos = []; // Array of { id: number, text: string, completed: boolean }
let editingId = null; // Track which todo is currently being edited inline

/* --- Core Functions --- */

/**
 * Toggles the visibility of View Mode vs Input Mode (for ADDING).
 * @param {string} mode - 'view' or 'input'
 */
function toggleState(mode) {
    const viewArea = document.getElementById('view-mode');
    const inputArea = document.getElementById('input-mode');
    const inputField = document.getElementById('todo-input');
    
    if (mode === 'input') {
        viewArea.classList.add('hidden');
        inputArea.classList.remove('hidden');
        inputField.focus();
    } else {
        viewArea.classList.remove('hidden');
        inputArea.classList.add('hidden');
        inputField.value = ''; // Reset input
    }
}

/**
 * Toggles the completion state of a todo.
 * @param {number} id - The ID of the todo to toggle.
 */
function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        render(); // Re-render to show updated status
    }
}

/**
 * Re-renders the todo list to match the current state.
 */
function render() {
    const list = document.getElementById('todo-list');
    list.innerHTML = ''; // Wipe current list clean

    todos.forEach(todo => {
        const li = document.createElement('li');
        // We use data-id to help identify which todo we are interacting with
        li.setAttribute('data-id', todo.id);
        
        // Apply the .completed class if necessary
        if (todo.completed) {
            li.classList.add('completed');
        }

        li.innerHTML = `
            <div class="task-content">
                <input type="checkbox" ${todo.completed ? 'checked' : ''} class="status-checkbox">
                <span>${todo.text}</span>
            </div>
            <div class="task-actions">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        list.appendChild(li);
    });
}

/**
 * Handles saving a new task.
 */
function submitAdd() {
    const input = document.getElementById('todo-input');
    const text = input.value.trim();

    if (text === '') return;

    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    todos.push(newTodo);
    render();
    toggleState('view');
}

/**
 * Initiates the delete confirmation via a Modal.
 */
function openDeleteModal(id) {
    editingId = id; // Store ID to know what to delete if confirmed
    document.getElementById('delete-modal').classList.remove('hidden');
}

/**
 * Closes the delete confirmation modal.
 */
function closeDeleteModal() {
    editingId = null;
    document.getElementById('delete-modal').classList.add('hidden');
}

/**
 * Deletes a todo by its ID.
 */
function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    editingId = null;
    render();
    document.getElementById('delete-modal').classList.add('hidden');
}


/**
 * Inline Edit: Replaces list item content with an input field.
 */
function editTodo(id) {
    // If another todo is already being edited, we should re-render it back to view mode first
    if (editingId !== null && editingId !== id) {
        render();
    }

    const li = document.querySelector(`li[data-id="${id}"]`);
    const todo = todos.find(t => t.id === id);
    if (!li || !todo) return;

    editingId = id; // Lock state to this todo

    // Replace the <li> content with an input and Save/Cancel buttons
    li.innerHTML = `
        <div class="task-content">
            <input type="text" class="edit-input" value="${todo.text}">
        </div>
        <div class="task-actions">
            <button class="save-btn">Save</button>
            <button class="cancel-edit-btn">Cancel</button>
        </div>
    `;

    // Focus the new input field
    const input = li.querySelector('.edit-input');
    input.focus();
}

/**
 * Saves the inline edit.
 */
function saveEdit(id, newText) {
    const todo = todos.find(t => t.id === id);
    if (todo && newText.trim() !== '') {
        todo.text = newText.trim();
    }
    editingId = null; // Clear lock
    render();
}



/* --- Listeners --- */

// 1. Initial listener for 'Add New Task'
document.getElementById('add-task-btn').addEventListener('click', () => {
    toggleState('input');
});

// 2. Listener for 'Submit'
document.getElementById('submit-btn').addEventListener('click', submitAdd);

// 3. Listener for 'Cancel'
document.getElementById('cancel-btn').addEventListener('click', () => {
    toggleState('view');
});

// 4. Modal listeners
document.getElementById('modal-confirm-btn').addEventListener('click', () => {
    if (editingId) {
        deleteTodo(editingId);
    }
});

document.getElementById('modal-cancel-btn').addEventListener('click', closeDeleteModal);

// 5. Event Delegation on the <ul> for dynamic elements
document.getElementById('todo-list').addEventListener('click', (event) => {
    const target = event.target;
    // Walk up the tree to find the parent <li> which holds the ID
    const li = target.closest('li');
    if (!li) return;
    const id = Number(li.getAttribute('data-id'));

    if (target.classList.contains('delete-btn')) {
        openDeleteModal(id);
    } else if (target.classList.contains('edit-btn')) {
        editTodo(id);
    } else if (target.classList.contains('save-btn')) {
        const input = li.querySelector('.edit-input');
        saveEdit(id, input.value);
    } else if (target.classList.contains('cancel-edit-btn')) {
        editingId = null; // Clear lock
        render(); // Just re-render to discard changes
    } else if (target.classList.contains('status-checkbox')) {
        toggleTodo(id);
    }
});



/* --- Seed Data (Optional for Phase 2 visibility) --- */
todos = [
    { id: 1, text: 'Buy milk (Seed)', completed: false },
    { id: 2, text: 'Learn SDD (Seed)', completed: false }
];
render();


