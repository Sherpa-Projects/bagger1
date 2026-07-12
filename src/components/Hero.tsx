type HeroProps = {
  image: string;
  title: string;
  subtitle?: string;
};

export default function Hero({ image, title, subtitle }: HeroProps) {
  return (
    <div
      className="mt-17 md:mt-22 relative h-48 lg:h-72 flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative text-white text-center md:max-w-4xl lg:max-w-5xl xl:max-w-7xl px-4 space-y-4">
        <p className="text-5xl lg:text-8xl font-extrabold leading-normal tracking-wide">
          {title}
        </p>
        <h1 className="text-2xl lg:text-5xl tracking-wide">{subtitle}</h1>
      </div>
    </div>
  );
}
