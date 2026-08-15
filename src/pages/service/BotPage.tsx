import { SERVICES } from "../../lib/services";
import ServiceDetailPage from "./ServiceDetailPage";

export default function BotPage() {
  return <ServiceDetailPage service={SERVICES.find((s) => s.slug === "layanan/bot")!} />;
}
