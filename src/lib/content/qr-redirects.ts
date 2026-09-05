import { LINKS } from "@/constants/links";

export const qrRedirects: Record<string, string> = {
  a7k2x: new URL("hennef", LINKS.baseUrl).toString(),
  m3k8p: new URL("bruchsal", LINKS.baseUrl).toString(),
  b9f2q: new URL("stockstadt", LINKS.baseUrl).toString(),
};
