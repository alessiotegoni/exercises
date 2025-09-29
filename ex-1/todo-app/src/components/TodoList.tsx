"use client";

import { useAtomValue } from "jotai";
import { todosAtom } from "@/lib/atoms";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const todos = useAtomValue(todosAtom);

  if (!todos.length) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <p>No tasks yet. Add one above to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
