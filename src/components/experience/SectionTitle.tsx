interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  animationDelay?: number;
}

export default function SectionTitle({
  children,
  className = "",
  animationDelay: _animationDelay = 0,
}: SectionTitleProps) {
  return (
    <h2 className={className}>
      {children}
    </h2>
  );
}
