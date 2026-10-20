import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const BIZ = {
  name: "AutoVag Oy",
  phone: "044 235 1227",
  tel: "+358442351227",
  address: "Autoilijankatu 16, 20780 Kaarina",
  instagram: "https://www.instagram.com/autovag.fi",
  maps: "https://www.google.com/maps/search/?api=1&query=AutoVag+Oy+Autoilijankatu+16+Kaarina",
};

const nav = [
  { to: "/", label: "Etusivu" },
  { to: "/palvelut", label: "Palvelut" },
  { to: "/arvostelut", label: "Arvostelut" },
  { to: "/yhteystiedot", label: "Yhteystiedot" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-xl font-black tracking-tighter">
          AUTO<span className="bg-primary px-1 text-primary-foreground">VAG</span>
        </Link>
        <nav className="hidden gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="label-mono text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a href={`tel:${BIZ.tel}`} className="label-mono bg-primary px-4 py-2 text-primary-foreground">
          {BIZ.phone}
        </a>
      </div>
      <nav className="flex justify-between border-t border-border px-6 py-2 md:hidden">
        {nav.map((n) => (
          <Link key={n.to} to={n.to} className="label-mono text-muted-foreground" activeProps={{ className: "text-foreground" }} activeOptions={{ exact: true }}>
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-inverse text-inverse-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="font-display text-3xl font-black tracking-tighter">AUTOVAG</div>
          <p className="mt-3 max-w-xs text-sm text-inverse-muted">Autokorjaamo Kaarinassa. Erikoistunut VAG-konsernin autoihin.</p>
        </div>
        <div className="space-y-2 text-sm">
          <div className="label-mono text-inverse-muted">Yhteys</div>
          <a className="block hover:underline" href={`tel:${BIZ.tel}`}>{BIZ.phone}</a>
          <a className="block hover:underline" href={BIZ.maps} target="_blank" rel="noreferrer">{BIZ.address}</a>
          <a className="block hover:underline" href={BIZ.instagram} target="_blank" rel="noreferrer">Instagram @autovag.fi</a>
        </div>
        <div className="space-y-2 text-sm">
          <div className="label-mono text-inverse-muted">Aukioloajat</div>
          <p>Ma–Pe: sopimuksen mukaan</p>
          <p>La–Su: 10–17</p>
        </div>
      </div>
      <div className="border-t border-inverse-border px-6 py-6 text-center label-mono text-inverse-muted">
        © {new Date().getFullYear()} AutoVag Oy · Y-tunnus 3184366-8
      </div>
    </footer>
  );
}

export function PageHead({ kicker, title, children }: { kicker: string; title: string; children?: ReactNode }) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="label-mono text-muted-foreground">{kicker}</div>
        <h1 className="animate-rise mt-4 text-5xl font-black uppercase md:text-8xl">{title}</h1>
        {children && <div className="mt-6 max-w-2xl text-lg text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}

export const reviews = [
  { name: "Kenan Foric", when: "6 kk sitten", text: "Loistavaa palvelua sain pojilta, vein Audi TT:n pojille huoltoon ja samalla pyysin, että pystyisikö korjata auton käyntivikaongelman – pojat paikansivat vian ja korjasivat sen." },
  { name: "Ilir Hajrullahi", when: "6 kk sitten", text: "Ammattitaitoista, nopeaa ja luotettavaa palvelua. Suosittelen!" },
  { name: "Anel Hajric", when: "6 kk sitten", text: "Erinomaista palvelua ja huoltoa!" },
  { name: "Onni-Pekka Lipponen", when: "6 kk sitten", text: "Hyvää palvelua." },
  { name: "Edon Prekazi", when: "vuosi sitten", text: "Hyvä asiakaspalvelu ja parhaat huollot." },
  { name: "Pekka Nurmi", when: "2 kk sitten", text: "" },
  { name: "Rikhard Tenlen", when: "2 vuotta sitten", text: "" },
];

export function Stars() {
  return <span aria-label="5/5" className="tracking-widest">★★★★★</span>;
}

export const services = [
  { n: "01", t: "Määräaikaishuollot", d: "Valmistajan ohjelman mukaiset huollot, öljyt ja suodattimet – takuu säilyy." },
  { n: "02", t: "Vianetsintä & diagnostiikka", d: "VAG-merkkien vikakoodit, käyntihäiriöt ja sähköviat paikannetaan tarkasti." },
  { n: "03", t: "Korjaukset", d: "Moottori, vaihteisto, jarrut, alusta ja jousitus – kaikki merkit." },
  { n: "04", t: "Rengastyöt", d: "Renkaanvaihdot, tasapainotukset ja kausisäilytys." },
  { n: "05", t: "Automaalaus", d: "Pienet kolhut ja maalivauriot korjattuna siistiksi." },
  { n: "06", t: "Autopesu", d: "Auto palautuu puhtaana – sisältä ja ulkoa." },
];
