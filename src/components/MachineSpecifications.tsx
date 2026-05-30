import type { Machine } from "@/app/types/Machine";
import { machinePageData } from "@/lib/content/pages/machine/machinePageData";

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

const dimensionFields = [
  {
    key: "width",
    label: machinePageData.specifications.dimensions.width,
  },
  {
    key: "length",
    label: machinePageData.specifications.dimensions.length,
  },
  {
    key: "height",
    label: machinePageData.specifications.dimensions.height,
  },
  {
    key: "weight",
    label: machinePageData.specifications.dimensions.weight,
  },
  {
    key: "volume",
    label: machinePageData.specifications.dimensions.volume,
  },
] satisfies SpecFields<NonNullable<MachineSpecificationData["dimensions"]>>;

const workingRangeFields = [
  {
    key: "maxDepth",
    label: machinePageData.specifications.workingRange.maxDepth,
  },
  {
    key: "maxReach",
    label: machinePageData.specifications.workingRange.maxReach,
  },
  {
    key: "minSwingRadius",
    label: machinePageData.specifications.workingRange.minSwingRadius,
  },
  {
    key: "bucketBreakoutForceISO",
    label: machinePageData.specifications.workingRange.bucketBreakoutForceISO,
  },
  {
    key: "armTearOutForceISO",
    label: machinePageData.specifications.workingRange.armTearOutForceISO,
  },
  {
    key: "bucketCapacity",
    label: machinePageData.specifications.workingRange.bucketCapacity,
  },
  {
    key: "payloadS125",
    label: machinePageData.specifications.workingRange.payloadS125,
  },
  {
    key: "tippingLoadBucket",
    label: machinePageData.specifications.workingRange.tippingLoadBucket,
  },
  {
    key: "tippingLoadPalletFork",
    label: machinePageData.specifications.workingRange.tippingLoadPalletFork,
  },
] satisfies SpecFields<NonNullable<MachineSpecificationData["workingRange"]>>;

function SpecificationList<T extends Record<string, string | undefined>>({
  fields,
  values,
}: {
  fields: SpecFields<T>;
  values: T;
}) {
  const rows = fields.filter(({ key }) => values[key]);

  if (rows.length === 0) return null;

  return (
    <ul>
      {rows.map(({ key, label }) => (
        <li key={String(key)}>
          {label}: {values[key]}
        </li>
      ))}
    </ul>
  );
}

export default function MachineSpecifications({
  model,
  specifications,
}: MachineSpecificationsProps) {
  return (
    <details open className="group rounded-xl border border-gray-200 bg-white">
      <summary className="flex items-center justify-between cursor-pointer select-none px-4 py-3">
        <span className="text-xl font-semibold">
          {machinePageData.specifications.title}
        </span>
        <svg
          className="h-5 w-5 transition-transform duration-300 group-open:rotate-180"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
        </svg>
      </summary>

      <div className="px-4 pb-4 pt-2 space-y-4 text-gray-800">
        <div className="mb-4">Modell: {model}</div>
        <div className="space-y-4">
          {specifications.dimensions && (
            <div>
              <h4 className="font-bold">
                {machinePageData.specifications.dimensions.title}:
              </h4>
              <SpecificationList
                fields={dimensionFields}
                values={specifications.dimensions}
              />
            </div>
          )}

          {specifications.power && (
            <p>
              {machinePageData.specifications.power.title}:{" "}
              {specifications.power}
            </p>
          )}

          {specifications.workingRange && (
            <div>
              <h4 className="font-bold">
                {machinePageData.specifications.workingRange.title}:
              </h4>
              <SpecificationList
                fields={workingRangeFields}
                values={specifications.workingRange}
              />
            </div>
          )}
        </div>
      </div>
    </details>
  );
}
