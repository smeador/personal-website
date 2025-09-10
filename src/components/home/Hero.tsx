import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="container">
      {/* Mobile: Profile above title, Desktop: Side by side */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 md:min-h-[400px] items-center">
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

      {/* Austin Skyline Container */}
      <div className="container skyline-responsive-margin">
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
    </div>
  );
}
