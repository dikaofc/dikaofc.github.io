import { PROJECTS } from "../../lib/projects";
import ProjectDetailPage from "./ProjectDetailPage";

export default function FreebuffPatchPage() {
  return <ProjectDetailPage project={PROJECTS.find((p) => p.slug === "freebuff-patch")!} />;
}
