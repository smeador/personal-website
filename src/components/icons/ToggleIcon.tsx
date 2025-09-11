import { motion } from "framer-motion";

interface ToggleIconProps {
  className?: string;
  isExpanded: boolean;
}

export default function ToggleIcon({
  className = "w-5 h-5",
  isExpanded = false,
}: ToggleIconProps) {
  return (
    <motion.svg
      animate={{ rotate: isExpanded ? 180 : 0 }}
      transition={{ duration: 0.3 }}
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </motion.svg>
  );
}
