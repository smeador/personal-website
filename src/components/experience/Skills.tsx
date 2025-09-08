import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const skillsData = {
  "Frontend Development": [
    "React", "TypeScript", "JavaScript", "Vue.js", "Next.js", "Astro",
    "HTML5", "CSS3", "Tailwind CSS", "SASS/SCSS", "Framer Motion"
  ],
  "Backend Development": [
    "Node.js", "Python", "Django", "Express.js", "REST APIs", "GraphQL",
    "PostgreSQL", "MongoDB", "Redis", "Prisma"
  ],
  "Cloud & DevOps": [
    "AWS", "Docker", "Vercel", "Netlify", "GitHub Actions", "CI/CD",
    "Serverless Functions", "CDN", "Performance Optimization"
  ],
  "Tools & Workflow": [
    "Git", "VS Code", "Figma", "Linear", "Notion", "Postman",
    "ESLint", "Prettier", "Jest", "Cypress"
  ]
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Skills() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience 
            and continuous learning in modern web development
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-8"
        >
          {Object.entries(skillsData).map(([category, skills]) => (
            <motion.div key={category} variants={item}>
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold flex items-center gap-3">
                    <div className="w-2 h-8 bg-primary rounded-full"></div>
                    {category}
                  </CardTitle>
                  <CardDescription>
                    {category === "Frontend Development" && "Building beautiful, interactive user experiences"}
                    {category === "Backend Development" && "Creating robust, scalable server-side solutions"}
                    {category === "Cloud & DevOps" && "Deploying and maintaining production applications"}
                    {category === "Tools & Workflow" && "Streamlining development processes and collaboration"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: skillIndex * 0.05 + 0.5 
                        }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="bg-muted/30 border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-center">
                Professional Philosophy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-muted-foreground leading-relaxed text-base">
                I believe in writing clean, maintainable code that solves real problems. 
                My approach combines technical excellence with user-centered design, 
                always prioritizing performance, accessibility, and developer experience. 
                I'm passionate about staying current with emerging technologies while 
                building on proven foundations.
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}