"use client";

import { useState } from "react";
import { CircleChevronDown } from "lucide-react";
import { FaqContentProps } from "@/app/types/components/Faq";

type Props = {
  title: string;
  content: FaqContentProps;
};

type FaqSection = "location" | "bucket" | "rentalCondition";

export default function Faq({ title, content }: Props) {
  const [openItem, setOpenItem] = useState<{
    section: FaqSection;
    index: number;
  } | null>(null);

  const toggleIndex = (section: FaqSection, index: number) => {
    setOpenItem((prevItem) =>
      prevItem?.section === section && prevItem.index === index
        ? null
        : { section, index }
    );
  };

  return (
    <section className="py-10 lg:py-20 px-4">
      <div className="container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
        <div className="pb-4 lg:pb-6">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-3xl lg:leading-tight text-center mb-2">
            {title}
          </h2>
        </div>
        <div
          className="flex justify-center flex-col items-center max-w-3xl mx-auto"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <div className="mb-10 space-y-3">
            <h2 className="text-center text-gray-500">
              Fragen & Antworten zum Standort {content.location}
            </h2>
            {content.locationItems.items.map((item, i) => (
              <div
                key={i}
                className={`group border p-6 rounded-md accordion-item max-w-4xl w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-md lg:cursor-pointer ${
                  openItem?.section === "location" && openItem.index === i
                    ? "border-orange-300 bg-orange-50"
                    : "border-gray-300 bg-white"
                }`}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                onClick={() => toggleIndex("location", i)}
              >
                <div className="flex justify-between items-center">
                  <h3
                    className="font-bold accordion-title lg:text-lg"
                    itemProp="name"
                  >
                    {item.question}
                  </h3>
                  <CircleChevronDown
                    className={`srink-0 transform transition-all duration-500 ease-in-out group:hover:text-gray-600 text-gray-400 group-hover:text-gray-500 ${
                      openItem?.section === "location" &&
                      openItem.index === i &&
                      "rotate-180"
                    }`}
                  />
                </div>
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div
                    itemProp="text"
                    className={`text-gray-600 overflow-hidden transition-[max-height] duration-500 ease-in-out mt-2 ${
                      openItem?.section === "location" && openItem.index === i
                        ? "max-h-96"
                        : "max-h-0"
                    }`}
                  >
                    <div className="py-2">{item.answer}</div>
                    {item.list && item.list.length > 0 && (
                      <ul className="space-y-1 list-disc pl-5 mt-2">
                        {item.list.map((i, index) => (
                          <li key={index}>{i}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mb-10 space-y-3">
            <h2 className="text-center text-gray-500">
              Fragen & Antworten zu Baggerlöffel
            </h2>
            {content.bucketItems.items.map((item, i) => (
              <div
                key={i}
                className={`group border p-6 rounded-md accordion-item max-w-4xl w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-md lg:cursor-pointer ${
                  openItem?.section === "bucket" && openItem.index === i
                    ? "border-orange-300 bg-orange-50"
                    : "border-gray-300 bg-white"
                }`}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                onClick={() => toggleIndex("bucket", i)}
              >
                <div className="flex justify-between items-center">
                  <h3
                    className="font-bold accordion-title lg:text-lg"
                    itemProp="name"
                  >
                    {item.question}
                  </h3>
                  <CircleChevronDown
                    className={`srink-0 transform transition-all duration-500 ease-in-out group:hover:text-gray-600 text-gray-400 group-hover:text-gray-500 ${
                      openItem?.section === "bucket" &&
                      openItem.index === i &&
                      "rotate-180"
                    }`}
                  />
                </div>
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div
                    itemProp="text"
                    className={`text-gray-600 overflow-hidden transition-[max-height] duration-500 ease-in-out mt-2 ${
                      openItem?.section === "bucket" && openItem.index === i
                        ? "max-h-96"
                        : "max-h-0"
                    }`}
                  >
                    <div className="py-2">{item.answer}</div>
                    {item.list && item.list.length > 0 && (
                      <ul className="space-y-1 list-disc pl-5 mt-2">
                        {item.list.map((i, index) => (
                          <li key={index}>{i}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mb-10 space-y-3">
            <h2 className="text-center text-gray-500">
              Fragen & Antworten zu Mietbedingungen
            </h2>
            {content.rentalConditionItems.items.map((item, i) => (
              <div
                key={i}
                className={`group border p-6 rounded-md accordion-item max-w-4xl w-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-md lg:cursor-pointer ${
                  openItem?.section === "rentalCondition" && openItem.index === i
                    ? "border-orange-300 bg-orange-50"
                    : "border-gray-300 bg-white"
                }`}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                onClick={() => toggleIndex("rentalCondition", i)}
              >
                <div className="flex justify-between items-center">
                  <h3
                    className="font-bold accordion-title lg:text-lg"
                    itemProp="name"
                  >
                    {item.question}
                  </h3>
                  <CircleChevronDown
                    className={`srink-0 transform transition-all duration-500 ease-in-out group:hover:text-gray-600 text-gray-400 group-hover:text-gray-500 ${
                      openItem?.section === "rentalCondition" &&
                      openItem.index === i &&
                      "rotate-180"
                    }`}
                  />
                </div>
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div
                    itemProp="text"
                    className={`text-gray-600 overflow-hidden transition-[max-height] duration-500 ease-in-out mt-2 ${
                      openItem?.section === "rentalCondition" &&
                      openItem.index === i
                        ? "max-h-96"
                        : "max-h-0"
                    }`}
                  >
                    <div className="py-2">{item.answer}</div>
                    {item.list && item.list.length > 0 && (
                      <ul className="space-y-1 list-disc pl-5 mt-2">
                        {item.list.map((i, index) => (
                          <li key={index}>{i}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
