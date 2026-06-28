import { Machine } from "@/app/types/Machine";
import { machinePageData } from "@/lib/content/pages/machine/machinePageData";

export type PriceTableProps = {
  machine: Machine;
  size?: "sm" | "lg";
};

export default function PriceTable({ machine, size = "lg" }: PriceTableProps) {
  const { timeTable } = machinePageData;
  const isSmall = size === "sm";
  const priceLabelSize = isSmall ? "text-sm" : "text-base";
  const listTextSize = isSmall ? "text-lg" : "text-xl";
  const itemPadding = isSmall ? "p-3" : "p-4";
  const infoTextSize = isSmall ? "text-[0.65rem]" : "text-xs";

  const effectivePrice = [
    {
      label: timeTable.rowOne,
      value: machine.price.perDay,
    },
    {
      label: timeTable.rowTwo,
      value: machine.price.perWeek,
    },
    {
      label: timeTable.rowThree,
      value: machine.price.perMonth,
    },
  ];

  return (
    <>
      <ul className={`border border-gray-200 ${listTextSize} mb-2`}>
        {effectivePrice.map((price, index) => (
          <li
            key={index}
            className={`flex justify-between items-center ${itemPadding} border-b border-gray-200 last:border-b-0 ${
              index === 1 ? "bg-white" : "bg-orange-50"
            }`}
          >
            <span className={priceLabelSize}>{price.label}</span>
            <div>
              <span className="font-bold">{price.value} € </span>
              <span className={`${infoTextSize} text-gray-500`}>
                {timeTable.priceInformation}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <p className="text-xs mb-5 w-full flex justify-end">
        {timeTable.rentInformation}
      </p>
    </>
  );
}
