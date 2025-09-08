import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              <img
                src="/images/profile.jpg"
                alt="Sean Meador"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-border shadow-lg"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 160 160' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='160' height='160' fill='%23f1f5f9'/%3E%3Cpath d='M80 80m-30 0a30 30 0 1 0 60 0a30 30 0 1 0 -60 0' fill='%23cbd5e1'/%3E%3Cpath d='M80 95c-16.569 0-30 13.431-30 30v35h60v-35c0-16.569-13.431-30-30-30z' fill='%23cbd5e1'/%3E%3C/svg%3E";
                }}
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Sean Meador
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium">
              Software Engineer & Writer
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I build elegant, performant web applications and write about the intersection 
              of technology and human experience. Passionate about creating digital solutions 
              that make a meaningful impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}