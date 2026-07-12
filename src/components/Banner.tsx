import Image from "next/image";

type BannerProps = {
  banner: string;
};

export default function Banner({ banner }: BannerProps) {
  return (
    <div className="hidden px-4 text-center text-sm w-full md:flex items-center justify-center bg-gradient-to-r bg-primary animate-gradient-x py-2 lg:py-1 text-black">
      <Image
        className="mr-2"
        src={`/images/bbi_logo.png`}
        alt="BBI Logo"
        width={30}
        height={30}
      />
      {banner}
    </div>
  );
}
