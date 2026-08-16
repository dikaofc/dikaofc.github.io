import { PROJECTS } from "../../lib/projects";
import ProjectDetailPage from "./ProjectDetailPage";

export default function ObitoBuffPage() {
  return <ProjectDetailPage project={PROJECTS.find((p) => p.slug === "obitobuff")!} />;
}
