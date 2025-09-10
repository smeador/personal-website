import { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Sample experience data - this would typically come from a content collection or API
const experienceData = [
  {
    id: 1,
    company: "Tech Company Inc.",
    role: "Senior Software Engineer",
    startDate: "2022-01",
    endDate: "present",
    location: "San Francisco, CA",
    description: "Led development of scalable web applications serving 100k+ users. Architected microservices infrastructure and mentored junior developers. Improved application performance by 40% through optimization initiatives.",
    technologies: ["React", "TypeScript", "Node.js", "AWS", "PostgreSQL", "Docker"],
    achievements: [
      "Reduced API response times by 60% through database optimization",
      "Led migration to TypeScript, improving code quality and developer experience",
      "Mentored 3 junior developers and established code review processes"
    ]
  },
  {
    id: 2,
    company: "StartupXYZ",
    role: "Full Stack Developer",
    startDate: "2020-03",
    endDate: "2022-01",
    location: "Remote",
    description: "Built the entire frontend and backend for a SaaS platform from scratch. Worked closely with design and product teams to deliver user-centric solutions. Implemented real-time features and payment processing.",
    technologies: ["Vue.js", "Python", "Django", "Redis", "Stripe", "PostgreSQL"],
    achievements: [
      "Developed MVP that acquired first 1000 users within 6 months",
      "Implemented secure payment processing handling $100k+ monthly revenue",
      "Built real-time collaboration features using WebSockets"
    ]
  },
  {
    id: 3,
    company: "Digital Agency Co.",
    role: "Frontend Developer",
    startDate: "2018-06",
    endDate: "2020-03",
    location: "New York, NY",
    description: "Developed responsive websites and web applications for various clients. Collaborated with designers to create pixel-perfect implementations. Optimized sites for performance and SEO.",
    technologies: ["JavaScript", "React", "SASS", "WordPress", "PHP", "MySQL"],
    achievements: [
      "Delivered 15+ client projects with 100% on-time completion rate",
      "Improved client website loading speeds by average of 50%",
      "Established frontend development best practices for the team"
    ]
  }
];

export default function Timeline() {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const formatDate = (dateString: string) => {
    if (dateString === 'present') return 'Present';
    const [year, month] = dateString.split('-');
    const date = new Date(parseInt(year), parseInt(month) - 1);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const getDuration = (startDate: string, endDate: string) => {
    const start = new Date(startDate + '-01');
    const end = endDate === 'present' ? new Date() : new Date(endDate + '-01');
    
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (years === 0) return `${months} month${months === 1 ? '' : 's'}`;
    if (remainingMonths === 0) return `${years} year${years === 1 ? '' : 's'}`;
    return `${years} year${years === 1 ? '' : 's'} ${remainingMonths} month${remainingMonths === 1 ? '' : 's'}`;
  };

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
      
      <div className="space-y-8">
        {experienceData.map((experience, index) => {
          const isExpanded = expandedItems.includes(experience.id);
          
          return (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-20"
            >
              {/* Timeline node */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
              
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader 
                  className="cursor-pointer" 
                  onClick={() => toggleExpanded(experience.id)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold text-foreground">
                        {experience.role}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-lg font-medium text-primary">
                          {experience.company}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {experience.location}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                        <span>
                          {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                        </span>
                        <span>•</span>
                        <span>{getDuration(experience.startDate, experience.endDate)}</span>
                      </div>
                    </div>
                    
                    <button className="text-muted-foreground hover:text-primary transition-colors">
                      <motion.svg
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                      </motion.svg>
                    </button>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                    {experience.description}
                  </CardDescription>
                  
                  
                  {/* Expanded content */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: isExpanded ? 'auto' : 0,
                      opacity: isExpanded ? 1 : 0 
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-border pt-4 mt-4">
                      <p className="text-sm font-medium text-foreground mb-3">Key Achievements:</p>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}