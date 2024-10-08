import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

// Define different styles for Button
const buttonStyles = cva(
  // Default style
  [
    "w-full",
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        solid: "",
        outline: "border-2",
        ghost: "transition-colors duration-300",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      },
      colorScheme: {
        primary: "text-blue",
      },
    },
    // When multiple variants are combined
    compoundVariants: [
      {
        variant: "solid",
        colorScheme: "primary",
        className: "bg-red-500 hover:bg-red-600",
      },
      {
        variant: "outline",
        colorScheme: "primary",
        className:
          "text-red-600 border-red-500 bg-transparent hover:bg-red-100",
      },
      {
        variant: "ghost",
        colorScheme: "primary",
        className: "text-red-600 bg-transparent hover:bg-red-100",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      colorScheme: "primary",
    },
  }
);

// With this, we have access to whatever attributes a button element has in index.stories and in cva
type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

// Forward a reference from a parent component down to a child component thus forwardRef is used
// Give the parent component direct access to a child component's DOM element
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, colorScheme, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size, colorScheme, className }))}
        {...props}
      />
    );
  }
);

export default Button;
