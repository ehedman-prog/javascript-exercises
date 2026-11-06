/* Lesson 6:
Instructions

Create a small app to track books you’ve read or want to read (If you are not into books, feel free to change it to movies, etc). Use prompt and alert to simulate the menu.

You will:

· Use objects to represent books

· Store multiple books in an array

· Write functions to add, list and update books

Requirements:

1. A library array to store all book objects

2. Each book should have:

· Title

· Author

· isRead

3. Implement these functions:

· addBook() – asks for details and adds a new book object to the library

· listBooks() – display a list of all books (console.log works fine here)

· markAsRead(title) – finds a book by title and sets isRead to true */

/* 1. 
*/

while (running) {
    const choice = prompt(`
        Game Tracker
        1. Add Game
        2. List Games
        3. Mark Game as Completed
        4. Exit
        Enter your choice:`);

    switch (choice) {
        case "1":
            addGame();
            break;
        case "2":
            listGame();
            break;
        case "3":
            const title = prompt ("enter the title of the game to mark as completed")
            markAsCompleted(title);
            break;
        case "4":
            running = false;
            alert("Goodbye!");
            break;
        default:
            alert("Invalid choice.");
    }
}