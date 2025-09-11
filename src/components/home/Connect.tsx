import { motion } from "framer-motion";
import {
  EmailIcon,
  LinkedInIcon,
  SubstackIcon,
  GitHubIcon,
  XIcon,
} from "../icons";

export default function Connect() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        className="mt-12"
      >
        <h2 className="section-title mb-8">connect.</h2>
        <div className="space-y-3">
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
  );
}
