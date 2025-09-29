"use client";

import type React from "react";

import { useState } from "react";
import { useAtom } from "jotai";
import { todosAtom, type Todo } from "@/lib/atoms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

export function TodoInput() {
  const [todos, setTodos] = useAtom(todosAtom);
  const [inputValue, setInputValue] = useState("");

  function addTodo() {
    if (inputValue.trim()) {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        text: inputValue.trim(),
        completed: false,
        createdAt: new Date(),
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  }

  function handleKeyPress(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      addTodo();
    }
  }

  return (
    <div className="flex gap-2 mb-6">
      <Input
        type="text"
        placeholder="Add new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        className="flex-1"
        aria-label="Add new task"
      />
      <Button
        onClick={addTodo}
        size="icon"
        className="shrink-0"
        aria-label="Add task"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
