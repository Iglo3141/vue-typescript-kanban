// src/types.ts

// 1. Define the only allowed statuses using a Union Type
export type TaskStatus = 'todo' | 'in-progress' | 'done' | 'bin'

// 2. Define the structure of a single Task object
export interface Task {
  id: number
  title: string
  status: TaskStatus // Must be one of the three options above
}
