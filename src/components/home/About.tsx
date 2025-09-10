import { motion } from "framer-motion";

export default function About() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="mt-12"
      >
        <h2 className="section-title mb-8">about.</h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
          I am a devoted engineering leader who excels at building
          high-performing teams and scalable systems. My collaborative approach
          and strategic thinking make me a valuable partner in complex technical
          environments. Driven by a passion for innovation and an insatiable
          hunger for knowledge, I thrive on solving challenging problems and
          mentoring the next generation of engineers. My leadership philosophy
          emphasizes fostering creativity and technical excellence, and my
          affinity for emerging technologies continually shapes my approach to
          engineering. I invite you to explore my work so we can discover how
          our skills complement each other and achieve remarkable success in the
          realm of technology.
        </p>
      </motion.div>
    </div>
  );
}
