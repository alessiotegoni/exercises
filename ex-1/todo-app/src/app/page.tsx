"use client";

import { useAtomValue } from "jotai";
import { remainingTodosAtom } from "@/lib/atoms";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TodoInput } from "@/components/TodoInput";
import { TodoList } from "@/components/TodoList";

export default function HomePage() {
  const remainingTodos = useAtomValue(remainingTodosAtom);

  return (
    <main className="min-h-screen bg-muted/30 py-8 px-4">
      <div className="max-w-md mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-semibold">Your To Do</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <TodoInput />
            <TodoList />
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground text-center">
                Your remaining todos:{" "}
                <span className="font-medium">{remainingTodos}</span>
              </p>
              <blockquote className="mt-3 text-xs text-muted-foreground text-center italic">
                "Doing what you love is the cornerstone of having abundance in
                your life." - Wayne Dyer
              </blockquote>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
