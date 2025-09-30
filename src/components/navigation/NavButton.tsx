import Link from "next/link";

interface NavButtonProps {
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function NavButton({
  href,
  onClick,
  isActive = false,
  children,
  className = "",
}: NavButtonProps) {
  const baseClasses =
    "px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap text-center";
  const activeClasses = isActive
    ? "text-purple-600"
    : "text-gray-700 hover:text-purple-600";

  const combinedClasses = `${baseClasses} ${activeClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
}
