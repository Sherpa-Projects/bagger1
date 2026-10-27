"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  MessageCircleQuestion,
  Phone,
  Plus,
  Shovel,
  FileText,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";

import { FaqContentProps, FaqItemProps } from "@/types/Faq";
import { company } from "@/lib/content/company";
import { phoneHref, whatsappHref } from "@/lib/contact";
import { cn } from "@/lib/cn";
import Section from "@/components/shared/Section";
import Eyebrow from "@/components/shared/Eyebrow";
import Headline from "@/components/shared/Headline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";

type Props = {
  title: string;
  content: FaqContentProps;
};

type FaqSection = "location" | "bucket" | "rentalCondition";
type FaqValue = `${FaqSection}-${number}`;

const contactButtonClass =
  "inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-secondary transition-all duration-300 hover:border-primary hover:shadow-sm";

type FaqSectionConfig = {
  section: FaqSection;
  label: string;
  title: string;
  Icon: LucideIcon;
  items: FaqItemProps[];
};

export default function Faq({ title, content }: Props) {
  const [activeSection, setActiveSection] = useState<FaqSection>("location");
  const [openItems, setOpenItems] = useState<FaqValue[]>([]);

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
            <div>
              <Eyebrow className="mb-4">FAQ</Eyebrow>
              <Headline>{title}</Headline>
            </div>

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

            <div className="hidden lg:block rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-orange-50/70 p-5">
              <div className="mb-3 flex items-center gap-2">
                <MessageCircleQuestion
                  className="h-5 w-5 text-primary"
                  aria-hidden="true"
                />
                <p className="font-semibold text-secondary">
                  Ihre Frage ist nicht dabei?
                </p>
              </div>
              <p className="mb-4 text-sm text-gray-600">
                Schreiben oder rufen Sie uns an, wir helfen gerne weiter.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href={whatsappHref(company.contact.whatsapp)}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={contactButtonClass}
                >
                  <SiWhatsapp size={16} color="default" aria-hidden="true" />
                  WhatsApp
                </Link>
                {company.contact.telephone && (
                  <Link
                    href={phoneHref(company.contact.telephone)}
                    className={contactButtonClass}
                  >
                    <Phone
                      className="h-4 w-4 text-primary"
                      aria-hidden="true"
                    />
                    Anrufen
                  </Link>
                )}
              </div>
            </div>
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
              <Accordion
                value={openItems}
                onValueChange={(value) => setOpenItems(value as FaqValue[])}
                // Antworten auch zugeklappt im HTML, damit Crawler sie lesen
                hiddenUntilFound
                id={`faq-${section}`}
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
                itemScope
                itemType="https://schema.org/FAQPage"
              >
                {items.map((item, i) => {
                  const value = `${section}-${i}` as FaqValue;

                  return (
                    <AccordionItem
                      value={value}
                      key={value}
                      className="group border-gray-100 transition-colors duration-300 data-open:bg-orange-50/50"
                      itemScope
                      itemProp="mainEntity"
                      itemType="https://schema.org/Question"
                    >
                      <AccordionPrimitive.Header className="flex">
                        <AccordionPrimitive.Trigger className="flex flex-1 items-center gap-4 px-5 py-4 text-left outline-none transition-colors duration-300 hover:bg-gray-50/80 focus-visible:ring-2 focus-visible:ring-primary/50 sm:px-6 sm:py-5 lg:cursor-pointer">
                          <span
                            className="w-7 shrink-0 font-bold text-sm text-gray-300 transition-colors duration-300 group-data-open:text-primary"
                            aria-hidden="true"
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span
                            className="flex-1 font-semibold text-base text-secondary transition-colors duration-300 sm:text-lg group-data-open:text-primary"
                            itemProp="name"
                          >
                            {item.question}
                          </span>
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white transition-all duration-300 group-hover:border-primary/60 group-data-open:rotate-45 group-data-open:border-primary">
                            <Plus
                              className="h-4 w-4 text-primary"
                              aria-hidden="true"
                            />
                          </span>
                        </AccordionPrimitive.Trigger>
                      </AccordionPrimitive.Header>
                      <AccordionContent className="pb-0">
                        <div
                          itemScope
                          itemProp="acceptedAnswer"
                          itemType="https://schema.org/Answer"
                        >
                          <div
                            itemProp="text"
                            className="px-5 pb-5 pl-16 text-base leading-relaxed text-gray-600 sm:px-6 sm:pb-6 sm:pl-[4.25rem]"
                          >
                            <p>{item.answer}</p>
                            {item.list && (
                              <ul className="mt-3 space-y-1.5">
                                {item.list.map((listItem, index) => (
                                  <li
                                    key={index}
                                    className="flex items-start gap-2 font-semibold text-secondary"
                                  >
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                    {listItem}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
