import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 bg-black p-6",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-2xl border border-white/[0.1] bg-black/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-white/[0.2] hover:bg-black/60",
        className,
      )}
    >
      {header}
      <div className="transition-all duration-300 group-hover/bento:translate-x-1">
        <div className="flex items-center gap-3 mb-3">
          {icon && (
            <div className="text-white/60 text-lg">
              {icon}
            </div>
          )}
        </div>
        <div className="font-sans text-xl font-semibold text-white mb-3 leading-tight">
          {title}
        </div>
        <div className="font-sans text-sm text-white/60 leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};