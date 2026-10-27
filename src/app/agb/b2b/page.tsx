import LegalPage from "@/components/LegalPage";
import { legalPageMetadata } from "@/lib/metadata";
import { b2bPageData } from "@/lib/content/pages/agb/b2bPageData";

export const metadata = legalPageMetadata(b2bPageData, "/agb/b2b");

export default function Page() {
  return <LegalPage Body={b2bPageData.Body} />;
}
