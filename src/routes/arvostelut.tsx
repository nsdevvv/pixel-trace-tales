import { createFileRoute } from "@tanstack/react-router";
import { PageHead, reviews, Stars } from "@/components/site";

export const Route = createFileRoute("/arvostelut")({
  head: () => ({
    meta: [
      { title: "Arvostelut – AutoVag Oy | 5/5 Googlessa" },
      { name: "description", content: "Asiakkaidemme arviot: 5/5 Googlessa (7 arvostelua) ja Infobelissä (6 arvostelua)." },
      { property: "og:title", content: "Arvostelut – AutoVag Oy" },
      { property: "og:description", content: "5/5 tähteä – lue mitä asiakkaat sanovat AutoVagista." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHead kicker="Asiakkaat sanovat" title="5/5">
        Google: 5/5 (7 arvostelua) · Infobel: 5/5 (6 arvostelua)
      </PageHead>
      <section className="mx-auto grid max-w-7xl gap-px bg-border px-0 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r) => (
          <article key={r.name} className="flex flex-col bg-background p-8">
            <Stars />
            <p className="mt-6 flex-1 text-lg">{r.text ? `”${r.text}”` : <span className="text-muted-foreground">Antoi 5 tähteä.</span>}</p>
            <div className="mt-8 flex justify-between border-t border-border pt-4">
              <span className="font-bold">{r.name}</span>
              <span className="label-mono text-muted-foreground">Google · {r.when}</span>
            </div>
          </article>
        ))}
      </section>
      <div className="h-20" />
    </>
  );
}
