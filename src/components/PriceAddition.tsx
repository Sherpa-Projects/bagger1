type PriceAdditionProps = {
  info: {
    insuranceInformation: string;
    taxInformation: string;
  };
};

export default function PriceAddition({ info }: PriceAdditionProps) {
  return (
    <div className="rounded-xl border border-gray-300 bg-white/40 p-4 mt-6 shadow-sm">
      <h3 className="mb-1">Zusätzlich:</h3>
      <div className="text-sm">
        <div className="space-y-1 mb-2">
          <p>{info.insuranceInformation}</p>
          <p>{info.taxInformation}</p>
        </div>
        <p className="font-bold text-base">Keine versteckten Kosten.</p>
      </div>
    </div>
  );
}
