import { type ReactNode } from "react";
import Image from "next/image";

type IntroProps = {
  title: ReactNode;
  paragraphs: readonly string[];
  image: {
    src: string;
    alt: string;
  };
};

export default function Intro({ title, paragraphs, image }: IntroProps) {
  return (
    <div className="py-10 lg:py-20 px-4">
      <div className="container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-bold text-3xl md:text-4xl pb-4 lg:pb-6 lg:leading-tight">
              {title}
            </h2>
            <div className="space-y-4 text-lg">
              {paragraphs.map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </div>
          </div>
          <div className="mx-auto">
            <Image
              className="rounded-lg"
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
