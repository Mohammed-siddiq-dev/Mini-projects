# Todo List Application

A simple and interactive Todo List web application that allows users to add and delete tasks with due dates. Built using HTML, CSS, and JavaScript, with persistent storage via `localStorage`.

## Features

- **Add Todos**: Enter a task name and select a due date, then click the "Add" button.
- **Delete Todos**: Remove tasks individually using the "Delete" button next to each item.
- **Persistent Storage**: Todos are saved in the browser's `localStorage` and persist after page reloads.
- **Responsive Grid Layout**: Clean and organized UI using CSS Grid for input fields and todo items.

## Installation

1. Clone the repository or download the files (`11-todo-list.html`, `11-todo-list.css`, `11-todo-list.js`).
2. Open `11-todo-list.html` in a web browser.

## Usage

1. **Add a Todo**:
   - Type a task name in the "Todo name" input field.
   - Select a due date using the date picker.
   - Click the green **Add** button to save the task.

2. **Delete a Todo**:
   - Click the red **Delete** button next to any task to remove it.

## Code Structure

- **HTML**: Defines the input fields, buttons, and todo list container.
- **CSS**: Styles the layout, buttons, and grid structure for inputs and todos.
- **JavaScript**:
  - Manages todo creation, deletion, and `localStorage` updates.
  - Initializes with a default placeholder todo if no data exists.

## Styling Details

- **Buttons**:
  - Add button: Green (`#14cd0e`).
  - Delete button: Red (`#c40e0e`).
- **Grid Layout**:
  - Input section and todo items use a 3-column grid.
  - Responsive spacing with `column-gap` and `row-gap`.

## Notes

- The default placeholder todo ("Enter name of todo" and "Enter duedate") appears only when the list is empty.
- Data is saved automatically to `localStorage` when adding todos.

## License

This project is open-source and free to use.