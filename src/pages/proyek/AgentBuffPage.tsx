import { PROJECTS } from "../../lib/projects";
import ProjectDetailPage from "./ProjectDetailPage";

export default function AgentBuffPage() {
  return <ProjectDetailPage project={PROJECTS.find((p) => p.slug === "agentbuff")!} />;
}
