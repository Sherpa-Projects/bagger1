import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BranchCard from "../components/BranchCard";
import type { LucideIcon } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { homePageData } from "@/lib/content/pages/home/homePageData";

export const generateMetadata = (): Metadata => {
  return {
    title: `${homePageData.seo.metaTitle}`,
    description: `${homePageData.seo.metaDescription}`,
    robots: "index, follow",
    openGraph: {
      title: `${homePageData.seo.metaTitle}`,
      description: `${homePageData.seo.metaDescription}`,
      url: "https://bagger1.de",
      siteName: "Baumaschinenverleih in deiner Gegend | Bagger1",
      images: {
        url: "/images/meta.png",
        width: 1200,
        height: 630,
        alt: "Startseite | Bagger1",
      },
    },
    twitter: {
      card: "summary_large_image",
      title: `${homePageData.seo.metaTitle}`,
      description: `${homePageData.seo.metaDescription}`,
      images: ["/images/meta.png"],
    },
  };
};

type UspBadge = { label: string; Icon: LucideIcon; sr?: string };

export default function Home() {
  const { hero, intro, usp, career } = homePageData;
  const items: ReadonlyArray<UspBadge> = usp.uspBadges;

  return (
    <>
      <Navigation />
      <main>
        <div
          className="mt-17 md:mt-24 relative h-48 lg:h-72 flex justify-center items-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${hero.image})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0" />
          <div className="relative text-white text-center md:max-w-4xl lg:max-w-5xl xl:max-w-7xl px-4 space-y-4">
            <p className="text-5xl lg:text-7xl font-semibold leading-normal">
              {hero.title}
            </p>
            <h1 className="text-2xl lg:text-5xl">{hero.subtitle}</h1>
          </div>
        </div>

        <div className="py-10 lg:py-20 px-4">
          <div className="container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="font-bold text-3xl md:text-4xl pb-4 lg:pb-6 lg:leading-tight">
                  {intro.title}
                </h2>
                <div className="space-y-4 text-lg">
                  {intro.paragraphs.map((p, index) => (
                    <p key={index}>{p}</p>
                  ))}
                </div>
              </div>
              <div className="mx-auto">
                <Image
                  className="rounded-lg"
                  src={intro.image.src}
                  alt={intro.image.alt}
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 px-4">
          <div className="container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-3xl pb-4 lg:pb-6 lg:leading-tight text-center">
              {usp.title}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {items.map(({ label, Icon }, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-2xl border border-gray-300 bg-white p-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-lg font-semibold leading-tight">
                        {label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <BranchCard />

        <div
          className="mt-17 md:mt-24 relative py-12 flex justify-center items-center bg-cover bg-center my-20"
          style={{
            backgroundImage: `url(${career.image})`,
          }}
        >
          <div className="absolute inset-0 bg-black/70 z-0" />
          <div className="relative text-white text-center md:max-w-4xl lg:max-w-5xl xl:max-w-7xl px-4 space-y-6">
            <h2 className="text-4xl lg:text-6xl font-semibold leading-normal">
              {career.title}
            </h2>
            <p className="text-center text-xl lg:text-3xl max-w-3xl leading-normal lg:leading-snug">
              {career.text}
            </p>
            <div className="flex justify-center items-center">
              <Link href={career.button.href} className="group">
                <div className="w-full flex justify-end lg:justify-start py-3 px-4 bg-white/20 rounded-xl border border-white/30 backdrop-blur-md shadow-md">
                  <span className="group text-xl self-start group-hover:text-primary transition-all duration-300 transform">
                    {career.button.cta}
                    <span className="ml-2 text-primary inline-block group-hover:translate-x-1 transition-transform duration-300">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
