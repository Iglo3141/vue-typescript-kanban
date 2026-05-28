# Vue 3 + TypeScript Kanban Board

A lightweight, fully typed Kanban Board built as a practice project to master Vue 3 component architecture, properties, and custom events (emits).

## 🚀 Features

- **Props Down, Events Up**: Strict architectural flow for state management.
- **TypeScript Core**: Fully typed interfaces for robust state handling.
- **Task Management**: Create tasks, advance statuses, and move items to a functional recycling bin.
- **Dockerized Workflow**: Containerized local development environment.

## 🛠️ Tech Stack

- Vue 3 (Composition API with `<script setup>`)
- TypeScript
- Vite
- Docker & Docker Compose
- HTML5 / CSS3 (Flexbox layout)

## 🔧 Installation & Setup

This project uses a containerized development environment via Docker. You do not need Node.js or npm installed on your local machine to run it.

### Prerequisites

Make sure you have [Docker Desktop](https://docker.com) installed and running.

### Running the App Locally

1. **Clone the repository:**

   ```bash
   git clone git@github.com:Iglo3141/vue-typescript-kanban.git
   cd vue-typescript-kanban
   ```

2. **Install dependencies inside the container:**
   Since the local directory is mounted as a volume, you need to run the install command inside an ephemeral container first:

   ```bash
   docker compose run --rm vue-dev npm install
   ```

3. **Start the development server:**

   ```bash
   docker compose up
   ```

4. **Access the application:**
   Open your browser and navigate to **[http://localhost:5173](http://localhost:5173)**.
