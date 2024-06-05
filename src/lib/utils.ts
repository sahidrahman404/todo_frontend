import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { createZodFetcher } from "zod-fetch";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetchWithZod = createZodFetcher();

export function isDateAlmostDue(dueDate: Date, threshold: number = 1) {
  const due = new Date(dueDate);

  const now = new Date();

  const timeDiff = due.getTime() - now.getTime();

  const thresholdMs = threshold * 24 * 60 * 60 * 1000; // Threshold in days

  // Check if the time difference is less than or equal to the threshold
  return timeDiff <= thresholdMs;
}
