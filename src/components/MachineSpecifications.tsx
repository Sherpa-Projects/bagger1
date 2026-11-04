import type { Machine } from "@/types/Machine";
import { machinePageData } from "@/lib/content/pages/machine/machinePageData";
import { ChevronDown } from "lucide-react";
import SurfaceCard from "@/components/shared/SurfaceCard";

type MachineSpecificationData = NonNullable<
  NonNullable<Machine["content"]>["specifications"]
>;
type SpecFields<T> = readonly {
  key: keyof T;
  label: string;
}[];

type MachineSpecificationsProps = {
  model: Machine["model"];
  specifications: MachineSpecificationData;
};

const { dimensions, workingRange } = machinePageData.specifications;

const dimensionFields = (
  ["width", "length", "height", "weight", "volume"] as const
).map((key) => ({
  key,
  label: dimensions[key],
})) satisfies SpecFields<NonNullable<MachineSpecificationData["dimensions"]>>;

const workingRangeFields = (
  [
    "maxDepth",
    "maxReach",
    "minSwingRadius",
    "bucketBreakoutForceISO",
    "armTearOutForceISO",
    "bucketCapacity",
    "payloadS125",
    "tippingLoadBucket",
    "tippingLoadPalletFork",
  ] as const
).map((key) => ({
  key,
  label: workingRange[key],
})) satisfies SpecFields<NonNullable<MachineSpecificationData["workingRange"]>>;

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-2.5">
      <dt className="text-gray-500">{label}</dt>
      <dd className="text-right font-semibold text-secondary">{value}</dd>
    </div>
  );
}

function SpecificationGroup<T extends Record<string, string | undefined>>({
  title,
  fields,
  values,
}: {
  title: string;
  fields: SpecFields<T>;
  values: T;
}) {
  const rows = fields.filter(({ key }) => values[key]);

  if (rows.length === 0) return null;

  return (
    <div>
      <h4 className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
        {title}
      </h4>
      <dl className="divide-y divide-gray-100">
        {rows.map(({ key, label }) => (
          <SpecRow key={String(key)} label={label} value={values[key]!} />
        ))}
      </dl>
    </div>
  );
}

export default function MachineSpecifications({
  model,
  specifications,
}: MachineSpecificationsProps) {
  const { specifications: labels } = machinePageData;

  return (
    <SurfaceCard>
      <details open className="group">
        <summary className="flex cursor-pointer select-none items-center justify-between gap-4 px-6 py-5 sm:px-8 [&::-webkit-details-marker]:hidden">
          <span>
            <span className="block font-bold text-2xl">{labels.title}</span>
            <span className="block text-sm text-gray-500">{model}</span>
          </span>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white transition-all duration-300 group-hover:border-primary/60 group-open:rotate-180">
            <ChevronDown className="h-4 w-4 text-primary" aria-hidden="true" />
          </span>
        </summary>

        <div className="grid gap-6 px-6 pb-6 sm:px-8 sm:pb-8 md:grid-cols-2 md:gap-10">
          <div>
            {specifications.dimensions && (
              <SpecificationGroup
                title={labels.dimensions.title}
                fields={dimensionFields}
                values={specifications.dimensions}
              />
            )}
            {specifications.power && (
              <dl className="border-t border-gray-100">
                <SpecRow
                  label={labels.power.title}
                  value={specifications.power}
                />
              </dl>
            )}
          </div>
          {specifications.workingRange && (
            <SpecificationGroup
              title={labels.workingRange.title}
              fields={workingRangeFields}
              values={specifications.workingRange}
            />
          )}
        </div>
      </details>
    </SurfaceCard>
  );
}
