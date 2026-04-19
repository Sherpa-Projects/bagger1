import { LocalUseCase } from "@/app/types/LocalUseCase";
import { localUsesCasesData } from "@/lib/content/components/localUseCasesData";

type LocalUseCasesProps = {
  locationName: string;
  useCases: LocalUseCase[];
};

export default function LocalUseCases({
  locationName,
  useCases,
}: LocalUseCasesProps) {
  return (
    <section className="pb-10 pt-5 lg:pb-20 lg:pt-10 px-4">
      <div className="container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
        <h2 className="font-bold text-2xl md:text-3xl pb-4 lg:pb-6 lg:leading-tight text-center">
          {localUsesCasesData.title} {locationName}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases?.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="border border-gray-300 bg-white rounded-lg p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary mb-3">
                  <Icon className="text-secondary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
