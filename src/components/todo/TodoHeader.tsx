"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export function TodoHeader() {
  return (
    <div>
      <h1 className="font-bold text-xl">Ongoing Todos</h1>
      <Button variant="link" asChild>
        <Link href="/completed">Completed Todos</Link>
      </Button>
    </div>
  );
}
