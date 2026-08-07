import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Heart, ShieldCheck, Sparkles, Droplets, Apple, Wheat } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Salud cardiovascular",
    description: "Rica en ácidos grasos saludables que ayudan a mantener el colesterol en equilibrio.",
  },
  {
    icon: ShieldCheck,
    title: "Sin gluten",
    description: "Un snack seguro para celíacos, libre de alérgenos y 100% natural.",
  },
  {
    icon: Sparkles,
    title: "Alto valor energético",
    description: "Perfecta para deportistas: aporta energía duradera de forma natural.",
  },
  {
    icon: Droplets,
    title: "Hidratación vegetal",
    description: "Base de la tradicional horchata, una bebida refrescante y nutritiva.",
  },
  {
    icon: Apple,
    title: "Fibra digestiva",
    description: "Alto contenido en fibra que favorece una digestión saludable.",
  },
  {
    icon: Wheat,
    title: "Origen sostenible",
    description: "Cultivada con métodos tradicionales que respetan el entorno mediterráneo.",
  },
];

export function History() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="historia" className="relative bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={sectionRef}
          className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 ${
            sectionVisible ? "reveal-visible" : ""
          } reveal`}
        >
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Historia
            </span>
            <h2 className="mt-3 text-balance text-4xl font-semibold leading-tight text-earth-900 lg:text-5xl">
              Un legado que crece bajo la tierra
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-earth-700 lg:text-lg">
              <p>
                La Chufa de Valencia, también conocida como juncia avellanada, llegó a las costas
                mediterráneas hace más de cuatro siglos. Desde entonces, los agricultores valencianos
                han perfeccionado su cultivo en la huerta, convirtiéndola en un símbolo de
                identidad gastronómica.
              </p>
              <p>
                Reconocida con la Denominación de Origen Chufa de Valencia, cada tubérculo es
                seleccionado a mano, secado al sol y controlado para garantizar su sabor dulce y su
                textura crujiente. Un producto que une tradición, territorio y bienestar en cada
                bocado.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-2xl border border-cream-400 bg-cream-50 px-6 py-4">
                <p className="text-3xl font-semibold text-primary">4</p>
                <p className="text-sm text-earth-600">Siglos de historia</p>
              </div>
              <div className="rounded-2xl border border-cream-400 bg-cream-50 px-6 py-4">
                <p className="text-3xl font-semibold text-primary">16</p>
                <p className="text-sm text-earth-600">Municipios productores</p>
              </div>
            </div>
          </div>

          <div id="beneficios" className="relative scroll-mt-24">
            <div className="absolute -right-6 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
            <div className="relative rounded-3xl border border-cream-400/50 bg-cream-50 p-8 shadow-xl lg:p-10">
              <h3 className="text-2xl font-semibold text-earth-900">Beneficios para la salud</h3>
              <p className="mt-2 text-earth-600">
                Pequeña en tamaño, gigante en propiedades nutritivas.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit.title}
                    className={`group rounded-2xl border border-cream-400/50 bg-cream-100/50 p-5 transition-all hover:border-primary/30 hover:bg-cream-100 hover:shadow-md ${
                      sectionVisible ? "reveal-visible" : ""
                    } reveal stagger-${Math.min(index + 1, 5)}`}
                  >
                    <div className="mb-3 inline-flex rounded-xl bg-primary/10 p-2.5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <benefit.icon className="h-5 w-5" />
                    </div>
                    <h4 className="font-display text-lg font-medium text-earth-900">
                      {benefit.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-earth-600">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          ref={gridRef}
          className={`mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-28 ${
            gridVisible ? "reveal-visible" : ""
          } reveal`}
        >
          {[
            { value: "35%", label: "Fibra dietética" },
            { value: "20%", label: "Grasas saludables" },
            { value: "0%", label: "Colesterol" },
            { value: "100%", label: "Natural" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`rounded-2xl border border-cream-400/50 bg-cream-50 p-6 text-center transition-all hover:border-primary/30 hover:bg-cream-100 ${
                gridVisible ? "reveal-visible" : ""
              } reveal stagger-${index + 1}`}
            >
              <p className="text-3xl font-semibold text-primary sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-earth-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
