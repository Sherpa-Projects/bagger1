import LegalPage from "@/components/LegalPage";
import { legalPageMetadata } from "@/lib/metadata";
import { b2cPageData } from "@/lib/content/pages/agb/b2cPageData";

export const metadata = legalPageMetadata(b2cPageData, "/agb/b2c");

export default function Page() {
  return <LegalPage Body={b2cPageData.Body} />;
}
