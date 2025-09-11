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
import ToggleIcon from "@/components/icons/ToggleIcon";

type TimelineItem =
  | CollectionEntry<"professional">
  | CollectionEntry<"education">;

type Position = TimelineItem["data"]["positions"][number];
interface TimelineProps {
  items: TimelineItem[];
  type: "professional" | "education";
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

    if (years === 0) return `${months} mo${months === 1 ? "" : "s"}`;
    if (remainingMonths === 0) return `${years} yr${years === 1 ? "" : "s"}`;
    return `${years} yr${years === 1 ? "" : "s"} ${remainingMonths} mo${
      remainingMonths === 1 ? "" : "s"
    }`;
  };

  const renderPositionSection = (
    position: Position,
    index: number,
    isExpanded: boolean
  ) => {
    return (
      <div key={index} className="border-l-2 border-primary/20 pl-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
          <h4 className="font-semibold text-foreground">{position.role}</h4>
          <div className="text-sm text-muted-foreground">
            {position.startDate && formatDate(new Date(position.startDate))} -{" "}
            {position.endDate
              ? formatDate(new Date(position.endDate))
              : "Present"}
            {" • "}
            {getDuration(position.startDate, position.endDate)}
          </div>
        </div>
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0,
            marginTop: isExpanded ? 8 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <p className="text-muted-content leading-relaxed text-sm">
            {position.description}
          </p>
        </motion.div>
      </div>
    );
  };

  const renderTimelineCard = (item: TimelineItem) => {
    const itemData = item.data; // TODO: fix this type conversion
    const positions = itemData.positions;
    const isExpanded = expandedItems.includes(item.slug);

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

        <Card
          className="hover:shadow-lg transition-all duration-300 cursor-pointer"
          onClick={() => toggleExpanded(item.slug)}
        >
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center gap-4">
                    {itemData.organizationUrl ? (
                      <CardTitle className="text-xl font-semibold text-foreground">
                        <a
                          href={itemData.organizationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {itemData.organization}
                        </a>
                      </CardTitle>
                    ) : (
                      <CardTitle className="text-xl font-semibold text-foreground">
                        {itemData.organization}
                      </CardTitle>
                    )}
                    <div className="text-sm text-muted-foreground">
                      {getDuration(item.data.startDate, item.data.endDate)}
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs w-fit">
                    {itemData.location}
                  </Badge>
                </div>
                {itemData.description && (
                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? "auto" : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-muted-content leading-relaxed pt-3">
                      {itemData.description}
                    </p>
                  </motion.div>
                )}
              </div>

              <button className="text-muted-foreground hover:text-primary transition-colors">
                <ToggleIcon isExpanded={isExpanded} />
              </button>
            </div>
          </CardHeader>

          <CardContent>
            <div className="space-y-5">
              {positions.length > 0 ? (
                positions.map((position: Position, index: number) =>
                  renderPositionSection(position, index, isExpanded)
                )
              ) : (
                <p className="text-muted-foreground">No positions available</p>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <div className="relative">
      {/* Timeline line - hidden on mobile */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

      <div className="space-y-8">
        {items.map((item, _) => {
          return renderTimelineCard(item);
        })}
      </div>
    </div>
  );
}
