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
            Here you'll find my{" "}
            <a
              href="/writing"
              className="text-primary hover:underline font-medium"
            >
              writing
            </a>{" "}
            on software engineering and leadership. My blog is still a
            work-in-progress but more content is coming soon.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            You can also{" "}
            <a
              href="/about"
              className="text-primary hover:underline font-medium"
            >
              learn more about me
            </a>{" "}
            and explore my{" "}
            <a
              href="/experience"
              className="text-primary hover:underline font-medium"
            >
              professional journey and experience
            </a>
            .
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I'm always open to new connections with shared interests. Feel free
            to reach out if you'd like to connect.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
