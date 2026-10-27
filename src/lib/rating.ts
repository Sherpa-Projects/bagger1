// Gemeinsame Helfer für Google-Bewertungen (Rating, GoogleReviewButton)
export const clampStars = (value: number) => Math.min(5, Math.max(0, value));

// 4.8 -> "4,8"
export const formatStars = (stars: number) =>
  stars.toFixed(1).replace(".", ",");

export const formatReviewCount = (reviews: number) =>
  `${reviews.toLocaleString("de-DE")} Bewertung${reviews === 1 ? "" : "en"}`;
