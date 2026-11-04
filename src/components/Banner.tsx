import Image from "next/image";

type BannerProps = {
  banner: string;
};

export default function Banner({ banner }: BannerProps) {
  return (
    <div className="hidden md:flex w-full items-center justify-center gap-3 bg-primary px-4 py-1.5 text-center text-sm font-medium text-secondary">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white">
        <Image
          src="/images/bbi_logo.png"
          alt="BBI Logo"
          width={18}
          height={18}
        />
      </span>
      {banner}
    </div>
  );
}
