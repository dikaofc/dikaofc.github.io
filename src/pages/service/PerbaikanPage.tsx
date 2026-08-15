import { SERVICES } from "../../lib/services";
import ServiceDetailPage from "./ServiceDetailPage";

export default function PerbaikanPage() {
  return <ServiceDetailPage service={SERVICES.find((s) => s.slug === "layanan/perbaikan")!} />;
}
