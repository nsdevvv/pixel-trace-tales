import { createFileRoute } from "@tanstack/react-router";
import { BIZ, PageHead } from "@/components/site";

export const Route = createFileRoute("/yhteystiedot")({
  head: () => ({
    meta: [
      { title: "Yhteystiedot – AutoVag Oy, Autoilijankatu 16 Kaarina" },
      { name: "description", content: "Soita 044 235 1227 tai tule käymään: Autoilijankatu 16, 20780 Kaarina." },
      { property: "og:title", content: "Yhteystiedot – AutoVag Oy" },
      { property: "og:description", content: "Autoilijankatu 16, 20780 Kaarina · 044 235 1227" },
    ],
  }),
  component: Page,
});

function Page() {
  const rows = [
    ["Puhelin", BIZ.phone, `tel:${BIZ.tel}`],
    ["Osoite", BIZ.address, BIZ.maps],
    ["Instagram", "@autovag.fi", BIZ.instagram],
  ];
  return (
    <>
      <PageHead kicker="Ota yhteyttä" title="Yhteys" />
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2">
        <div className="divide-y divide-border border-y border-border">
          {rows.map(([k, v, h]) => (
            <a key={k} href={h} target={h.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex flex-col gap-1 py-8 transition-opacity hover:opacity-60">
              <span className="label-mono text-muted-foreground">{k}</span>
              <span className="text-2xl font-bold md:text-3xl">{v}</span>
            </a>
          ))}
          <div className="py-8">
            <span className="label-mono text-muted-foreground">Aukioloajat</span>
            <p className="mt-1 text-xl font-bold">Ma–Pe: sopimuksen mukaan</p>
            <p className="text-xl font-bold">La–Su: 10–17</p>
          </div>
        </div>
        <iframe
          title="AutoVag Oy kartalla"
          src="https://www.google.com/maps?q=Autoilijankatu+16,+20780+Kaarina&output=embed"
          className="min-h-[420px] w-full border border-border grayscale"
          loading="lazy"
        />
      </section>
    </>
  );
}
