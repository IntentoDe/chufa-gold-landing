import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Sprout, Sun, Droplets, Shovel, Wind, Package } from "lucide-react";

const steps = [
  {
    icon: Sprout,
    title: "Siembra",
    description:
      "Entre abril y mayo se siembran los tubérculos seleccionados en campos de suelo arenoso de la huerta valenciana.",
  },
  {
    icon: Droplets,
    title: "Riego tradicional",
    description:
      "El agua de la acequia riega los campos con métodos heredados de la cultura mediterránea, respetando el ciclo natural.",
  },
  {
    icon: Shovel,
    title: "Recolección",
    description:
      "En noviembre, cuando la planta ha madurado, se arranca la chufa de la tierra con cuidado para no dañar el tubérculo.",
  },
  {
    icon: Wind,
    title: "Lavado y selección",
    description:
      "Se limpia con agua, se eliminan restos de tierra y se seleccionan manualmente los mejores ejemplares.",
  },
  {
    icon: Sun,
    title: "Secado al sol",
    description:
      "Se extienden al sol durante semanas hasta alcanzar la textura crujiente y el dulzor concentrado que las caracteriza.",
  },
  {
    icon: Package,
    title: "Envasado artesanal",
    description:
      "Finalmente se envasan respetando su origen DOP para llegar a tu mesa con todo su sabor y propiedades.",
  },
];

export function Timeline() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="proceso" className="relative overflow-hidden bg-cream-100 py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-cream-400 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div
          ref={headerRef}
          className={`mx-auto max-w-2xl text-center ${headerVisible ? "reveal-visible" : ""} reveal`}
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Proceso
          </span>
          <h2 className="mt-3 text-balance text-4xl font-semibold leading-tight text-earth-900 lg:text-5xl">
            De la tierra a tu mesa
          </h2>
          <p className="mt-4 text-lg text-earth-600">
            Un ciclo de seis pasos que respeta la tradición y la naturaleza.
          </p>
        </div>

        <div
          ref={timelineRef}
          className={`relative mt-16 lg:mt-24 ${timelineVisible ? "reveal-visible" : ""} reveal`}
        >
          <div className="absolute left-8 top-0 h-full w-0.5 bg-cream-400 lg:left-1/2 lg:-translate-x-px" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.title}
                  className={`relative grid grid-cols-1 items-center gap-6 lg:grid-cols-2 ${
                    timelineVisible ? "reveal-visible" : ""
                  } reveal stagger-${Math.min(index + 1, 5)}`}
                >
                  <div
                    className={`pl-20 lg:pl-0 ${isEven ? "lg:pr-16 lg:text-right" : "lg:order-2 lg:pl-16 lg:text-left"}`}
                  >
                    <div
                      className={`inline-flex items-center gap-3 ${isEven ? "lg:flex-row-reverse" : ""}`}
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                        <step.icon className="h-5 w-5" />
                      </span>
                      <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                        Paso {index + 1}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-medium text-earth-900 lg:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-earth-600">{step.description}</p>
                  </div>

                  <div
                    className={`absolute left-8 top-0 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-cream-100 bg-primary lg:left-1/2 ${isEven ? "lg:order-1" : ""}`}
                  />

                  <div
                    className={`hidden pl-20 lg:block lg:pl-0 ${isEven ? "lg:order-2 lg:pl-16" : "lg:pr-16"}`}
                  >
                    <div
                      className={`h-32 rounded-2xl border border-cream-400/50 bg-cream-50/80 bg-[radial-gradient(circle_at_top_right,theme(colors.primary/5%),transparent_50%)] ${isEven ? "" : ""}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
