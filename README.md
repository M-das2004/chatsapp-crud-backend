# ChatsApp 💬 

A minimalist full-stack chat management application that demonstrates **CRUD** operations using the **MVC (Model-View-Controller)** architecture.

---

## 🚀 Overview

Chatsapp allows users to manage a database of messages. It provides a clean interface to view chat history, initiate new conversations, edit existing messages, and delete records—all synced in real-time with a MongoDB database.



## 🛠️ Tech Stack

* **Backend:** Node.js & Express.js
* **Database:** MongoDB & Mongoose (ODM)
* **Frontend:** EJS (Embedded JavaScript) & CSS for styling
* **Method Override:** Used to support `PUT` and `DELETE` requests from the frontend.

## ✨ Key Features

* **Read:** Display all chats stored in the database with timestamps.
* **Create:** Form to add new messages with sender and receiver details.
* **Update:** Edit existing message content via a dedicated edit route.
* **Delete:** Remove messages instantly from the database.
* **Responsive UI:** Styled for both desktop and mobile viewing.

## 📂 Project Structure (MVC)

The project is organized following the **Model-View-Controller** pattern to ensure clean and scalable code:
- **Models:** Defines the chat schema using Mongoose.
- **Views:** EJS templates for rendering the Home, All Chats, New Chat, and Edit Chat pages.
- **Index.js (Controller/Routes):** Handles the logic for API endpoints and database interaction.

