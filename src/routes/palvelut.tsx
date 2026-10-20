import { createFileRoute } from "@tanstack/react-router";
import { BIZ, PageHead, services } from "@/components/site";

export const Route = createFileRoute("/palvelut")({
  head: () => ({
    meta: [
      { title: "Palvelut – AutoVag Oy Kaarina" },
      { name: "description", content: "Huollot, vianetsintä, korjaukset, rengastyöt, automaalaus ja autopesu Kaarinassa." },
      { property: "og:title", content: "Palvelut – AutoVag Oy" },
      { property: "og:description", content: "Huolto- ja korjauspalvelut kaikille merkeille, VAG-erikoisosaaminen." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHead kicker="Mitä teemme" title="Palvelut">
        Huolto- ja korjauspalvelut kaiken merkkisille ajoneuvoille – vahvana erikoisalana VAG-konsernin autot.
      </PageHead>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="divide-y divide-border border-y border-border">
          {services.map((s) => (
            <div key={s.n} className="grid gap-4 py-10 md:grid-cols-[120px_1fr_1.2fr] md:items-baseline">
              <div className="label-mono text-muted-foreground">{s.n}</div>
              <h2 className="text-3xl font-black uppercase md:text-4xl">{s.t}</h2>
              <p className="text-lg text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-wrap gap-6 label-mono text-muted-foreground">
          {["Audi", "Volkswagen", "Skoda", "Seat", "Cupra", "+ kaikki merkit"].map((b) => <span key={b}>{b}</span>)}
        </div>
        <a href={`tel:${BIZ.tel}`} className="label-mono mt-12 inline-block bg-primary px-6 py-4 text-primary-foreground">Pyydä tarjous · {BIZ.phone}</a>
      </section>
    </>
  );
}
