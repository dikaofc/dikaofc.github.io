import PageShell from "../../components/PageShell";
import { SUBPAGE_NAV_LINKS, SUBPAGE_FOOTER_LINKS } from "../../lib/site";
import LayananHero from "./LayananHero";
import Services from "./Services";
import Benefits from "./Benefits";
import Process from "./Process";
import LayananCta from "./LayananCta";

export default function LayananPage() {
  return (
    <PageShell navLinks={SUBPAGE_NAV_LINKS} footerLinks={SUBPAGE_FOOTER_LINKS}>
      <LayananHero />
      <Services />
      <Benefits />
      <Process />
      <LayananCta />
    </PageShell>
  );
}
