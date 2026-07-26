import type { ComponentType, SVGProps } from "react";

type IconBadgeProps = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
  size?: "sm" | "lg";
};

export default function IconBadge({ Icon, text, size = "lg" }: IconBadgeProps) {
  const isSmall = size === "sm";

  return (
    <>
      <div className="mr-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary">
        <Icon className={isSmall ? "h-4 w-4" : "h-5 w-5"} aria-hidden="true" />
      </div>
      <p className={isSmall ? "text-sm" : "text-lg"}>{text}</p>
    </>
  );
}
