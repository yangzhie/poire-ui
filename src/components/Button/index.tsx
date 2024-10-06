import { ComponentProps } from "react";

// With this, we have access to whatever attributes a button element has in index.stories
type ButtonProps = ComponentProps<"button">;

const Button = ({ ...props }: ButtonProps) => {
  return (
    <>
      <button {...props} className="bg-orange-600" />
    </>
  );
};

export default Button;
