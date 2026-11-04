"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import type { FaqItemProps } from "@/types/Faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

type FaqAccordionProps = {
  id: string;
  items: ReadonlyArray<FaqItemProps>;
};

// Fragen-Liste mit FAQPage-Schema (Microdata)
export default function FaqAccordion({ id, items }: FaqAccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  return (
    <Accordion
      value={openItems}
      onValueChange={(value) => setOpenItems(value as string[])}
      // Antworten auch zugeklappt im HTML, damit Crawler sie lesen
      hiddenUntilFound
      id={id}
      className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      {items.map((item, i) => {
        const value = `${id}-${i}`;

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
                  <Plus className="h-4 w-4 text-primary" aria-hidden="true" />
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
  );
}
