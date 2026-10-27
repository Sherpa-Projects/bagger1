import Link from "next/link";
import { Truck } from "lucide-react";
import Container from "@/components/shared/Container";

type CrossLocationDeliveryNoteProps = {
  text: string;
  linkLabel: string;
};

export default function CrossLocationDeliveryNote({
  text,
  linkLabel,
}: CrossLocationDeliveryNoteProps) {
  return (
    <div className="px-4 -mt-4 pb-6 lg:-mt-6 lg:pb-10">
      <Container>
        <p className="flex items-start sm:items-center justify-center gap-3 text-sm text-neutral-600">
          <Truck size={18} className="shrink-0 text-primary mt-0.5 sm:mt-0" />
          <span>
            {text}{" "}
            <Link
              href="#faq"
              className="font-medium text-neutral-800 underline underline-offset-4 decoration-neutral-300 hover:decoration-primary transition-colors"
            >
              {linkLabel}
            </Link>
          </span>
        </p>
      </Container>
    </div>
  );
}
