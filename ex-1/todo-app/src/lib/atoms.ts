import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

export interface Todo {
  id: string
  text: string
  completed: boolean
  createdAt: Date
}

// Atom with localStorage persistence
export const todosAtom = atomWithStorage<Todo[]>("todos", [])

// Derived atom for remaining todos count
export const remainingTodosAtom = atom((get) => {
  const todos = get(todosAtom)
  return todos.filter((todo) => !todo.completed).length
})
