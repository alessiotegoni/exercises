"use client";

import { useAtom } from "jotai";
import { todosAtom, type Todo } from "@/lib/atoms";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const [todos, setTodos] = useAtom(todosAtom);

  function toggleTodo() {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  }

  function deleteTodo() {
    setTodos(todos.filter((t) => t.id !== todo.id));
  }

  return (
    <div className="flex items-center gap-3 p-3 bg-card rounded-lg border group hover:shadow-sm transition-shadow">
      <Checkbox
        checked={todo.completed}
        onCheckedChange={toggleTodo}
        aria-label={`Mark "${todo.text}" as ${
          todo.completed ? "incomplete" : "complete"
        }`}
      />
      <span
        className={cn(
          "flex-1 text-sm",
          todo.completed && "line-through text-muted-foreground"
        )}
      >
        {todo.text}
      </span>
      <Button
        variant="ghost"
        size="icon"
        onClick={deleteTodo}
        className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label={`Delete "${todo.text}"`}
      >
        <X className="h-3 w-3" />
      </Button>
    </div>
  );
}
