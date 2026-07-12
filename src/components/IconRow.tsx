import { Card } from "@/components/ui/card";

type IconRowProps = {
  title: string;
  items: ReadonlyArray<{
    label: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }>;
};

export default function IconRow({ title, items }: IconRowProps) {
  return (
    <div className="py-10 px-4">
      <div className="container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-3xl pb-4 lg:pb-6 lg:leading-tight text-center">
          {title}
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ label, Icon }, i) => (
            <Card key={i} className="p-6">
              <li className="relative overflow-hidden">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary">
                    <Icon
                      className="h-6 w-6 text-secondary"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-lg font-semibold leading-tight">
                      {label}
                    </p>
                  </div>
                </div>
              </li>
            </Card>
          ))}
        </ul>
      </div>
    </div>
  );
}
