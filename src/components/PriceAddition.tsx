import { BadgeCheck, Receipt, ShieldCheck } from "lucide-react";

type PriceAdditionProps = {
  info: {
    insuranceInformation: string;
    taxInformation: string;
  };
};

export default function PriceAddition({ info }: PriceAdditionProps) {
  const rows = [
    { text: info.insuranceInformation, Icon: ShieldCheck },
    { text: info.taxInformation, Icon: Receipt },
  ];

  return (
    <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-4">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
        Zusätzlich
      </p>
      <ul className="space-y-2 text-sm text-gray-700">
        {rows.map(({ text, Icon }) => (
          <li key={text} className="flex items-center gap-2">
            <Icon
              className="h-4 w-4 shrink-0 text-primary"
              aria-hidden="true"
            />
            {text}
          </li>
        ))}
      </ul>
      <p className="mt-3 flex items-center gap-2 rounded-xl bg-primary/10 px-3 py-2 text-sm font-semibold text-secondary">
        <BadgeCheck
          className="h-4 w-4 shrink-0 text-primary"
          aria-hidden="true"
        />
        Keine versteckten Kosten.
      </p>
    </div>
  );
}
