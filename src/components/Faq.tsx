"use client";

import { useState } from "react";

import { FaqContentProps, FaqItemProps } from "@/app/types/components/Faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {
  title: string;
  content: FaqContentProps;
};

type FaqSection = "location" | "bucket" | "rentalCondition";
type FaqValue = `${FaqSection}-${number}`;

type FaqSectionConfig = {
  section: FaqSection;
  title: string;
  items: FaqItemProps[];
};

export default function Faq({ title, content }: Props) {
  const [openItems, setOpenItems] = useState<FaqValue[]>([]);

  const locationName =
    content.location.charAt(0).toUpperCase() + content.location.slice(1);

  const faqSections: FaqSectionConfig[] = [
    {
      section: "location",
      title: `Fragen & Antworten zum Standort ${locationName}`,
      items: content.locationItems.items,
    },
    {
      section: "bucket",
      title: "Fragen & Antworten zu Baggerlöffel",
      items: content.bucketItems.items,
    },
    {
      section: "rentalCondition",
      title: "Fragen & Antworten zu Mietbedingungen",
      items: content.rentalConditionItems.items,
    },
  ];

  return (
    <section id="faq" className="py-10 lg:py-20 px-4">
      <div className="container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
        <div className="pb-4 lg:pb-6">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-3xl lg:leading-tight text-center mb-2">
            {title}
          </h2>
        </div>
        {faqSections.map(({ section, title, items }) => (
          <div className="mb-10 space-y-3" key={section}>
            <h2 className="text-center text-gray-500">{title}</h2>
            <Accordion
              value={openItems}
              onValueChange={(value) => setOpenItems(value as FaqValue[])}
              id={`faq-${section}`}
              className="space-y-3 flex justify-center flex-col items-center max-w-3xl mx-auto"
              itemScope
              itemType="https://schema.org/FAQPage"
            >
              {items.map((item, i) => {
                const value = `${section}-${i}` as FaqValue;

                return (
                  <AccordionItem
                    value={value}
                    key={value}
                    className="group border border-gray-200 bg-white/30 hover:bg-white/40 p-6 rounded-2xl accordion-item max-w-4xl w-full shadow-md hover:shadow-lg transform-gpu duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:-translate-y-1 transition-all data-open:-translate-y-0.5 data-open:border-orange-200 data-open:bg-orange-50/50 data-open:shadow-lg data-open:shadow-orange-100/70 lg:cursor-pointer"
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                  >
                    <AccordionTrigger className="text-black/40 transition-colors duration-300 hover:text-black/50 hover:no-underline aria-expanded:text-primary">
                      <div className="flex justify-between items-center">
                        <h3
                          className="font-semibold accordion-title text-black/70 transition-colors duration-300 group-data-open:text-primary"
                          itemProp="name"
                        >
                          {item.question}
                        </h3>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="transform-gpu pt-1 text-gray-600 transition-[opacity,transform,filter] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none">
                      <div
                        itemScope
                        itemProp="acceptedAnswer"
                        itemType="https://schema.org/Answer"
                      >
                        <div itemProp="text" className="mt-2 text-gray-600">
                          <div className="py-2">{item.answer}</div>
                          {item.list && (
                            <>
                              {item.list.map((listItem, index) => (
                                <div className="font-bold" key={index}>
                                  {listItem}
                                </div>
                              ))}
                            </>
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
    </section>
  );
}
