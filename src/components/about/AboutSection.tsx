import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <div className="mt-2 md:mt-8">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="section-title mb-6 md:mb-8"
      >
        about.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        className="prose prose-lg max-w-none"
      >
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            I'm a mission-driven engineering leader with over 15 years of
            experience building apps, scaling systems, and managing teams. I
            embrace lifelong learning, and my career has taken me from mobile
            development to full-stack and systems engineering as I've followed
            my curiosity to new domains.
          </p>

          <p>
            I'm entrepreneurial by nature and thrive in fast-paced environments.
            I founded my own company out of college and joined two high-growth
            startups as an early employee. I've developed several products from
            zero-to-one, and led teams from a few people to full departments. I
            have a track record of scaling teams and solving organizational and
            operational challenges to achieve durable results.
          </p>

          <p>
            I love the process of diving deep into a problem and collaborating
            with Product and customers to create truly useful solutions. I'm
            currently focused on applying AI in enterprise settings, using
            thoughtfully designed interfaces and domain expertise to solve
            real-world problems. With my work at Afresh, this has resulted in
            20% average waste reduction for retailers and over 200 million
            pounds of food waste averted in total.
          </p>

          <p>
            I believe great engineering starts and ends with great people. I
            foster cultures based on trust, ownership, and curiosity, where
            people feel connected and empowered to do their best work. I've had
            the privilege to be part of and lead teams with incredibly talented
            engineers who care about their craft and each other.
          </p>

          <p>
            I grew up in Dallas and then left for California to study CS at
            Stanford. I lived and worked in San Francisco for many years before
            returning back to Texas a few years ago to be closer to family. I
            now live in the great city of Austin with my wife and our son who
            joined us in 2025.
          </p>

          <p>
            See my{" "}
            <a
              href="/experience"
              className="text-primary hover:underline font-medium"
            >
              experience
            </a>{" "}
            for more details about my professional journey.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
