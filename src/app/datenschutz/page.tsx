import LegalPage from "@/components/LegalPage";
import { legalPageMetadata } from "@/lib/metadata";
import { privacyPageData } from "@/lib/content/pages/datenschutz/privacyPageData";

export const metadata = legalPageMetadata(privacyPageData, "/datenschutz");

export default function Page() {
  return <LegalPage Body={privacyPageData.Body} />;
}
