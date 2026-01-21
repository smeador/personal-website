import { motion } from "framer-motion";
import { DownloadIcon } from "../icons";

export default function ExperienceHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-2 md:mt-8"
    >
      {/* Title and Desktop Resume Button */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 md:mb-6">
        <div className="flex-1">
          <h1 className="section-title mb-4 md:mb-0">experience.</h1>
        </div>
        <div className="hidden md:block md:ml-8">
          <a
            href="/docs/resume-sean-meador.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm"
          >
            <DownloadIcon className="w-4 h-4" />
            Resume
          </a>
        </div>
      </div>

      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium mb-6">
        My professional journey and experience so far. Yes, this is also on
        LinkedIn but I had fun creating this page.
      </p>

      {/* Mobile Resume Button */}
      <div className="md:hidden mb-8 md:mb-10">
        <a
          href="/docs/resume-sean-meador.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm"
        >
          <DownloadIcon className="w-4 h-4" />
          Resume
        </a>
      </div>
    </motion.div>
  );
}
