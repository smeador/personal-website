import { motion } from "framer-motion";

export default function WritingHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-2 md:mt-8"
    >
      <h1 className="section-title mb-4 md:mb-6">writing.</h1>
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium mb-8 md:mb-10">
        Thoughts on engineering leadership, technology, and building teams that create meaningful software.
      </p>
    </motion.div>
  );
}