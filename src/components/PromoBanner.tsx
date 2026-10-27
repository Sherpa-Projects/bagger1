import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/shared/Section";
import Glow from "@/components/shared/Glow";

type PromoBannerProps = {
  image: string;
  title: string;
  text: string;
  button: {
    label: string;
    link: string;
  };
};

export default function PromoBanner({
  image,
  title,
  text,
  button,
}: PromoBannerProps) {
  return (
    <Section>
      <div className="relative grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md lg:grid-cols-2">
        <Glow className="-bottom-32 -left-32 h-80 w-80 bg-primary/15" />

        <div className="relative order-2 lg:order-1 flex flex-col justify-center px-6 py-10 md:px-10 lg:p-14">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            {title}
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 max-w-md">
            {text}
          </p>
          <Link
            href={button.link}
            className="group mt-8 inline-flex w-fit items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-lg font-semibold text-secondary shadow-sm transition-all duration-300 hover:border-primary hover:shadow-md"
          >
            {button.label}
            <ArrowRight
              size={20}
              className="text-primary transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="relative order-1 lg:order-2 min-h-56 md:min-h-72">
          <div
            className="absolute inset-0 bg-cover bg-center lg:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]"
            style={{
              backgroundImage: `url(${image})`,
            }}
            aria-hidden="true"
          />
          <div
            className="hidden lg:block absolute inset-0 bg-primary [clip-path:polygon(18%_0,20%_0,2%_100%,0_100%)]"
            aria-hidden="true"
          />
        </div>
      </div>
    </Section>
  );
}
