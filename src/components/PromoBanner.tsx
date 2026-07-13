import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    <div
      className="mt-17 md:mt-24 relative py-12 flex justify-center items-center bg-cover bg-center my-20"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="relative text-white text-center md:max-w-4xl lg:max-w-5xl xl:max-w-7xl px-4 space-y-6">
        <h2 className="text-4xl lg:text-6xl font-semibold leading-normal">
          {title}
        </h2>
        <p className="text-center text-xl lg:text-3xl max-w-3xl leading-normal lg:leading-snug">
          {text}
        </p>
        <div className="flex justify-center items-center">
          <Link href={button.link} className="group">
            <div className="w-full flex justify-end lg:justify-start py-3 px-4 bg-white/20 rounded-xl border border-white/30 backdrop-blur-md shadow-md">
              <span className="group text-xl self-start group-hover:text-primary transition-all duration-300 transform">
                {button.label}
                <span className="ml-2 text-primary inline-block group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowRight size={18} />
                </span>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
