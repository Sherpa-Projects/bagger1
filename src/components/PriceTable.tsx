import { Machine } from "@/app/types/Machine";
import { machinePageData } from "@/lib/content/pages/machine/machinePageData";
import { Calendar1 } from "lucide-react";

export type PriceTableProps = {
  machine: Machine;
  size?: "sm" | "lg";
};

export default function PriceTable({ machine, size = "lg" }: PriceTableProps) {
  const { timeTable } = machinePageData;
  const isSmall = size === "sm";
  const itemPadding = isSmall ? "px-3 py-2.5" : "px-4 py-3.5";
  const labelTextSize = isSmall ? "text-sm" : "text-base";
  const priceTextSize = isSmall ? "text-xl" : "text-2xl";
  const infoTextSize = isSmall ? "text-[0.65rem]" : "text-xs";

  const formatPrice = (value: number) =>
    new Intl.NumberFormat("de-DE", {
      maximumFractionDigits: 0,
    }).format(value);

  const effectivePrice = [
    {
      label: timeTable.rowOne,
      value: machine.price.perDay,
      note: "Flexibel",
    },
    {
      label: timeTable.rowTwo,
      value: machine.price.perWeek,
      note: "Beliebt",
      featured: true,
    },
    {
      label: timeTable.rowThree,
      value: machine.price.perMonth,
      note: "Projektpreis",
    },
  ];

  return (
    <div className="w-full">
      <ul className="overflow-hidden rounded-xl border border-gray-200 bg-white/40 shadow-sm">
        {effectivePrice.map((price) => (
          <li
            key={price.label}
            className={`flex items-center justify-between gap-4 border-b border-gray-200 last:border-b-0 ${itemPadding} ${
              price.featured ? "bg-primary/10" : "bg-white/40"
            }`}
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className={`${labelTextSize} font-semibold text-secondary`}>
                  {price.label}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide ${
                    price.featured
                      ? "bg-primary text-secondary"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {price.note}
                </span>
              </div>
              <p className={`${infoTextSize} mt-0.5 text-gray-500`}>
                {timeTable.priceInformation}
              </p>
            </div>

            <div className="shrink-0 text-right">
              <span className={`${priceTextSize} font-extrabold text-secondary`}>
                {formatPrice(price.value)} €
              </span>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-2 flex items-center justify-end gap-1.5 text-xs text-gray-500">
        <Calendar1 className="h-3.5 w-3.5 text-primary" aria-hidden />
        <span>{timeTable.rentInformation}</span>
      </div>
    </div>
  );
}
