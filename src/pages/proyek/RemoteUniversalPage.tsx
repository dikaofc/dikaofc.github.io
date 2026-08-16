import { PROJECTS } from "../../lib/projects";
import ProjectDetailPage from "./ProjectDetailPage";

export default function RemoteUniversalPage() {
  return <ProjectDetailPage project={PROJECTS.find((p) => p.slug === "remoteuniversal")!} />;
}
