import { MetadataRoute } from "next";
import { locationData } from "@/lib/content/locationData";
import { getLocationMachineRouteParams } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bagger1.de";

  const locationPages = locationData.map((loc) => ({
    url: `${baseUrl}/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const machinePages = getLocationMachineRouteParams().map((params) => ({
    url: `${baseUrl}/${params.location}/${params.machine}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const partnerPage = `${baseUrl}/partner`;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: partnerPage,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    ...locationPages,
    ...machinePages,
  ];
}
