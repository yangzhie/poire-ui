// Utility for conditionally constructing class name strings
// Allows combine class names, handle conditional classes
import clsx, { ClassValue } from "clsx";
// Used to merge Tailwind CSS class names
import { twMerge } from "tailwind-merge";

// Combines + Merges CSS class names
export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));
