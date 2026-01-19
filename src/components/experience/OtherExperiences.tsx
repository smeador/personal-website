import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useIsMobile } from "@/lib/useIsMobile";

interface OtherExperiencesProps {
  animationDelay?: number;
}

export default function OtherExperiences({ animationDelay = 0 }: OtherExperiencesProps) {
  const { initialIsMobile } = useIsMobile();

  const linkClass = "underline decoration-muted-foreground/50 hover:text-primary hover:decoration-primary transition-colors";

  const experiences = [
    <>
      Technical advisor to multiple early-stage startups (2024-2025): 
      The Weet, a finance app which aggregates expert stock predictions;
      Proxi, a social networking app for creating warm intros.
    </>,
    <>
      Dub Hacks (2014): Presented on{" "}
      <a href="/images/experience-dubhacks-presentation.jpg" target="_blank" rel="noopener noreferrer" className={linkClass}>
        client-server architecture and design
      </a>{" "}
      at the hackathon for the University of Washington.
    </>,
    <>
      Published paper in SPIE (2009):{" "}
      <a href="https://www.spiedigitallibrary.org/conference-proceedings-of-spie/7240/72401O/Painted-or-printed-Correlation-analysis-of-the-brickwork-in-Jan/10.1117/12.817186.short" target="_blank" rel="noopener noreferrer" className={linkClass}>
        Painted or Printed? Correlation analysis of brickwork…
      </a>{" "}
      w/ Prof. David Stork and Petria Nobel. Used computational image analysis
      to explore patterns in a classical art piece.
    </>,
    <>
      Graduate project (2008):{" "}
      <a href="/docs/project-interactive-relighting.pdf" target="_blank" rel="noopener noreferrer" className={linkClass}>
        Interactive Lighting of Macro Photography
      </a>{" "}
      w/ Alexis Chan. Implemented a GUI and algorithms to relight macro
      photography dynamically.
    </>,
    <>
      [For fun] Swift Summit (2017): The conference happened to fall on
      Halloween, so I role-played as a{" "}
      <a href="/images/experience-apple-presenter.jpg" target="_blank" rel="noopener noreferrer" className={linkClass}>
        fan-favorite Apple presenter
      </a>{" "}
      and made an{" "}
      <a href="/images/experience-swift-summit-stage.jpg" target="_blank" rel="noopener noreferrer" className={linkClass}>
        on-stage guest appearance
      </a>
      .
    </>,
  ];

  return (
    <div className="relative">
      {/* Timeline line - hidden on mobile */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
      
      <motion.div
        key={initialIsMobile ? "mobile" : "desktop"}
        initial={{ opacity: 0, x: initialIsMobile ? 0 : -20, y: initialIsMobile ? 20 : 0 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          duration: 0.5,
          delay: animationDelay,
          ease: "easeOut",
        }}
        className="relative pl-0 md:pl-20"
      >
        {/* Timeline node - hidden on mobile */}
        <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block"></div>

        <Card className="md:hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground">
              Notable Experiences & Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {experiences.map((experience, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-muted-content rounded-full mt-2 shrink-0"></div>
                  <span className="text-sm text-muted-content leading-relaxed">
                    {experience}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}