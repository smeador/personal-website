import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface OtherExperiencesProps {
  animationDelay?: number;
}

export default function OtherExperiences({ animationDelay = 0 }: OtherExperiencesProps) {
  const experiences = [
    "Led technical workshops and mentoring sessions for junior developers",
    "Contributed to open source projects and technical community initiatives", 
    "Participated in hackathons and technical conferences as both attendee and speaker",
    "Built and maintained personal projects demonstrating continuous learning"
  ];

  return (
    <div className="relative">
      {/* Timeline line - hidden on mobile */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
      
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
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