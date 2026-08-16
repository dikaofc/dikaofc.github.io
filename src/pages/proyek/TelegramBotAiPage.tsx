import { PROJECTS } from "../../lib/projects";
import ProjectDetailPage from "./ProjectDetailPage";

export default function TelegramBotAiPage() {
  return <ProjectDetailPage project={PROJECTS.find((p) => p.slug === "telegrambot-ai")!} />;
}
