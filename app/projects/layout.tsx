import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Featured Architecture & Construction Projects | Kerala Homes & Developers",
  description: "Explore our portfolio of bespoke residential villas, luxury homes, and commercial developments across Kottayam, Thiruvalla, and Kerala.",
  alternates: {
    canonical: "https://keralahomes.co.in/projects",
  },
  openGraph: {
    title: "Featured Architecture & Construction Projects | Kerala Homes & Developers",
    description: "Explore our portfolio of bespoke residential villas, luxury homes, and commercial developments across Kottayam, Thiruvalla, and Kerala.",
    url: "https://keralahomes.co.in/projects",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
