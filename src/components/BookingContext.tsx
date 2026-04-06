import { Info } from "lucide-react";

type BookingContextProps = {
  data: React.ReactNode;
};

export default function BookingContext({ data }: BookingContextProps) {
  return (
    <section className="pb-10 pt-5 lg:pb-20 lg:pt-10 px-4">
      <div className="container mx-auto md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
        <div className="py-6 px-8 rounded-xl border border-primary bg-orange-50 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center">
            <Info size={32} className="mb-4 lg:mr-4 shrink-0 text-primary" />
            <p>{data}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
