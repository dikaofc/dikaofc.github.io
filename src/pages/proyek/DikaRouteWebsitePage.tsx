import { PROJECTS } from "../../lib/projects";
import ProjectDetailPage from "./ProjectDetailPage";

export default function DikaRouteWebsitePage() {
  return <ProjectDetailPage project={PROJECTS.find((p) => p.slug === "dikaroute-website")!} />;
}
