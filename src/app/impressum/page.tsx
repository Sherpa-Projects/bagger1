import LegalPage from "@/components/LegalPage";
import { legalPageMetadata } from "@/lib/metadata";
import { imprintPageData } from "@/lib/content/pages/impressum/imprintPageData";

export const metadata = legalPageMetadata(imprintPageData, "/impressum");

export default function Page() {
  return <LegalPage Body={imprintPageData.Body} />;
}
