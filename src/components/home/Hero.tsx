import { motion } from "framer-motion";
import { EmailIcon, LinkedInIcon, SubstackIcon, GitHubIcon, XIcon } from "../icons";

export default function Hero() {
  return (
    <section className="pt-8 md:pt-2 pb-20">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Mobile: Profile above title, Desktop: Side by side */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 md:items-center md:min-h-[400px] items-center md:items-center">
          {/* Profile image - First on mobile, Second on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center relative z-20 order-1 md:order-2 mt-4 md:mt-0"
          >
            <div className="relative">
              {/* Organic background shape - responsive size */}
              <motion.div
                initial={{ opacity: 0, rotate: 180, scale: 0.8 }}
                animate={{ opacity: 0.3, rotate: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="absolute inset-0 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-br from-coral/20 via-peach/30 to-cream/40 rounded-full blur-lg -z-10 transform -translate-x-4 -translate-y-4"
              />

              <img
                src="/images/profile.jpg"
                alt="Sean Meador"
                className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover border-4 border-white shadow-xl relative z-30"
              />
            </div>
          </motion.div>

          {/* Text content - Second on mobile, First on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6 text-center md:text-left relative z-10 order-2 md:order-1 mt-2 md:mt-0"
          >
            <div className="space-y-2">
              <p className="text-2xl md:text-3xl lg:text-4xl text-foreground font-medium">
                Hello, I'm Sean,
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-coral tracking-tight leading-tight">
                Engineering Leader
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                based in Austin, TX.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Austin Skyline Container */}
      <div className="container mx-auto max-w-5xl px-4 mb-4 skyline-responsive-margin">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="w-full pointer-events-none relative z-0"
        >
          <div
            className="w-full h-32 md:h-56 lg:h-64 bg-center bg-no-repeat austin-skyline-bg"
            style={{
              backgroundImage: "url(/images/austin-skyline.png)",
              backgroundSize: "contain",
            }}
          />
        </motion.div>
      </div>

      <div className="container mx-auto max-w-5xl px-4">
        {/* About section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-12"
        >
          <h2 className="section-title mb-8">about.</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
            I am a devoted engineering leader who excels at building
            high-performing teams and scalable systems. My collaborative
            approach and strategic thinking make me a valuable partner in
            complex technical environments. Driven by a passion for innovation
            and an insatiable hunger for knowledge, I thrive on solving
            challenging problems and mentoring the next generation of engineers.
            My leadership philosophy emphasizes fostering creativity and
            technical excellence, and my affinity for emerging technologies
            continually shapes my approach to engineering. I invite you to
            explore my work so we can discover how our skills complement each
            other and achieve remarkable success in the realm of technology.
          </p>
        </motion.div>

        {/* Contact section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-12"
        >
          <h2 className="section-title mb-8">connect.</h2>
          <div className="space-y-4 text-left">
            <div className="flex items-center space-x-3">
              <EmailIcon className="w-5 h-5 text-coral" />
              <a
                href="mailto:sean@meador.me"
                className="text-lg text-foreground hover:text-coral transition-colors"
              >
                sean@meador.me
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <LinkedInIcon className="w-5 h-5 text-coral" />
              <a
                href="https://linkedin.com/in/seanmeador"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-foreground hover:text-coral transition-colors"
              >
                seanmeador
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <GitHubIcon className="w-5 h-5 text-coral" />
              <a
                href="https://github.com/smeador"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-foreground hover:text-coral transition-colors"
              >
                smeador
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <SubstackIcon className="w-5 h-5 text-coral" />
              <a
                href="https://substack.com/@smeador"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-foreground hover:text-coral transition-colors"
              >
                @smeador
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <XIcon className="w-5 h-5 text-coral" />
              <a
                href="https://x.com/seanmeador"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-foreground hover:text-coral transition-colors"
              >
                @seanmeador
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
