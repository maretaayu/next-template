type ButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "sm" | "lg";
  label: string;
  className?: string;
};

function Button({
  disabled,
  onClick,
  variant = "primary",
  size = "lg",
  label,
  className,
}: ButtonProps) {
  const baseStyle = "px-4  rounded-full w-fit";
  const variantStyles = {
    primary: "bg-black text-white",
    secondary: "bg-gray-200 text-gray-800",
  };

  const sizeStyles = {
    sm: "text-sm py-2",
    lg: "text-lg py-3",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {label}
    </button>
  );
}

export { Button };
