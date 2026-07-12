import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail } from "lucide-react";
import { partnerPageData } from "@/lib/content/pages/partner/partnerPageData";
import Hero from "@/components/Hero";
import { Card } from "@/components/ui/card";
import IconBadge from "@/components/IconBadge";

export const generateMetadata = (): Metadata => {
  return {
    title: partnerPageData.seo.metaTitle,
    description: partnerPageData.seo.metaDescription.google,
    robots: "index, follow",
    openGraph: {
      title: partnerPageData.seo.metaTitle,
      description: partnerPageData.seo.metaDescription.openGraph,
      url: "https://bagger1.de",
      siteName: "Baumaschinenverleih in deiner Gegend | BAGGER1",
      images: {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gelber Hintergrund mit schwarzem Text: BAGGER1‘ in großer Schrift und darunter ‚Ihre Nummer 1 für Bagger und Baumaschinen‘ in kleinerer Schrift.",
      },
    },
    twitter: {
      card: "summary_large_image",
      title: partnerPageData.seo.metaTitle,
      description: partnerPageData.seo.metaDescription.twitter,
      images: ["/images/og-image.png"],
    },
  };
};

export default function PartnerPage() {
  const { hero, intro, offer, requirement, contactCard } = partnerPageData;

  type careerItem = {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    text: string;
  };

  const offerItems: ReadonlyArray<careerItem> = offer.list;
  const requirementItems: ReadonlyArray<careerItem> = requirement.list;

  return (
    <>
      <Navigation />
      <main>
        <Hero image={hero.image} title={hero.title} subtitle={hero.subtitle} />
        <div className="py-10 lg:py-20 px-4">
          <div className="container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl grid lg:grid-cols-6 lg:gap-20">
            <div className="lg:col-span-4">
              <h2 className="font-bold text-3xl md:text-4xl pb-4 lg:pb-6 lg:leading-tight">
                {intro.title}
              </h2>
              <div className="space-y-4 text-lg pb-8">
                {intro.paragraphs.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>
              <div className="pb-8">
                <h3 className="font-bold text-xl mb-3">{offer.title}</h3>
                <ul className="space-y-2">
                  {offerItems.map(({ Icon, text }, offerIndex) => (
                    <li key={offerIndex} className="flex items-center">
                      <IconBadge Icon={Icon} text={text} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pb-8">
                <h3 className="font-bold text-xl mb-3">{requirement.title}</h3>
                <ul className="space-y-2">
                  {requirementItems.map(({ Icon, text }, reqIndex) => (
                    <li key={reqIndex} className="flex items-center">
                      <IconBadge Icon={Icon} text={text} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2">
              <Card className="p-8">
                <h3 className="font-bold text-xl mb-2">{contactCard.title}</h3>
                <div className="space-y-4 text-lg">
                  <p className="text-base mb-6">{contactCard.description}</p>
                  <p className="font-bold">{contactCard.subtitle}</p>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href={`tel:${contactCard.phone}`}
                        className="hover:underline flex items-center"
                      >
                        <IconBadge Icon={Phone} text={contactCard.phone} />
                      </a>
                    </li>
                    <li>
                      <a
                        href={`mailto:${contactCard.email}`}
                        className="hover:underline flex items-center"
                      >
                        <IconBadge Icon={Mail} text={contactCard.email} />
                      </a>
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
