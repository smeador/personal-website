import { motion } from "framer-motion";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  animationDelay?: number;
}

export default function SectionTitle({
  children,
  className = "",
  animationDelay = 0,
}: SectionTitleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: animationDelay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.h2>
  );
}
