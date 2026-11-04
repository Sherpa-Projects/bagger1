"use client";

import { useState } from "react";
import { MapPin, Shovel, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { FaqContentProps, FaqItemProps } from "@/types/Faq";
import { cn } from "@/lib/cn";
import Section from "@/components/shared/Section";
import Headline from "@/components/shared/Headline";
import FaqAccordion from "@/components/FaqAccordion";
import FaqContactBox from "@/components/FaqContactBox";

type Props = {
  title: string;
  content: FaqContentProps;
};

type FaqSection = "location" | "bucket" | "rentalCondition";

type FaqSectionConfig = {
  section: FaqSection;
  label: string;
  title: string;
  Icon: LucideIcon;
  items: FaqItemProps[];
};

export default function Faq({ title, content }: Props) {
  const [activeSection, setActiveSection] = useState<FaqSection>("location");

  const locationName =
    content.location.charAt(0).toUpperCase() + content.location.slice(1);

  const faqSections: FaqSectionConfig[] = [
    {
      section: "location",
      label: `Standort ${locationName}`,
      title: `Fragen & Antworten zum Standort ${locationName}`,
      Icon: MapPin,
      items: content.locationItems.items,
    },
    {
      section: "bucket",
      label: "Baggerlöffel",
      title: "Fragen & Antworten zu Baggerlöffel",
      Icon: Shovel,
      items: content.bucketItems.items,
    },
    {
      section: "rentalCondition",
      label: "Mietbedingungen",
      title: "Fragen & Antworten zu Mietbedingungen",
      Icon: FileText,
      items: content.rentalConditionItems.items,
    },
  ];

  return (
    <Section id="faq">
      <div className="grid gap-5 lg:grid-cols-12 lg:gap-12">
        {/* Linke Spalte: Überschrift, Themen-Tabs und Kontakt */}
        <div className="min-w-0 lg:col-span-4">
          <div className="lg:sticky lg:top-32 space-y-6">
            <Headline>{title}</Headline>

            <div
              role="tablist"
              aria-label="FAQ-Themen"
              className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 lg:mx-0 lg:px-0 lg:flex-col lg:overflow-visible lg:pb-0 [scrollbar-width:none]"
            >
              {faqSections.map(({ section, label, Icon, items }) => {
                const isActive = activeSection === section;
                return (
                  <button
                    key={section}
                    type="button"
                    role="tab"
                    id={`faq-tab-${section}`}
                    aria-selected={isActive}
                    aria-controls={`faq-panel-${section}`}
                    onClick={() => setActiveSection(section)}
                    className={cn(
                      "group flex shrink-0 items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all duration-300 lg:w-full",
                      isActive
                        ? "border-primary bg-primary/10 shadow-sm"
                        : "border-gray-200 bg-white hover:border-primary/60 hover:shadow-sm",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors duration-300",
                        isActive ? "bg-primary/25" : "bg-primary/15",
                      )}
                    >
                      <Icon
                        className="h-4.5 w-4.5 text-primary"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="whitespace-nowrap font-semibold text-secondary">
                      {label}
                    </span>
                    <span
                      className={cn(
                        "ml-auto rounded-full px-2 py-0.5 text-xs font-semibold transition-colors",
                        isActive
                          ? "bg-white text-secondary"
                          : "bg-gray-100 text-gray-500",
                      )}
                    >
                      {items.length}
                    </span>
                  </button>
                );
              })}
            </div>

            <FaqContactBox className="hidden lg:block" />
          </div>
        </div>

        {/* Rechte Spalte: alle Themen bleiben im HTML, nur das aktive ist sichtbar */}
        <div className="min-w-0 lg:col-span-8">
          {faqSections.map(({ section, title, items }) => (
            <div
              key={section}
              role="tabpanel"
              id={`faq-panel-${section}`}
              aria-labelledby={`faq-tab-${section}`}
              hidden={activeSection !== section}
            >
              <h3 className="sr-only">{title}</h3>
              <FaqAccordion id={`faq-${section}`} items={items} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
