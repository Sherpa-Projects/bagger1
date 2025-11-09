import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "rtr-checkout": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "rtr-article-booking": {
        "article-id": string;
        view?: string;
        class?: string;
        style?: React.CSSProperties;
      };
      "rtr-search": {
        view?: string;
        "show-location"?: string;
        "load-behaviour"?: string;
        locations?: string;
        class?: string;
        style?: React.CSSProperties;
      };
    }
  }
}
