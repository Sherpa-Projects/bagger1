import Link from "next/link";
import { MessageCircleQuestion, Phone } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import { company } from "@/lib/content/company";
import { phoneHref, whatsappHref } from "@/lib/contact";
import { cn } from "@/lib/cn";

const contactButtonClass =
  "inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-secondary transition-all duration-300 hover:border-primary hover:shadow-sm";

// Kontaktbox neben den FAQ ("Ihre Frage ist nicht dabei?")
export default function FaqContactBox({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-orange-50/70 p-5",
        className,
      )}
    >
      <div className="mb-3 flex items-center gap-2">
        <MessageCircleQuestion
          className="h-5 w-5 text-primary"
          aria-hidden="true"
        />
        <p className="font-semibold text-secondary">
          Ihre Frage ist nicht dabei?
        </p>
      </div>
      <p className="mb-4 text-sm text-gray-600">
        Schreiben oder rufen Sie uns an, wir helfen gerne weiter.
      </p>
      <div className="flex flex-wrap gap-2">
        <Link
          href={whatsappHref(company.contact.whatsapp)}
          target="_blank"
          rel="noreferrer noopener"
          className={contactButtonClass}
        >
          <SiWhatsapp size={16} color="default" aria-hidden="true" />
          WhatsApp
        </Link>
        {company.contact.telephone && (
          <Link
            href={phoneHref(company.contact.telephone)}
            className={contactButtonClass}
          >
            <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
            Anrufen
          </Link>
        )}
      </div>
    </div>
  );
}
