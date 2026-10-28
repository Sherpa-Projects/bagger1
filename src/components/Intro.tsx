import { type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import Section from "@/components/shared/Section";
import Headline from "@/components/shared/Headline";
import BlueprintGrid from "@/components/shared/BlueprintGrid";
import Glow from "@/components/shared/Glow";

type IntroItem = {
  title: string;
  text: string;
  Icon: LucideIcon;
};

type IntroProps = {
  title: ReactNode;
  lead: string;
  services: {
    title: string;
    items: readonly IntroItem[];
  };
  audiences: readonly IntroItem[];
};

export default function Intro({
  title,
  lead,
  services,
  audiences,
}: IntroProps) {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white via-white to-orange-50/70 text-secondary shadow-sm">
        {/* Bauplan-Raster als Hintergrund */}
        <BlueprintGrid className="bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top_right,black_10%,transparent_70%)]" />
        <Glow className="-top-32 -right-32 h-96 w-96 bg-primary/15" />

        <div className="relative px-6 py-10 md:px-10 lg:px-14 lg:py-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-7 flex flex-col">
              <Headline size="lg">{title}</Headline>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
                {lead}
              </p>
            </div>

            <ul className="lg:col-span-5 self-end rounded-2xl bg-white border border-gray-200 shadow-sm divide-y divide-gray-100">
              {audiences.map(({ title, text, Icon }) => (
                <li
                  key={title}
                  className="group flex gap-4 p-5 transition-colors first:rounded-t-2xl last:rounded-b-2xl hover:bg-orange-50/60"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 transition-colors group-hover:bg-primary/25">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-lg leading-tight mb-1">
                      {title}
                    </p>
                    <p className="text-sm text-gray-600">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 lg:mt-14">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-6 lg:mb-8">
              {services.title}
            </h3>
            <div className="relative">
              <div
                className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent lg:left-5 lg:right-0 lg:top-5 lg:bottom-auto lg:h-px lg:w-auto lg:bg-gradient-to-r"
                aria-hidden="true"
              />
              <ol className="relative grid gap-6 lg:grid-cols-4 lg:gap-8">
                {services.items.map(({ title, text, Icon }, index) => (
                  <li
                    key={title}
                    className="group relative flex gap-4 lg:flex-col"
                  >
                    <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white ring-2 ring-primary shadow-sm transition-colors group-hover:bg-primary/15">
                      <Icon
                        className="h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-primary mb-1">
                        Schritt {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="text-lg font-semibold mb-1">{title}</p>
                      <p className="text-sm text-gray-600">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
