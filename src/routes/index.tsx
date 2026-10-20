import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { BIZ, reviews, services, Stars } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AutoVag Oy – Autokorjaamo Kaarinassa | VAG-erikoisosaaja" },
      { name: "description", content: "Huollot ja korjaukset kaikille merkeille, erikoistunut Audi, VW, Skoda ja Seat -autoihin. Autoilijankatu 16, Kaarina. 5/5 arvostelut." },
      { property: "og:title", content: "AutoVag Oy – Autokorjaamo Kaarinassa" },
      { property: "og:description", content: "Luotettava autokorjaamo Kaarinassa, erikoistunut VAG-konsernin autoihin." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-inverse text-inverse-foreground">
        <img src={hero} alt="Audi nostimella AutoVagin korjaamossa" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20">
          <div className="label-mono text-inverse-muted animate-rise">Autokorjaamo · Kaarina</div>
          <h1 className="animate-rise mt-4 text-6xl font-black uppercase leading-[0.9] md:text-[9rem]">
            VAG-osaaja.<br />Kaikki merkit.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-inverse-muted">
            Laadukas työnjälki, sujuva asiointi ja kilpailukykyiset hinnat.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={`tel:${BIZ.tel}`} className="label-mono bg-inverse-foreground px-6 py-4 text-inverse">Soita {BIZ.phone}</a>
            <Link to="/palvelut" className="label-mono border border-inverse-foreground px-6 py-4">Palvelut →</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {[["5/5", "Google · 7 arvostelua"], ["5/5", "Infobel · 6 arvostelua"], ["2021", "Perustettu"], ["VAG", "Erikoisosaaminen"]].map(([a, b]) => (
            <div key={b} className="border-r border-border px-6 py-10 last:border-r-0">
              <div className="font-display text-4xl font-black md:text-5xl">{a}</div>
              <div className="label-mono mt-2 text-muted-foreground">{b}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-4xl font-black uppercase md:text-6xl">Palvelut</h2>
          <Link to="/palvelut" className="label-mono underline underline-offset-4">Kaikki palvelut</Link>
        </div>
        <div className="mt-12 grid border-l border-t border-border md:grid-cols-3">
          {services.slice(0, 3).map((s) => (
            <div key={s.n} className="group border-b border-r border-border p-8 transition-colors hover:bg-primary hover:text-primary-foreground">
              <div className="label-mono opacity-60">{s.n}</div>
              <h3 className="mt-8 text-2xl font-bold">{s.t}</h3>
              <p className="mt-3 text-sm opacity-70">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-inverse text-inverse-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Stars />
          <blockquote className="mt-6 max-w-4xl font-display text-3xl font-bold leading-tight md:text-5xl">
            ”{reviews[1]!.text}”
          </blockquote>
          <div className="label-mono mt-6 text-inverse-muted">— {reviews[1]!.name}, Google</div>
          <Link to="/arvostelut" className="label-mono mt-10 inline-block border border-inverse-foreground px-6 py-4">Lue kaikki arvostelut →</Link>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-24 md:flex-row md:items-center">
        <h2 className="text-4xl font-black uppercase md:text-6xl">Varaa aika<br />tänään.</h2>
        <div className="flex flex-wrap gap-3">
          <a href={`tel:${BIZ.tel}`} className="label-mono bg-primary px-6 py-4 text-primary-foreground">{BIZ.phone}</a>
          <Link to="/yhteystiedot" className="label-mono border border-foreground px-6 py-4">Yhteystiedot</Link>
        </div>
      </section>
    </>
  );
}
