<!-- KanbanColumn.vue -->
<script setup lang="ts">
import type { Task, TaskStatus } from '../types'
import KanbanCard from './KanbanCard.vue'

// Use angle brackets < > to define the TypeScript types for your props
const props = defineProps<{
  title: string
  tasks: Task[] // An array of Task objects
}>()

// Define exactly what the emit name is, and what arguments it requires
const emit = defineEmits<{
  (e: 'move-task', taskId: number, newStatus: TaskStatus): void
}>()
</script>

<template>
  <div class="column">
    <h3>{{ props.title }}</h3>
    <ul class="tasks">
      <li v-for="task in props.tasks" :key="task.id">
        <KanbanCard
          @move="
            (taskId, newStatus) => {
              emit('move-task', taskId, newStatus)
            }
          "
          :id="task.id"
          :title="task.title"
          :status="task.status"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.column {
  border-radius: 10px;
  background-color: #fafafa;
  padding: 16px;
  box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
}
.column:hover {
  box-shadow: 2px 3px 2px 1px rgba(0, 0, 0, 0.1);
}
h3 {
  margin-top: 0;
  font-weight: 500;
}
.column {
  flex: 1;
}
ul.tasks {
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
