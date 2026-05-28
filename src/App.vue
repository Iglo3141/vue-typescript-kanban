<!-- App.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import KanbanColumn from './components/KanbanColumn.vue'
import type { Task, TaskStatus } from './types'

const taskId = ref<number>(3)

const newTaskTitle = ref<string>('')

const viewBinToggle = ref<boolean>(false)

// Tell the ref to expect an array of Tasks
const tasks = ref<Task[]>([
  { id: 1, title: 'Learn Vue', status: 'todo' },
  { id: 2, title: 'Learn TS', status: 'in-progress' },
])

function updateTaskStatus(taskId: number, newStatus: TaskStatus) {
  const task = tasks.value.find((t) => t.id === taskId)
  if (task) {
    task.status = newStatus
  }
}

function addNewTask() {
  // Prevent adding empty tasks or tasks with only spaces
  if (!newTaskTitle.value.trim()) return

  tasks.value.push({ id: taskId.value, title: newTaskTitle.value, status: 'todo' })
  taskId.value++
  newTaskTitle.value = ''
}
</script>

<template>
  <div class="wrapper">
    <h2>Project Tasks</h2>
    <!-- 1. The Active Board View -->
    <div v-if="!viewBinToggle" class="boardContainer">
      <div class="board">
        <!-- Filter tasks by status for each column -->
        <KanbanColumn
          title="To Do"
          :tasks="tasks.filter((t) => t.status === 'todo')"
          @move-task="updateTaskStatus"
        />
        <KanbanColumn
          title="In Progress"
          :tasks="tasks.filter((t) => t.status === 'in-progress')"
          @move-task="updateTaskStatus"
        />
        <KanbanColumn
          title="Done"
          :tasks="tasks.filter((t) => t.status === 'done')"
          @move-task="updateTaskStatus"
        />
      </div>
      <div class="addNewTaskContainer">
        <input v-model="newTaskTitle" placeholder="New Task" />
        <button @click="addNewTask">Add</button>
      </div>
    </div>

    <!-- 2. The Bin View -->
    <div v-else class="bin">
      <KanbanColumn
        title="Bin"
        :tasks="tasks.filter((t) => t.status === 'bin')"
        @move-task="updateTaskStatus"
      />
    </div>
    <div class="viewBinTogglerContainer">
      <button @click="viewBinToggle = !viewBinToggle">
        {{ viewBinToggle ? 'View Board' : 'View Bin' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  color: #0a0a0a;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 32px;
  box-sizing: border-box;
}
h2 {
  margin-top: 0;
  font-weight: 500;
}
.board {
  display: flex;
  gap: 24px;
  flex: 1;
}
.boardContainer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  flex: 1;
}
.bin {
  flex: 1;
  display: flex;
}
.addNewTaskContainer {
  display: flex;
  gap: 10px;
}
.viewBinTogglerContainer {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
