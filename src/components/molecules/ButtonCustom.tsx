import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ButtonCustomProps = {
  title: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  iconBeforeText?: boolean;
  color?: string;
};

export default function ButtonCustom({
  title,
  onClick,
  icon,
  iconBeforeText,
  color,
}: ButtonCustomProps) {
  return (
    <Button
      className={cn(
        "h-12 rounded-3xl px-6 py-3 text-center text-white flex flex-row items-center justify-center gap-2 text-md font-bold leading-none",
        color === "black"
          ? "--color-background hover:bg-gray-800"
          : "bg-[#FF4142] hover:bg-red-700"
      )}
      //   onClick={() => onClick && onClick()}
    >
      {icon && iconBeforeText && <>{icon}</>}
      <span className="leading-none">{title}</span>
      {icon && !iconBeforeText && <>{icon}</>}
    </Button>
  );
}
