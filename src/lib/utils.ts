import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { createZodFetcher } from "zod-fetch";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetchWithZod = createZodFetcher();
