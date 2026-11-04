type BranchCardProps = {
  title: string;
  // Auf der Startseite als "Coming Soon" angekündigte Standorte
  comingSoonLocations: { name: string; map: string }[];
};

export const branchCardData: BranchCardProps = {
  title: "Unsere Standorte",
  comingSoonLocations: [
    {
      name: "Leipzig",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159509.7300766179!2d12.228828673211801!3d51.34166687916191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a6f818200f2c73%3A0x93df80d2b9b4f552!2sLeipzig!5e0!3m2!1sde!2sde!4v1761466765071!5m2!1sde!2sde",
    },
    {
      name: "Hannover",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155871.76672528224!2d9.596665497376383!3d52.379551797928855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b00b514d494f85%3A0x425ac6d94ac4720!2sHannover!5e0!3m2!1sde!2sde!4v1761466827313!5m2!1sde!2sde",
    },
  ],
};
