import { motion } from "framer-motion";
import { useIsMobile } from "@/lib/useIsMobile";

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
  const { initialIsMobile } = useIsMobile();

  return (
    <motion.h2
      key={initialIsMobile ? "mobile" : "desktop"}
      initial={{ opacity: 0, x: initialIsMobile ? 0 : -20, y: initialIsMobile ? 20 : 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.h2>
  );
}
