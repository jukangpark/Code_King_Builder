import { ReactNode } from "react";

interface DropdownButtonProps {
  isActive?: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  children: ReactNode;
  className?: string;
}

export default function DropdownButton({
  isActive = false,
  onMouseEnter,
  onMouseLeave,
  children,
  className = "",
}: DropdownButtonProps) {
  const baseClasses =
    "px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap text-center";
  const activeClasses = isActive
    ? "text-purple-600"
    : "text-gray-700 hover:text-purple-600";

  const combinedClasses = `${baseClasses} ${activeClasses} ${className}`;

  return (
    <button
      className={combinedClasses}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  );
}
