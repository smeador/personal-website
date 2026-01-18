import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="mt-12"
      >
        <h2 className="section-title mb-8">welcome.</h2>
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Thanks for stopping by! This is my corner of the internet where I
            share thoughts on engineering leadership, technology, and the art of
            building great teams.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Here you'll find{" "}
            <a
              href="/writing"
              className="text-primary hover:underline font-medium"
            >
              articles
            </a>{" "}
            on software engineering, leadership lessons learned along the way,
            and occasional deep dives into the technologies shaping our
            industry. You can also explore my{" "}
            <a
              href="/experience"
              className="text-primary hover:underline font-medium"
            >
              professional background
            </a>{" "}
            or{" "}
            <a
              href="/about"
              className="text-primary hover:underline font-medium"
            >
              learn more about me
            </a>
            .
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Whether you're here to read, connect, or just curious—I'm glad
            you're here. Feel free to reach out if you'd like to chat!
          </p>
        </div>
      </motion.div>
    </div>
  );
}
