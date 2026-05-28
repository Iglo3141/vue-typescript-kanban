<!-- KanbanCard.vue -->
<script setup lang="ts">
import type { TaskStatus } from '../types'

const props = defineProps<{
  id: number
  title: string
  status: TaskStatus
}>()

// Define exactly what the emit name is, and what arguments it requires
const emit = defineEmits<{
  (e: 'move', taskId: number, newStatus: TaskStatus): void
}>()

function moveToRight() {
  switch (props.status) {
    case 'todo':
      emit('move', props.id, 'in-progress')
      break
    case 'in-progress':
    case 'done':
      emit('move', props.id, 'done')
  }
}

function moveToLeft() {
  switch (props.status) {
    case 'done':
      emit('move', props.id, 'in-progress')
      break
    case 'in-progress':
    case 'todo':
      emit('move', props.id, 'todo')
  }
}

function moveToBin() {
  emit('move', props.id, 'bin')
}

function restoreFromBin() {
  emit('move', props.id, 'todo')
}
</script>

<template>
  <div class="task">
    <h4>{{ props.id }} -- {{ props.title }}</h4>
    <div class="taskActionsContainer">
      <button v-if="props.status !== 'bin'" @click="moveToLeft"><</button>
      <button v-if="props.status !== 'bin'" @click="moveToRight">></button>
      <button v-if="props.status !== 'bin'" @click="moveToBin">Delete</button>
      <button v-if="props.status === 'bin'" @click="restoreFromBin">Restore</button>
    </div>
  </div>
</template>

<style scoped>
.task {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px;
  border-radius: 10px;
}
.task:hover {
  box-shadow:
    0 2px 3px 0px rgb(0 0 0 / 0.1),
    0 1px 2px -1px rgb(0 0 0 / 0.1);
}
h4 {
  margin-top: 0;
  font-weight: 500;
}
.taskActionsContainer {
  display: flex;
  gap: 15px;
  font-size: 14px;
}
</style>
