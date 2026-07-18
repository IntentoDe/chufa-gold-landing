import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { History } from "@/components/landing/History";
import { Products } from "@/components/landing/Products";
import { Timeline } from "@/components/landing/Timeline";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Chufa de Valencia | El oro de la huerta mediterránea",
      },
      {
        name: "description",
        content:
          "Descubre la Chufa de Valencia: historia, beneficios para la salud y productos artesanales de tigernut con Denominación de Origen.",
      },
      {
        property: "og:title",
        content: "Chufa de Valencia | El oro de la huerta mediterránea",
      },
      {
        property: "og:description",
        content:
          "Descubre la Chufa de Valencia: historia, beneficios para la salud y productos artesanales con Denominación de Origen.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen">
      <Hero />
      <History />
      <Products />
      <Timeline />
      <Footer />
    </main>
  );
}
