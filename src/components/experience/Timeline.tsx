import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { CollectionEntry } from "astro:content";

type TimelineItem =
  | CollectionEntry<"experience">
  | CollectionEntry<"education">;

interface TimelineProps {
  items: TimelineItem[];
  type: "experience" | "education";
  animationDelay?: number;
}

export default function Timeline({
  items,
  type,
  animationDelay = 0,
}: TimelineProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const getDuration = (startDate: Date, endDate?: Date) => {
    const start = startDate;
    const end = endDate || new Date();

    const months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years === 0) return `${months} month${months === 1 ? "" : "s"}`;
    if (remainingMonths === 0) return `${years} year${years === 1 ? "" : "s"}`;
    return `${years} year${years === 1 ? "" : "s"} ${remainingMonths} month${
      remainingMonths === 1 ? "" : "s"
    }`;
  };

  const getItemTitle = (item: TimelineItem) => {
    return type === "experience"
      ? (item.data as any).role
      : (item.data as any).degree;
  };

  const getItemSubtitle = (item: TimelineItem) => {
    return type === "experience"
      ? (item.data as any).company
      : (item.data as any).institution;
  };

  const getItemLocation = (item: TimelineItem) => {
    return item.data.location;
  };

  const getItemAchievements = (item: TimelineItem) => {
    return type === "experience"
      ? (item.data as any).achievements || []
      : (item.data as any).honors || [];
  };

  const getAchievementsLabel = () => {
    return type === "experience" ? "Key Achievements:" : "Honors & Activities:";
  };

  return (
    <div className="relative">
      {/* Timeline line - hidden on mobile */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

      <div className="space-y-8">
        {items.map((item, index) => {
          const isExpanded = expandedItems.includes(item.slug);
          const achievements = getItemAchievements(item);

          return (
            <motion.div
              key={item.slug}
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

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader
                  className="cursor-pointer"
                  onClick={() => toggleExpanded(item.slug)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-semibold text-foreground">
                        {getItemTitle(item)}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-lg font-medium text-primary">
                          {getItemSubtitle(item)}
                        </span>
                        {getItemLocation(item) && (
                          <Badge variant="outline" className="text-xs">
                            {getItemLocation(item)}
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                        <span>
                          {formatDate(item.data.startDate)} -{" "}
                          {item.data.endDate
                            ? formatDate(item.data.endDate)
                            : "Present"}
                        </span>
                        <span>•</span>
                        <span>
                          {getDuration(item.data.startDate, item.data.endDate)}
                        </span>
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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                    </button>
                  </div>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                    {item.data.description}
                  </CardDescription>

                  {/* Expanded content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? "auto" : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-border pt-4 mt-4">
                      {achievements.length > 0 && (
                        <>
                          <p className="text-sm font-medium text-foreground mb-3">
                            {getAchievementsLabel()}
                          </p>
                          <ul className="space-y-2 mb-4">
                            {achievements.map(
                              (
                                achievement: string,
                                achievementIndex: number
                              ) => (
                                <li
                                  key={achievementIndex}
                                  className="flex items-start gap-3 text-sm text-muted-foreground"
                                >
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                                  <span>{achievement}</span>
                                </li>
                              )
                            )}
                          </ul>
                        </>
                      )}

                      {/* Note: MDX content rendering would need to be handled at the Astro level */}
                      {/* For now, we'll just show the description which is already displayed above */}
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
