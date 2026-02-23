import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AISimplified",
    short_name: "AISimplified",
    description: "AI Voice Agent Platform for enterprise-grade deployment.",
    start_url: "/",
    display: "standalone",
    background_color: "#060D1F",
    theme_color: "#3C63F3",
    icons: [
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  };
}
