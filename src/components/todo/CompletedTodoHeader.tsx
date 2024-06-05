"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export function CompletedTodoHeader() {
  return (
    <div>
      <h1 className="font-bold text-xl">Completed Todos</h1>
      <Button variant="link" asChild>
        <Link href="/">Ongoing Todos</Link>
      </Button>
    </div>
  );
}
