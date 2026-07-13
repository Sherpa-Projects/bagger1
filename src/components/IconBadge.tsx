import type { ComponentType, SVGProps } from "react";

type IconBadgeProps = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
};

export default function IconBadge({ Icon, text }: IconBadgeProps) {
  return (
    <>
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary mr-2">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <p className="text-lg">{text}</p>
    </>
  );
}
