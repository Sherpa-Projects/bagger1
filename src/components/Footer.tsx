import Link from "next/link";
import Image from "next/image";
import { footerData } from "@/lib/content/components/footerData";
import { company, openingHoursLines } from "@/lib/content/company";
import { locationData } from "@/lib/content/locationData";
import { mailHref, phoneHref, whatsappHref } from "@/lib/contact";
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import Container from "@/components/shared/Container";
import Headline from "@/components/shared/Headline";
import Glow from "@/components/shared/Glow";

export default function Footer() {
  const contactItems = [
    ...(company.contact.telephone
      ? [
          {
            label: "Telefon (kostenlos)",
            value: company.contact.telephone,
            href: phoneHref(company.contact.telephone),
            icon: <Phone className="h-6 w-6 text-secondary" aria-hidden />,
          },
        ]
      : []),
    {
      label: "WhatsApp",
      value: company.contact.whatsapp,
      href: whatsappHref(company.contact.whatsapp),
      icon: (
        <SiWhatsapp size={24} className="text-secondary" aria-hidden="true" />
      ),
    },
    {
      label: "E-Mail",
      value: company.contact.email,
      href: mailHref(company.contact.email),
      icon: <Mail className="h-6 w-6 text-secondary" aria-hidden />,
    },
  ];

  return (
    <footer className="bg-secondary text-white">
      <div
        className="h-3 w-full bg-[repeating-linear-gradient(-45deg,var(--color-primary)_0_18px,transparent_18px_36px)]"
        aria-hidden="true"
      />
      <div className="relative overflow-hidden">
        <Glow className="-top-48 -left-40 h-[30rem] w-[30rem] bg-primary/15" />

        <Container className="relative px-4 py-14 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 lg:items-end">
            <div className="lg:col-span-5">
              <Headline size="lg">
                Fragen zur Miete?
                <br />
                <span className="text-primary">Wir sind für Sie da.</span>
              </Headline>
            </div>
            <ul className="lg:col-span-7 grid sm:grid-cols-3 gap-3">
              {contactItems.map(({ label, value, href, icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="group flex h-full items-center sm:items-start sm:flex-col gap-4 rounded-2xl bg-white/5 border border-white/10 p-5 transition-colors hover:border-primary/60 hover:bg-white/10"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary">
                      {icon}
                    </span>
                    <span>
                      <span className="block text-sm text-gray-400">
                        {label}
                      </span>
                      <span className="block text-lg font-semibold break-words group-hover:text-primary transition-colors">
                        {value}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 lg:mt-16 pt-10 lg:pt-12 border-t border-white/10 grid md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
                Standorte
              </h3>
              <ul className="grid grid-cols-2 gap-3">
                {locationData.map((location) => (
                  <li key={location.slug}>
                    <Link
                      href={`/${location.slug}`}
                      className="group flex items-center justify-between gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 transition-colors hover:border-primary/60 hover:bg-white/10"
                    >
                      <span className="flex items-center gap-2 min-w-0">
                        <MapPin
                          className="text-primary shrink-0"
                          size={18}
                          aria-hidden="true"
                        />
                        <span className="text-base truncate">
                          {location.name}
                        </span>
                      </span>
                      <ArrowRight
                        className="text-gray-500 shrink-0 transition-all group-hover:translate-x-1 group-hover:text-primary"
                        size={18}
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
                {company.openingHours.title}
              </h3>
              <ul className="space-y-3 text-gray-300">
                {openingHoursLines.map((line) => (
                  <li key={line} className="flex items-center gap-2">
                    <Clock
                      className="text-primary shrink-0"
                      size={18}
                      aria-hidden="true"
                    />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Marke und Verbandsmitgliedschaft als eigene Zeile */}
          <div className="mt-10 lg:mt-12 pt-8 border-t border-white/10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
              <Image
                src="/images/logo_orange.svg"
                alt="BAGGER1 Logo"
                width={188}
                height={40}
                className="h-9 w-auto"
              />
              <p className="text-gray-300 sm:border-l sm:border-white/10 sm:pl-5">
                Ihre Nummer 1 für Bagger und Maschinen.
              </p>
            </div>
            <Link
              href="https://www.bbi-online.org/"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-3 pr-5 transition-colors hover:border-primary/60 hover:bg-white/10 md:max-w-md"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white p-1.5">
                <Image
                  src="/images/bbi_logo.png"
                  alt="BBI Logo"
                  width={40}
                  height={40}
                  className="h-full w-auto"
                />
              </span>
              <span className="text-sm text-gray-300 leading-snug">
                Mitglied im Bundesverband der Baumaschinen-, Baugeräte- und
                Industriemaschinen-Firmen e.V.
              </span>
            </Link>
          </div>
        </Container>
      </div>

      <div className="border-t border-white/10">
        <Container className="px-4 py-6 flex flex-col-reverse gap-4 md:flex-row md:items-center md:justify-between text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} {company.companyName}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerData.legalInformation.map((information) => (
              <li key={information.url}>
                <Link
                  href={information.url}
                  className="hover:text-primary transition-colors"
                >
                  {information.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
