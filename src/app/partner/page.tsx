import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail } from "lucide-react";
import { partnerPageData } from "@/lib/content/pages/partner/partnerPageData";

export const generateMetadata = (): Metadata => {
  return {
    title: `${partnerPageData.seo.metaTitle}`,
    description: `${partnerPageData.seo.metaDescription.google}`,
    robots: "index, follow",
    openGraph: {
      title: `${partnerPageData.seo.metaTitle}`,
      description: `${partnerPageData.seo.metaDescription.openGraph}`,
      url: "https://bagger1.de",
      siteName: "Baumaschinenverleih in deiner Gegend | Bagger1",
      images: {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gelber Hintergrund mit schwarzem Text: ‚Bagger 1‘ in großer Schrift und darunter ‚Ihre Nummer 1 für Bagger und Baumaschinen‘ in kleinerer Schrift.",
      },
    },
    twitter: {
      card: "summary_large_image",
      title: `${partnerPageData.seo.metaTitle}`,
      description: `${partnerPageData.seo.metaDescription.twitter}`,
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
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary mr-2">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <p className="text-lg">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pb-8">
                <h3 className="font-bold text-xl mb-3">{requirement.title}</h3>
                <ul className="space-y-2">
                  {requirementItems.map(({ Icon, text }, reqIndex) => (
                    <li key={reqIndex} className="flex items-center">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary mr-2">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <p className="text-lg">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="border border-gray-300 p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-xl mb-2">{contactCard.title}</h3>
                <div className="space-y-4 text-lg pb-8">
                  <p className="text-base mb-6">{contactCard.description}</p>
                  <p className="font-bold">{contactCard.subtitle}</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary mr-2">
                        <Phone className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <a
                        href={`tel:${contactCard.phone}`}
                        className="hover:underline"
                      >
                        {contactCard.phone}
                      </a>
                    </li>
                    <li className="flex items-center">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary mr-2">
                        <Mail className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <a
                        href={`mailto:${contactCard.email}`}
                        className="hover:underline"
                      >
                        {contactCard.email}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
