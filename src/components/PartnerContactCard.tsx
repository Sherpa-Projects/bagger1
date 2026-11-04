import { Mail, Phone } from "lucide-react";
import BlueprintGrid from "@/components/shared/BlueprintGrid";
import Glow from "@/components/shared/Glow";
import { mailHref, phoneHref } from "@/lib/contact";

type PartnerContactCardProps = {
  description: string;
  subtitle: string;
  phone: string;
  email: string;
};

// Dunkle Kontaktkarte als Akzent auf der Partnerseite
export default function PartnerContactCard({
  description,
  subtitle,
  phone,
  email,
}: PartnerContactCardProps) {
  const contactLinks = [
    { href: phoneHref(phone), label: "Telefon", value: phone, Icon: Phone },
    { href: mailHref(email), label: "E-Mail", value: email, Icon: Mail },
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl bg-secondary p-6 text-white sm:p-8">
      <BlueprintGrid
        tone="dark"
        className="bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_top_right,black_10%,transparent_70%)]"
      />
      <Glow className="-top-24 -right-24 h-64 w-64 bg-primary/25" />
      <div className="relative">
        <p className="text-gray-300 leading-relaxed">{description}</p>
        <div className="mt-6 border-t border-white/10 pt-6">
          <p className="mb-4 font-bold text-xl">{subtitle}</p>
          <ul className="space-y-3">
            {contactLinks.map(({ href, label, value, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors duration-300 hover:border-primary/60 hover:bg-white/10"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-gray-400">{label}</span>
                    <span className="block font-semibold break-words transition-colors group-hover:text-primary">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
