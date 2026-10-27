import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import BlueprintGrid from "@/components/shared/BlueprintGrid";
import Glow from "@/components/shared/Glow";
import Container from "@/components/shared/Container";

type HeroProps = {
  image: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  badges?: ReadonlyArray<{ label: string; Icon: LucideIcon }>;
};

function splitLastWord(text: string) {
  const index = text.trimEnd().lastIndexOf(" ");
  if (index === -1) return { head: "", last: text };
  return { head: text.slice(0, index + 1), last: text.slice(index + 1) };
}

export default function Hero({
  image,
  title,
  subtitle,
  children,
  badges,
}: HeroProps) {
  const { head, last } = splitLastWord(title);
  // Ohne Untertitel ist der Titel die H1 der Seite (z. B. Standortseiten)
  const TitleTag = subtitle ? "p" : "h1";

  return (
    <section className="relative mt-17 md:mt-22 overflow-hidden bg-secondary text-white">
      {/* Bild rechts, schräg angeschnitten */}
      <div
        className="absolute inset-y-0 right-0 w-full md:w-[45%] bg-cover bg-center md:[clip-path:polygon(20%_0,100%_0,100%_100%,0_100%)]"
        style={{
          backgroundImage: `url(${image})`,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-0 w-full md:w-[45%] bg-gradient-to-r from-secondary/95 via-secondary/60 to-secondary/10 md:from-secondary/70 md:via-secondary/10 md:to-transparent md:[clip-path:polygon(20%_0,100%_0,100%_100%,0_100%)]"
        aria-hidden="true"
      />

      {/* Bauplan-Raster */}
      <BlueprintGrid
        tone="dark"
        className="bg-[size:48px_48px] [mask-image:linear-gradient(to_right,black,transparent_55%)]"
      />
      <Glow className="-bottom-40 -left-32 h-96 w-96 bg-primary/20" />

      <Container className="relative px-4 py-14 lg:py-24">
        <div className="max-w-2xl space-y-5">
          <TitleTag className="font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-wide">
            {head}
            <span className="text-primary">{last}</span>
          </TitleTag>
          {subtitle && (
            <h1 className="text-xl md:text-2xl lg:text-3xl text-gray-300">
              {subtitle}
            </h1>
          )}
          {badges && badges.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {badges.map(({ label, Icon }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white backdrop-blur-md"
                >
                  <Icon
                    className="h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  {label}
                </li>
              ))}
            </ul>
          )}
          {children && <div className="pt-2">{children}</div>}
        </div>
      </Container>

      <div
        className="relative h-2 w-full bg-[repeating-linear-gradient(-45deg,var(--color-primary)_0_14px,transparent_14px_28px)]"
        aria-hidden="true"
      />
    </section>
  );
}
